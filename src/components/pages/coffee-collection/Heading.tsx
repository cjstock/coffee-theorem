import { motion } from "framer-motion";

interface HeadingProps {
    leftSide: React.ReactNode;
    rightSide?: React.ReactNode;
}
const Heading = ({ leftSide, rightSide }: HeadingProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-5 border-b border-matcha-100 pb-5 mb-10 sm:flex sm:items-center sm:justify-between w-full"
        >
            {leftSide}
            {rightSide && rightSide}
        </motion.div>
    );
};

export default Heading;
