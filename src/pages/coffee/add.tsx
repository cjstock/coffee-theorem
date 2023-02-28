import { useEffect, useRef, useState, useReducer } from 'react';
import Heading from "../../components/pages/coffee-collection/Heading";
import { trpc } from '../../utils/trpc';
import SellerSection from "../../components/pages/coffee/SellerSection";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import BrewerSection from "../../components/pages/coffee/BrewerSection";
import ProducerSection from "../../components/pages/coffee/ProducerSection";
import RoasterSection from "../../components/pages/coffee/RoasterSection";
import { CheckIcon } from "@heroicons/react/24/outline";
import BeanSection from "../../components/pages/coffee/BeanSection";
import { ACTIONTYPE, initialState, reducer } from "../../utils/CoffeeReducer";
import React from 'react';
import SectionAdd from '../../components/pages/coffee/SectionAdd';
import { useSession } from 'next-auth/react';
import Router from "next/router";

function AddCoffee() {
    const titleRef = useRef<HTMLInputElement>(null);
    const session = useSession();

    //Manage local state
    const [state, dispatch] = useReducer(reducer, initialState)

    const [enabledSections, setEnabledSections] = useState<Array<string>>([])

    const animation = useAnimation()

    const addCoffee = trpc.coffee.add.useMutation({
        onSuccess() {
            Router.push("/");
        }
    })


    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.focus();
        }
        if (session.data && session.data.user) {
            dispatch({ type: "EditCoffeeField", field: "userId", payload: session.data.user.id })
        }
    }, [session.data]);

    const enableSection = (element: string, type: ACTIONTYPE) => {
        dispatch(type)
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
        addCoffee.mutate(state)
    };

    const sections = {
        "seller": {
            "title": "seller",
            "jsx": <SellerSection key={"seller"} state={state} dispatch={dispatch} />,
            "addFunction": () => enableSection("seller", { type: "AddEmptySeller" })
        },
        "roaster": {
            "title": "roaster",
            "jsx": <RoasterSection key={"roaster"} state={state} dispatch={dispatch} />,
            "addFunction": () => enableSection("roaster", { type: "AddEmptyRoaster" })
        },
        "producer": {
            "title": "producer",
            "jsx": <ProducerSection key={"producer"} state={state} dispatch={dispatch} />,
            "addFunction": () => enableSection("producer", { type: "AddEmptyProducer" })
        },
        "brewer": {
            "title": "brewer",
            "jsx": <BrewerSection key={"brewer"} state={state} dispatch={dispatch} />,
            "addFunction": () => enableSection("brewer", { type: "AddEmptyBrewer" })
        }
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
                            value={state.coffee.origin}
                            onChange={(e) => dispatch({
                                type: "EditCoffeeField",
                                field: e.currentTarget.name,
                                payload: e.currentTarget.value,
                            })} />
                    } />
                    <BeanSection state={state} dispatch={dispatch} />
                    {enabledSections.map(name => sections[name as "seller" | "roaster" | "producer" | "brewer"].jsx)}
                    {!enabledSections.includes("seller") && <SectionAdd title='Seller' onClick={sections.seller.addFunction} />}
                    {!enabledSections.includes("roaster") && <SectionAdd title='Roaster' onClick={sections.roaster.addFunction} />}
                    {!enabledSections.includes("producer") && <SectionAdd title='Producer' onClick={sections.producer.addFunction} />}
                    {!enabledSections.includes("brewer") && <SectionAdd title='Brewer' onClick={sections.brewer.addFunction} />}

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
