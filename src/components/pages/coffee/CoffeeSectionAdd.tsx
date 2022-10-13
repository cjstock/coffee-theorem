import { motion } from "framer-motion";
import { Disclosure } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';

interface Props {
    hasSeller: boolean
    hasRoaster: boolean
    hasProducer: boolean
    hasBrewer: boolean
    handler: React.MouseEventHandler<HTMLButtonElement>;
}
const CoffeeSectionAdd = ({ hasSeller, hasRoaster, hasProducer, hasBrewer, handler }: Props) => {
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
                                {!hasSeller && <motion.button key="Seller" name="Seller" onClick={handler} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-between py-2 px-4 hover:bg-coffee-400">
                                    <span className="text-matcha-100">{"Seller"}</span>
                                    <span className="text-matcha-200">{"Where you bought the coffee"}</span>
                                </motion.button>
                                }
                                {!hasRoaster && <motion.button key="Roaster" name="Roaster" onClick={handler} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-between py-2 px-4 hover:bg-coffee-400">
                                    <span className="text-matcha-100">{"Roaster"}</span>
                                    <span className="text-matcha-200">{"Where the coffee was roasted"}</span>
                                </motion.button>}
                                {!hasProducer && <motion.button key="Producer" name="Producer" onClick={handler} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-between py-2 px-4 hover:bg-coffee-400">
                                    <span className="text-matcha-100">{"Producer"}</span>
                                    <span className="text-matcha-200">{"Who produced the coffee"}</span>
                                </motion.button>}
                                {!hasBrewer && <motion.button key="Brewer" name="Brewer" onClick={handler} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-between py-2 px-4 hover:bg-coffee-400">
                                    <span className="text-matcha-100">{"Brewer"}</span>
                                    <span className="text-matcha-200">{"Did you or someone else brew them?"}</span>
                                </motion.button>}
                            </motion.div>
                        )
                        }
                    </Disclosure.Panel>
                </>
            </Disclosure>
        </div>
    )
}

export default CoffeeSectionAdd