import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffeeBeans,
  faShop,
  faFireplace,
  faFarm,
  faList,
  faChevronDown,
  faPlus,
} from '@fortawesome/pro-solid-svg-icons';
import Router from 'next/router';
import { cva } from 'cva';

const icon = cva(['w-6', 'h-6', 'text-matcha-200']);

const solutions = [
  {
    name: 'Coffee',
    description: 'How exciting!',
    href: '#',
    icon: <FontAwesomeIcon icon={faCoffeeBeans} className={icon()} />,
  },
  {
    name: 'Seller',
    description: 'Placeholder',
    href: '#',
    icon: <FontAwesomeIcon icon={faShop} className={icon()} />,
  },
  {
    name: 'Roaster',
    description: 'Placeholder',
    href: '#',
    icon: <FontAwesomeIcon icon={faFireplace} className={icon()} />,
  },
  {
    name: 'Farmer/Producer',
    description: 'Placeholder',
    href: '#',
    icon: <FontAwesomeIcon icon={faFarm} className={icon()} />,
  },
  {
    name: 'Recipe',
    description: 'Placeholder',
    href: '#',
    icon: <FontAwesomeIcon icon={faList} className={icon()} />,
  },
];

export default function ButtonDropDown() {
  return (
    <Popover className='relative'>
      <Popover.Button className='mr-5 inline-flex w-24 items-center justify-center rounded-md border border-transparent bg-matcha-400 p-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-matcha-300 focus:outline-none focus:ring-0'>
        <FontAwesomeIcon icon={faPlus} className='h-5 w-5' aria-hidden='true' />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'
      >
        <Popover.Panel className='fixed left-1/2 z-50 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 lg:absolute'>
          <div className='w-screen max-w-md flex-auto overflow-hidden rounded-3xl border-2 border-coffee-300 bg-coffee-500 text-sm leading-6 shadow-lg'>
            <div className='p-4'>
              {solutions.map((item) => (
                <div
                  key={item.name}
                  className='group relative flex gap-x-6 rounded-lg p-4 hover:bg-coffee-400'
                >
                  <div className='mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-coffee-400 group-hover:bg-coffee-300'>
                    {item.icon}
                  </div>
                  <div>
                    <button
                      onClick={() => Router.push('coffee/add')}
                      className='font-semibold text-matcha-200'
                    >
                      {item.name}
                      <span className='absolute inset-0' />
                    </button>
                    <p className='mt-1 text-coffee-200'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
