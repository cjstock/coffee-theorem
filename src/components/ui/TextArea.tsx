interface TextAreaProps {
  title: string;
  id: string;
  placeholder?: string;
  value?: string;
  handleChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}
const TextArea = ({
  id,
  title,
  value,
  handleChange,
  placeholder = 'Example Text',
}: TextAreaProps) => {
  return (
    <div className='col-span-3 sm:col-span-2'>
      <label htmlFor={id} className='block text-sm font-medium text-matcha-100'>
        {title}
      </label>
      <div className='mt-1 flex rounded-md shadow-sm'>
        <textarea
          name={id}
          id={id}
          rows={3}
          className={`form-input block w-full flex-1 rounded-md border-coffee-200 bg-transparent text-matcha-100 transition-colors focus:border-coffee-100 focus:ring-coffee-100 sm:text-sm`}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default TextArea;
