import { Menu, Transition } from '@headlessui/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import { VariantProps, cva } from 'cva';
import { AnimatePresence, Reorder } from 'framer-motion';
import { Fragment } from 'react';
import Tags from './Tags';
import { Option } from './ComboBox';

export interface MenuOption {
  name: string;
  action?: () => void;
}

export const CardStyle = cva([], {
  variants: {
    iconStyle: {
      ExtraDark: 'text-coffee-500',
      Dark: 'text-coffee-500',
      MediumDark: 'text-coffee-400',
      Medium: 'text-coffee-300',
      LightMedium: 'text-coffee-200',
      Light: 'text-coffee-100',
    },
  },
});

export interface InfoCardProps extends VariantProps<typeof CardStyle> {
  id: string;
  icon: React.ReactNode;
  title: string;
  menuOptions: MenuOption[];
  tags?: Option[];
  children?: React.ReactNode;
}

const InfoCard = ({
  id,
  icon,
  title,
  menuOptions,
  tags,
  children,
}: InfoCardProps) => {
  return (
    <AnimatePresence>
      <Reorder.Item
        key={id}
        value={id}
        draggable={false}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className={`overflow-hidden rounded-xl border border-coffee-500 bg-coffee-500`}
      >
        <div className={`flex items-center gap-x-4 border-b p-6`}>
          {icon}
          <div className={`truncate text-lg font-medium leading-6 text-white`}>
            {title}
          </div>
          <Menu as='div' className='relative ml-auto'>
            <Menu.Button className='-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>Open options</span>
              <EllipsisHorizontalIcon className='h-5 w-5' aria-hidden='true' />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-coffee-400 py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
                {menuOptions.map((option) => {
                  return (
                    <Menu.Item key={option.name}>
                      {({ active }) => (
                        <button
                          onClick={option.action}
                          className={`block w-full px-3 py-1 text-sm leading-6 ${
                            active ? 'text-matcha-200' : 'text-gray-400'
                          }`}
                        >
                          {option.name}
                        </button>
                      )}
                    </Menu.Item>
                  );
                })}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <dl
          className={`-my-3 divide-y divide-coffee-300 bg-coffee-500 px-6 py-4 text-sm leading-6`}
        >
          {children}
        </dl>
        <Tags classNames={`pl-4 pb-4`} tags={tags} setTags={() => null} />
      </Reorder.Item>
    </AnimatePresence>
  );
};

export default InfoCard;
