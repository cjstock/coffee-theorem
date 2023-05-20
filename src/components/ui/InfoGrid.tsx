import { AnimatePresence, Reorder } from 'framer-motion';

export type OnReorder = (newOrder: object[]) => void;

interface InfoGridProps {
  children?: React.ReactNode;
  state: object[];
  setState: OnReorder;
}

const InfoGrid = ({ state, setState, children }: InfoGridProps) => {
  return (
    <AnimatePresence>
      <Reorder.Group
        dragListener={false}
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
    </AnimatePresence>
  );
};

export default InfoGrid;
