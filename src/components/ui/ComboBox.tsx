import { useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';
import classNames from '@utils/ClassNames';

export interface Option {
  id: string;
  value: string;
}


interface ComboBoxProps {
  label: string;
  placeholder?: string;
  selectedOption: Option | null;
  setSelectedOption: (option: Option) => void;
  options?: Option[];
  handleSelectOption: (e: React.KeyboardEvent<HTMLElement>) => void;
}

export default function ComboBox({
  label,
  placeholder,
  options,
  selectedOption,
  setSelectedOption,
  handleSelectOption 
}: ComboBoxProps) {
  const [query, setQuery] = useState('');

  const filteredOptions =
    query === ''
      ? options
      : options
      ? options.filter((option) => {
          return option.value.toLowerCase().includes(query.toLowerCase());
        })
      : [];

  return (
    <Combobox
      as='div'
      value={selectedOption}
      onChange={setSelectedOption}
      className='col-span-3 sm:col-span-2'
    >
      <Combobox.Label className='block text-sm font-medium leading-6 text-matcha-200'>
        {label}
      </Combobox.Label>
      <div className='relative mt-2'>
        <Combobox.Input
          className='relative w-full cursor-default rounded-md border border-coffee-200 bg-transparent py-2 pl-3 pr-10 text-left text-matcha-200 caret-matcha-200 shadow-sm transition-all focus:border-coffee-300 focus:ring-1 focus:ring-coffee-300 focus:ring-offset-1 focus:ring-offset-coffee-300 sm:text-sm'
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          displayValue={(option: Option) => option?.value}
          onKeyUp={(e) => handleSelectOption(e)}
        />
        <Combobox.Button className='absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none'>
          <ChevronUpDownIcon
            className='h-5 w-5 text-matcha-300'
            aria-hidden='true'
          />
        </Combobox.Button>

        {filteredOptions && filteredOptions.length > 0 && (
          <Combobox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border-2 border-coffee-300 bg-coffee-500 py-1 text-base shadow-lg ring-1 ring-coffee-200 ring-opacity-5 focus:outline-none sm:text-sm'>
            {filteredOptions.map((option) => (
              <Combobox.Option
                key={option.id}
                value={option}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-coffee-400 text-matcha-300' : 'text-gray-400'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        'block truncate',
                        selected ? 'font-semibold' : ''
                      )}
                    >
                      {option.value}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className='h-5 w-5' aria-hidden='true' />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
