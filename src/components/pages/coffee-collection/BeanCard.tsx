import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { Coffee } from "@prisma/client";
import clsx from "clsx";
import { Reorder } from "framer-motion";

interface Props {
    coffee: Coffee;
}
const BeanCard: React.FC<Props> = ({ coffee }: Props) => {

    console.log(coffee.roast)
    const bgColor = clsx(
        coffee.roast === "Light" && "bg-coffee-100"
        || coffee.roast === "Light Medium" && "bg-coffee-200"
        || coffee.roast === "Medium" && "bg-coffee-300"
        || coffee.roast === "Medium Dark" && "bg-coffee-300"
        || coffee.roast === "Dark" && "bg-coffee-400"
        || coffee.roast === "Extra Dark" && "bg-coffee-500"
        || "bg-coffee-300"
    )
    const textColor = clsx(
        coffee.roast === "Light" && "text-coffee-500"
        || coffee.roast === "Light Medium" && "text-coffee-500"
        || coffee.roast === "Medium" && "text-coffee-500"
        || coffee.roast === "Medium Dark" && "text-coffee-500"
        || coffee.roast === "Dark" && "text-coffee-100"
        || coffee.roast === "Extra Dark" && "text-coffee-100"
        || "bg-coffee-300"
    )

    return (
        <Reorder.Item
            value={coffee}
            key={coffee.id}
            drag={false}
            className={`flex flex-col w-80 rounded-lg ${bgColor} border border-coffee-300 text-left transition-colors`}
        >
            <ul className="flex flex-1 flex-col p-8">
                <h1 className={`mx-auto text-xl text-matcha-100`}>
                    {`${coffee.origin}`}
                </h1>
                <dl className="mt-1 flex flex-grow flex-col">
                    <dt className={`${textColor} text-sm mt-3`}>Process</dt>
                    <dd className="mt-1">
                        <span className={`text-md font-medium ${textColor}`}>
                            {coffee.process && coffee.process}
                        </span>
                    </dd>
                    <dt className={`${textColor} text-sm mt-3`}>
                        Tasting Notes
                    </dt>
                    <dd className="mt-1">
                    </dd>
                </dl>
            </ul>
            <div className="mt-auto flex place-self-end w-full">
                <div className="flex flex-1">
                    <button className={`-mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium ${textColor} hover:${textColor}`}>
                        <PencilSquareIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                        />
                        <span className="ml-3">Edit</span>
                    </button>
                </div>
                <div className="-ml-px flex flex-1">
                    <button className={` inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium ${textColor} hover:${textColor}`}>
                        <TrashIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="ml-3">Delete</span>
                    </button>
                </div>
            </div>
        </Reorder.Item>
    );
};

export default BeanCard;
