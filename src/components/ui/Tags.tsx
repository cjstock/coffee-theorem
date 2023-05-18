import { AnimatePresence, Reorder } from 'framer-motion';
import { Option } from './ComboBox';
import { Dispatch } from 'react';
import { ACTIONTYPE } from '@utils/CoffeeReducer';

interface TagsProps {
  tags?: Option[];
  setTags?: Dispatch<ACTIONTYPE>;
  handleRemove?: (option: Option) => void;
  classNames?: string;
}

function Tags({ tags, handleRemove, setTags, classNames }: TagsProps) {
  return (
    <AnimatePresence>
      <Reorder.Group
        values={tags || []}
        onReorder={() => setTags}
        axis='x'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={classNames}
      >
        {tags &&
          tags.map((tag) => (
            <Reorder.Item
              value={tag}
              key={tag.id}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='mx-1 my-1 inline-flex items-center gap-x-0.5 rounded-md bg-matcha-200 px-2 py-1 text-xs font-medium text-coffee-500'
            >
              {tag.value}
              {handleRemove && (
                <button
                  type='button'
                  className='group relative -mr-1 h-3.5 w-3.5 rounded-full hover:bg-gray-500/20'
                  onClick={() => handleRemove && handleRemove(tag)}
                >
                  <span className='sr-only'>Remove</span>
                  <svg
                    viewBox='0 0 14 14'
                    className='h-3.5 w-3.5 stroke-gray-700/50 group-hover:stroke-gray-700/75'
                  >
                    <path d='M4 4l6 6m0-6l-6 6' />
                  </svg>
                  <span className='absolute -inset-1' />
                </button>
              )}
            </Reorder.Item>
          ))}
      </Reorder.Group>
    </AnimatePresence>
  );
}

export default Tags;
