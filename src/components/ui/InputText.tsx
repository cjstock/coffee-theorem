import React from 'react';

interface InputTextProps {
  title: string;
  id: string;
  value?: string | number;
  placeholder?: string;
  type?: 'text' | 'email' | 'url' | 'search';
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
}
const InputText = ({
  id,
  title,
  type,
  value,
  handleChange,
  placeholder = 'Example Text',
}: InputTextProps) => {
  let roundedClass = '';
  if (type === 'url') {
    roundedClass = 'rounded-r-md';
  } else if (id === 'altitude') {
    roundedClass = 'rounded-l-md';
  } else {
    roundedClass = 'rounded-md';
  }
  return (
    <div className='col-span-3 sm:col-span-2'>
      <label htmlFor={id} className='block text-sm font-medium text-matcha-100'>
        {title}
      </label>
      <div className='mt-1 flex rounded-md shadow-sm'>
        {type === 'url' && (
          <span className='inline-flex items-center rounded-l-md border border-r-0 border-coffee-300 bg-transparent px-3 text-sm text-coffee-100'>
            http://
          </span>
        )}
        <input
          type={type || 'text'}
          name={id}
          id={id}
          value={value}
          className={`form-input block w-full flex-1 ${roundedClass} border-coffee-200 bg-transparent text-matcha-100 transition-colors focus:border-coffee-100 focus:ring-1 focus:ring-coffee-100 focus:ring-offset-1 focus:ring-offset-coffee-100 sm:text-sm`}
          placeholder={placeholder}
          onChange={handleChange}
        />
        {id === 'altitude' && (
          <span
            className='inline-flex items-center rounded-r-md border border-l-0 border-coffee-300 bg-coffee-400 px-3 text-coffee-100 sm:text-sm'
            id='altitude-meters'
          >
            Meters (above sea level)
          </span>
        )}
      </div>
    </div>
  );
};

export default InputText;
