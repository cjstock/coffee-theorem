import { useEffect, useRef, useState, useReducer, Key } from 'react';
import Heading from "../../components/pages/coffee-collection/Heading";
import { trpc } from '../../utils/trpc';
import SellerSection from "../../components/pages/coffee/SellerSection";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import BrewerSection from "../../components/pages/coffee/BrewerSection";
import ProducerSection from "../../components/pages/coffee/ProducerSection";
import RoasterSection from "../../components/pages/coffee/RoasterSection";
import { CheckIcon } from "@heroicons/react/24/outline";
import BeanSection from "../../components/pages/coffee/BeanSection";
import { initialState, reducer } from "../../utils/CoffeeReducer";
import { useQueryClient } from "@tanstack/react-query";
import React from 'react';
import { CoffeeTastingNoteAddOutput } from '../../types/coffee';
import SectionAdd from '../../components/pages/coffee/SectionAdd';
import { useSession } from 'next-auth/react';

function AddCoffee() {
    const titleRef = useRef<HTMLInputElement>(null);
    const queryClient = useQueryClient();
    const session = useSession();

    //Manage local state
    const [state, dispatch] = useReducer(reducer, initialState)

    const [enabledSections, setEnabledSections] = useState<Array<string>>([])

    const animation = useAnimation()


    const upsertCoffeeMutation = trpc.coffee.upsertCoffee.useMutation();
    const upsertSellerMutation = trpc.seller.upsertSeller.useMutation({
        onSuccess(data) {
            //*TODO add data.seller.id to state
        }
    });
    const upsertRoasterMutation = trpc.roaster.upsertRoaster.useMutation();
    const upsertProducerMutation = trpc.producer.upsertProducer.useMutation();
    const upsertBrewerMutation = trpc.brewer.upsertBrewer.useMutation();

    const connectCoffeeToTastingNotesMutation = trpc.tastingNotes.connectCoffeeToNote.useMutation({
        onSuccess(data) {
            queryClient.setQueryData(["tastingNotes.byCoffeeId"], (oldData: Array<CoffeeTastingNoteAddOutput> | undefined) => {
                if (oldData) {
                    return [...oldData, data]
                }
                return [data]
            })
        },
    })

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.focus();
        }
    }, []);

    const enableSection = (element: string) => {
        setEnabledSections(curr => {
            return curr.includes(element) ?
                curr :
                [...curr, element]
        })

    }

    const disableSection = (element: string) => {
        setEnabledSections(curr => {
            return curr.filter(section => section !== element)
        })
    }

    const handleSaveClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        session.data?.user &&
            upsertCoffeeMutation.mutate(
                { coffee: { ...state, userId: session.data?.user?.id } },
                {
                    onSuccess(data) {
                        state.tastingNotes.forEach(tastingNote => {
                            connectCoffeeToTastingNotesMutation.mutate({ coffeeId: data.id || state.id, noteId: tastingNote.id })
                        })
                    },
                }
            )

        animation.start({
            scale: [1, 1.2, 1, 1.2, 1],
        })
    };

    const sections: Record<string, JSX.Element> = {
        "seller": <SellerSection state={state} dispatch={dispatch} />,
        "roaster": <RoasterSection state={state} dispatch={dispatch} />,
        "producer": <ProducerSection state={state} dispatch={dispatch} />,
        "brewer": <BrewerSection state={state} dispatch={dispatch} />,
    }

    return (
        <AnimatePresence>
            <>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    key={"body"}
                >
                    <Heading leftSide={
                        <input
                            type="text"
                            name="origin"
                            id="origin"
                            key="left"
                            ref={titleRef}
                            className="block w-full border-0 bg-coffee-500 focus:ring-0 text-2xl text-matcha-100"
                            placeholder="Origin"
                            value={state.origin}
                            onChange={(e) => dispatch({
                                type: "HANDLE INPUT TEXT",
                                field: e.currentTarget.name,
                                payload: e.currentTarget.value,
                            })} />
                    } />
                    <BeanSection state={state} dispatch={dispatch} />
                    {enabledSections.map(name => sections[name])}
                    {!enabledSections.includes("seller") && <SectionAdd title='Seller' onClick={() => enableSection("seller")} />}
                    {!enabledSections.includes("roaster") && <SectionAdd title='Roaster' onClick={() => enableSection("roaster")} />}
                    {!enabledSections.includes("producer") && <SectionAdd title='Producer' onClick={() => enableSection("producer")} />}
                    {!enabledSections.includes("brewer") && <SectionAdd title='Brewer' onClick={() => enableSection("brewer")} />}

                </motion.div >
                <motion.button
                    initial={{ width: "auto", height: "atuo" }}
                    animate={animation}
                    transition={{
                        duration: 1,
                        times: [0, 0.25, 0.75, 1]
                    }}
                    key="button"
                    type="submit"
                    className="fixed bottom-10 md:bottom-20 right-10 md:right-20 inline-flex items-center text-center rounded-full border border-transparent bg-matcha-100 p-3 text-coffee-500 shadow-sm focus:outline-none transition-colors"
                    onClick={handleSaveClick}
                >
                    <CheckIcon className="h-10 w-10" />
                </motion.button>
            </>
        </AnimatePresence >
    );
}

export default AddCoffee;
