import { Option } from './ComboBox';

interface TagsProps {
  tags: Option[];
  handleRemove: (option: Option) => void;
}

const Tags = ({ tags, handleRemove }: TagsProps) => {
  return (
    <>
      {tags.map((tag) => (
        <span
          key={tag.id}
          className='mx-1 inline-flex items-center gap-x-0.5 rounded-md bg-matcha-200 px-2 py-1 text-xs font-medium text-coffee-500'
        >
          {tag.value}
          <button
            type='button'
            className='group relative -mr-1 h-3.5 w-3.5 rounded-full hover:bg-gray-500/20'
            onClick={() => handleRemove(tag)}
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
        </span>
      ))}
    </>
  );
};

export default Tags;
