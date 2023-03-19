import clsx from "clsx";
import { Reorder } from "framer-motion";
import { coffeeModel } from '../../../../prisma/zod/coffee';
import { z } from "zod";

interface Props {
    coffee: z.infer<typeof coffeeModel>;
}
const BeanCard: React.FC<Props> = ({ coffee }: Props) => {

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
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, scale: 0 }}
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
                </dl>
            </ul>
        </Reorder.Item>
    );
};

export default BeanCard;
