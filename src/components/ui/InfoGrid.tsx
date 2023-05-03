import { SetStateAction } from 'react';
import { Reorder } from 'framer-motion';

interface InfoGridProps {
  children?: React.ReactNode;
  state: any;
  setState: SetStateAction<any>;
}

const InfoGrid = ({ state, setState, children }: InfoGridProps) => {
  return (
    <Reorder.Group
      axis='x'
      values={state}
      onReorder={setState}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key={'cards'}
      className='grid w-full grid-cols-1 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'
    >
      {children}
    </Reorder.Group>
  );
};

export default InfoGrid;
