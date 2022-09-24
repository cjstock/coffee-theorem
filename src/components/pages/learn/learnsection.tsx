import { ReactNode } from "react";

interface Props {
    title: string;
    children?: ReactNode;
    className?: string;
}

const LearnSection = ({ title, children, className }: Props) => {
    return (
        <div
            className={`bg-base-100 border-coffee-300 border-2 rounded-lg p-5 m-3 w-full ${className}`}
        >
            <div className="text-left text-matcha-100">
                <h2 className="text-xl mb-2 font-bold">{title}</h2>
                {children}
            </div>
        </div>
    );
};

export default LearnSection;