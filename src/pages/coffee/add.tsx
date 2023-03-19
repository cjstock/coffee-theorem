import { useEffect, useRef } from 'react';
import Heading from "../../components/pages/coffee-collection/Heading";
import { trpc } from '../../utils/trpc';
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/outline";
import BeanSection from "../../components/pages/coffee/BeanSection";
import React from 'react';
import SectionAdd from '../../components/pages/coffee/SectionAdd';
import { useCoffeeSections } from '../../utils/UseCoffeeSections'
import Router from 'next/router';

function AddCoffee() {
    const titleRef = useRef<HTMLInputElement>(null);


    const animation = useAnimation()

    const addCoffee = trpc.coffee.add.useMutation({
        onSuccess() {
            Router.push("/");
        }
    })

    const {
        brewer,
        containsSection,
        disableSection,
        dispatch,
        enableSection,
        enabledSections,
        producer,
        roaster,
        seller,
        state
    } = useCoffeeSections()

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.focus();
        }
    }, []);

    const handleSaveClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        addCoffee.mutate(state)
    };

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
                    {enabledSections.map(section => section.jsx)}
                    {!containsSection(seller) && <SectionAdd title='Seller' onClick={() => enableSection(seller, state)} />}
                    {!containsSection(roaster) && <SectionAdd title='Roaster' onClick={() => enableSection(roaster, state)} />}
                    {!containsSection(producer) && <SectionAdd title='Producer' onClick={() => enableSection(producer, state)} />}
                    {!containsSection(brewer) && <SectionAdd title='Brewer' onClick={() => enableSection(brewer, state)} />}

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
