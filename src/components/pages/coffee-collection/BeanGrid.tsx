import { Reorder } from "framer-motion";
import { useState } from "react";
import BeanCard from "./BeanCard";
import { coffeeModel } from '../../../../prisma/zod/coffee';
import { z } from "zod";

interface Props {
    coffees: Array<z.infer<typeof coffeeModel>>;
}
const BeanGrid: React.FC<Props> = ({ coffees }: Props) => {
    const [coffeesState, setCoffeesState] = useState(coffees);

    return (
        <Reorder.Group
            axis="x"
            values={coffeesState}
            onReorder={setCoffeesState}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            drag={false}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
            {coffeesState.map((coffee) => (
                <BeanCard key={coffee.id} coffee={coffee} />
            ))}
        </Reorder.Group>
    );
};

export default BeanGrid;
