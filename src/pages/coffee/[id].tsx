import { useRouter } from "next/router";
import { useEffect, useRef, useState } from 'react';
import Heading from "../../components/pages/coffee-collection/Heading";
import { trpc } from '../../utils/trpc';
import SellerSection from "../../components/pages/coffee/SellerSection";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import BrewerSection from "../../components/pages/coffee/BrewerSection";
import ProducerSection from "../../components/pages/coffee/ProducerSection";
import RoasterSection from "../../components/pages/coffee/RoasterSection";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import BeanSection from "../../components/pages/coffee/BeanSection";
import { useCoffee, useCoffeeDispatch } from '../../utils/CoffeeContext';
import CoffeeSectionAdd from "../../components/pages/coffee/CoffeeSectionAdd";
import { Coffee } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import React from 'react';
import { CoffeeTastingNoteAddOutput } from '../../types/coffee';

function Coffee() {
    const router = useRouter();
    const id = router.query.id as string;   //Get coffee id or "add"
    const session = useSession();
    const titleRef = useRef<HTMLInputElement>(null);
    const queryClient = useQueryClient();

    //Manage local state
    const state = useCoffee();
    const dispatch = useCoffeeDispatch();

    const [isSellerEnabled, setIsSellerEnabled] = useState(false);
    const [isRoasterEnabled, setIsRoasterEnabled] = useState(false);
    const [isProducerEnabled, setIsProducerEnabled] = useState(false);
    const [isBrewerEnabled, setIsBrewerEnabled] = useState(false);

    const animation = useAnimation()


    function loadData(data: Coffee) {
        dispatch({ type: "SET BASE INFO", payload: data });
        data.sellerId && setIsSellerEnabled(true)
        data.roasterId && setIsRoasterEnabled(true)
        data.producerId && setIsProducerEnabled(true)
        data.brewerId && setIsBrewerEnabled(true)
    }

    const coffee = trpc.coffee.byId.useQuery(
        { coffeeId: id },
        {
            enabled: id !== "add" && session.status === "authenticated",
            onSuccess(data) {
                if (data) {
                    loadData(data);
                }
            },
        }
    );
    const upsertCoffeeMutation = trpc.coffee.upsertCoffee.useMutation({
        onSuccess(data) {
            queryClient.setQueryData(["coffee.byId", id], () => {
                return data
            })
        },
    });

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
        if (id === "add" && session.data?.user) {
            dispatch({ type: "RESET", payload: session.data?.user?.id })
        }
    }, [id, session.data?.user, dispatch]);

    const handleSaveClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        upsertCoffeeMutation.mutate(
            { coffee: state },
            {
                onSuccess(data) {
                    state.tastingNotes.forEach(tastingNote => {
                        connectCoffeeToTastingNotesMutation.mutate({ coffeeId: data.id, noteId: tastingNote.id })
                    })
                },
            }
        )

        animation.start({
            scale: [1, 1.2, 1, 1.2, 1],
        })
    };

    return (
        <AnimatePresence>
            {(!coffee.isLoading || id === "add") && (<>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1.5 } }}
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
                    <BeanSection />
                    {isSellerEnabled && <SellerSection sellerId={state.sellerId} />}
                    {isRoasterEnabled && <RoasterSection />}
                    {isProducerEnabled && <ProducerSection />}
                    {isBrewerEnabled && <BrewerSection />}
                    <CoffeeSectionAdd />
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
            </>)}
        </AnimatePresence >
    );
}

export default Coffee;
