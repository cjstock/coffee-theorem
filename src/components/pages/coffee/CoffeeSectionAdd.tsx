import { motion } from "framer-motion";
import { Disclosure } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState, Dispatch, SetStateAction } from 'react';
import { SectionsState } from '../../../pages/coffee/[id]';

const sections = [
    { name: "Seller", description: "Where you bought the coffee" },
    { name: "Roaster", description: "Where the coffee was roasted" },
    { name: "Producer", description: "Who produced the coffee" },
    { name: "Brewer", description: "Did you or someone else brew them?" }
]

interface Props {
    state: SectionsState;
    handler: Dispatch<SetStateAction<SectionsState>>
}
const CoffeeSectionAdd = ({ state, handler }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full mt-4 border-2 border-dashed border-coffee-300 rounded-md hover:border-coffee-100 transition-colors">
            <Disclosure as={motion.div} animate={{ height: isOpen ? 220 : 56, transition: { type: "tween", duration: 0.2 } }}>
                <>
                    <Disclosure.Button onClick={() => setIsOpen(!isOpen)} className="flex w-full justify-between rounded-md bg-coffee-500 px-4 py-4 text-center font-medium text-coffee-100">
                        <span>Add Section</span>
                        <PlusIcon className="h-5 w-5" />
                    </Disclosure.Button>
                    <Disclosure.Panel>
                        {isOpen && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { staggerChildren: 0.5 } }} className="flex flex-col">
                                <motion.button key="Seller" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-between py-2 px-4 hover:bg-coffee-400">
                                    <span className="text-matcha-100">{"Seller"}</span>
                                    <span className="text-matcha-200">{"Where you bought the coffee"}</span>
                                </motion.button>
                                <motion.button key="Roaster" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-between py-2 px-4 hover:bg-coffee-400">
                                    <span className="text-matcha-100">{"Roaster"}</span>
                                    <span className="text-matcha-200">{"Where the coffee was roasted"}</span>
                                </motion.button>
                                <motion.button key="Producer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-between py-2 px-4 hover:bg-coffee-400">
                                    <span className="text-matcha-100">{"Producer"}</span>
                                    <span className="text-matcha-200">{"Who produced the coffee"}</span>
                                </motion.button>
                                <motion.button key="Brewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-between py-2 px-4 hover:bg-coffee-400">
                                    <span className="text-matcha-100">{"Brewer"}</span>
                                    <span className="text-matcha-200">{"Did you or someone else brew them?"}</span>
                                </motion.button>
                            </motion.div>
                        )
                        }
                    </Disclosure.Panel>
                </>
            </Disclosure>
        </div>
    )
}

export default CoffeeSectionAdd;