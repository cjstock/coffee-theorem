import { motion } from "framer-motion";
import { Disclosure } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";

interface Props {
    title: string,
    onClick: () => void
}
const SectionAdd = ({ title, onClick }: Props) => {

    return (
        <div onClick={onClick} className="w-full mt-4 z-40 overflow-visible border-2 border-dashed border-coffee-300 rounded-md hover:border-coffee-100 transition-colors">
            <Disclosure className="z-40 overflow-visible" as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.2 } }}
                exit={{ opacity: 0 }}
            >
                <Disclosure.Button className="flex w-full z-40 overflow-visible justify-between rounded-md bg-coffee-500 px-4 py-4 text-center font-medium text-coffee-100">
                    <span className="text-matcha-100 capitalize">{title}</span>
                    <PlusIcon className="h-5 w-5" />
                </Disclosure.Button>
                <Disclosure.Panel static>
                </Disclosure.Panel>
            </Disclosure>
        </div>
    )
}

export default SectionAdd