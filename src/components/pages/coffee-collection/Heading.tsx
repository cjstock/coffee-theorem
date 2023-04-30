import { motion } from 'framer-motion';

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
      className='mb-10 w-full justify-between border-b-2 border-coffee-200 bg-clip-border px-5 pb-5 sm:flex sm:items-center sm:justify-between'
    >
      {leftSide}
      {rightSide && rightSide}
    </motion.div>
  );
};

export default Heading;
