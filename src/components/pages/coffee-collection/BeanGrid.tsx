import { Bean } from "@prisma/client";
import { Reorder } from "framer-motion";
import { useState } from "react";
import BeanCard from "./BeanCard";

interface Props {
    beans: Array<Bean>;
}
const BeanGrid: React.FC<Props> = ({ beans }: Props) => {
    const [beanState, setBeanState] = useState(beans);

    return (
        <Reorder.Group
            axis="x"
            values={beanState}
            onReorder={setBeanState}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            drag={false}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
            {beanState.map((bean) => (
                <BeanCard key={bean.id} bean={bean} />
            ))}
        </Reorder.Group>
    );
};

export default BeanGrid;
