import { TastingNote } from "@prisma/client";
import { processOptions, roastOptions } from "../../../types/coffee";
import InputText from "../../common/InputText";
import Select from "../../common/Select";
import React from 'react';
import TastingNotes from "../../common/TastingNotes";
import { useCoffee, useCoffeeDispatch } from '../../../utils/CoffeeContext';
import { motion } from "framer-motion";

interface BeanSectionProps {
    tastingNotes: Array<TastingNote>;
}
const BeanSection = ({ tastingNotes }: BeanSectionProps) => {
    const state = useCoffee();
    const dispatch = useCoffeeDispatch();
    return (
        <motion.div layout initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto", transition: { duration: 1 } }} exit={{ opacity: 0 }}>
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-matcha-100">
                            Bean
                        </h3>
                        <p className="mt-1 text-sm text-coffee-100">
                            This section is meant to contain characteristics
                            and growing conditions provided by the
                            seller/roaster/producer.
                        </p>
                    </div>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                    <form action="#" method="POST">
                        <div className="shadow sm:overflow-hidden sm:rounded-md">
                            <div className="space-y-6 bg-coffee-400 px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-3 gap-6">
                                    <Select
                                        title="Roast Level"
                                        id="roast"
                                        options={roastOptions}
                                        selected={state.roast || ""}
                                        dispatch={dispatch}
                                    />
                                    <Select
                                        title="Processing Method"
                                        id="process"
                                        options={processOptions}
                                        selected={state.process || ""}
                                        dispatch={dispatch}
                                    />
                                    <TastingNotes
                                        title="Tasting Notes"
                                        id="tastingNotes"
                                        options={tastingNotes}
                                    />
                                    <InputText
                                        title="Altitude"
                                        id="altitude"
                                        value={state.altitude || 0}
                                        handleChange={(e) => dispatch({ type: "HANDLE INPUT TEXT", field: "altitude", payload: e.currentTarget.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default BeanSection;
