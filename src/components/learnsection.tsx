import { ReactNode } from "react";

interface Props {
    title: string;
    children?: ReactNode;
    className?: string;
}

const LearnSection = ({ title, children, className }: Props) => {
    return (
        <div
            className={`border-secondary border-2 border-dotted rounded-lg p-5 m-3 ${className}`}
        >
            <div className="text-left">
                <h2 className="text-xl mb-2 font-bold">{title}</h2>
                {children}
            </div>
        </div>
    );
};

export default LearnSection;
