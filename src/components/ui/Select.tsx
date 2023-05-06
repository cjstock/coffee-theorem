import { Dispatch, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import classNames from '../../utils/ClassNames';
import { ACTIONTYPE } from '../../utils/CoffeeReducer';

interface SelectProps {
  title: string;
  id: string;
  options: Array<string>;
  selected: string;
  dispatch: Dispatch<ACTIONTYPE>;
}
const Select = ({ title, id, options, selected, dispatch }: SelectProps) => {
  const handleChange = (value: string) => {
    dispatch({
      type: 'EditCoffeeField',
      field: id,
      payload: value,
    });
  };

  return (
    <Listbox value={selected} onChange={(v) => handleChange(v)}>
      {({ open }) => (
        <div className='col-span-3 sm:col-span-2'>
          <Listbox.Label className='block text-sm font-medium text-matcha-200'>
            {title}
          </Listbox.Label>
          <div className='relative mt-1'>
            <Listbox.Button
              tabIndex={0}
              className='relative w-full cursor-default rounded-md border border-coffee-200 bg-transparent py-2 pl-3 pr-10 text-left shadow-sm transition-all focus:border-coffee-100 focus:ring-1 focus:ring-coffee-100 focus:ring-offset-1 focus:ring-offset-coffee-100 sm:text-sm'
            >
              <span className='inline-flex w-full truncate'>
                <span className='truncate text-matcha-100'>{selected}</span>
              </span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                <ChevronUpDownIcon
                  className='h-5 w-5 text-matcha-100'
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-50 mt-1 w-full rounded-md border-2 border-coffee-300 bg-coffee-500 py-1 text-coffee-200 shadow-lg ring-0 focus:outline-none sm:text-sm'>
                {options.map((option) => (
                  <Listbox.Option
                    key={option}
                    className={({ active }) =>
                      classNames(
                        active
                          ? 'bg-gradient-to-r from-coffee-400 to-coffee-500 text-matcha-100'
                          : 'text-matcha-100',
                        'relative z-50 cursor-pointer select-none rounded-sm py-2 pl-3 pr-9 transition-all'
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className='flex'>
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'truncate'
                            )}
                          >
                            {option}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-matcha-100' : 'text-coffee-100',
                              'absolute inset-y-0 right-0 z-50 flex items-center pr-4 transition-colors'
                            )}
                          >
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
};

export default Select;
