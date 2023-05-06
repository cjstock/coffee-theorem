import { motion } from 'framer-motion';
import Divider from './Divider';
import { ReactNode } from 'react';

interface Props {
  title: string;
  description: string;
  withDivider?: boolean;
  children: ReactNode;
}
const CoffeeSection = ({
  title,
  description,
  withDivider = true,
  children,
}: Props) => {
  return (
    <motion.div
      className='overflow-visible'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0 }}
    >
      {withDivider && <Divider intent={'dashed'} />}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 'auto', transition: { duration: 0.2 } }}
        className='overflow-visible md:grid md:grid-cols-3 md:gap-6'
      >
        <div className='md:col-span-1'>
          <div className='px-4 sm:px-0'>
            <h3 className='text-2xl font-medium text-matcha-100'>{title}</h3>
            <p className='mt-1 text-sm text-coffee-100'>{description}</p>
          </div>
        </div>
        <div className='mt-5 md:col-span-2 md:mt-0'>
          <form action='#' method='POST'>
            <div className='overflow-visible shadow sm:rounded-md'>
              <div className='space-y-6 bg-coffee-500 px-4 py-5 sm:p-6'>
                <div className='grid grid-cols-3 gap-6'>{children}</div>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CoffeeSection;
