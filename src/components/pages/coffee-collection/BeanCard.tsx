import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { Coffee } from "@prisma/client";

import { Reorder } from "framer-motion";

interface Props {
    coffee: Coffee;
}
const BeanCard: React.FC<Props> = ({ coffee }: Props) => {
    return (
        <Reorder.Item
            value={coffee}
            key={coffee.id}
            className="flex flex-col w-80 rounded-lg bg-coffee-300 text-left transition-colors"
        >
            <ul className="flex flex-1 flex-col p-8">
                <h1 className="mx-auto text-xl text-matcha-100">
                    {`${coffee.origin}`}
                </h1>
                <dl className="mt-1 flex flex-grow flex-col">
                    <dt className="text-matcha-100 text-sm mt-3">Process</dt>
                    <dd className="mt-1">
                        <span className="text-md font-medium text-matcha-100">
                            {coffee.process && coffee.process}
                        </span>
                    </dd>
                    <dt className="text-matcha-100 text-sm mt-3">
                        Tasting Notes
                    </dt>
                    <dd className="mt-1">
                    </dd>
                </dl>
            </ul>
            <div className="mt-auto flex place-self-end w-full">
                <div className="flex flex-1">
                    <button className="-mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-matcha-200 hover:text-matcha-100">
                        <PencilSquareIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                        />
                        <span className="ml-3">Edit</span>
                    </button>
                </div>
                <div className="-ml-px flex flex-1">
                    <button className=" inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-matcha-200 hover:text-matcha-100">
                        <TrashIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="ml-3">Delete</span>
                    </button>
                </div>
            </div>
        </Reorder.Item>
    );
};

export default BeanCard;
