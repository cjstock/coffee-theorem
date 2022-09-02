import { ReactNode } from "react";

interface Props {
    title: string;
    children: ReactNode;
}

const LearnCollapse = ({ title, children }: Props) => {
    return (
        <div
            tabIndex={0}
            className="collapse collapse-arrow border-secondary bg-base-100 border-2 rounded-lg"
        >
            <div className="collapse-title text-xl font-medium">{title}</div>
            <div className="collapse-content">{children}</div>
        </div>
    );
};

export default LearnCollapse;
