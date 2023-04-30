import { Menu, Transition } from '@headlessui/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import { Brewer, Coffee, Producer, Roaster, Seller } from '@prisma/client';
import { VariantProps, cva } from 'cva';
import { Reorder } from 'framer-motion';
import {
  brewerModel,
  coffeeModel,
  producerModel,
  roasterModel,
  sellerModel,
} from 'prisma/zod';
import { Fragment } from 'react';
import { z } from 'zod';

export interface MenuOption {
  name: string;
  action?: () => void;
}

export const CardStyle = cva([], {
  variants: {
    cardBorder: {
      Dark: 'border-coffee-500',
      Medium: 'border-coffee-400',
      Light: 'border-coffee-200',
      LightMedium: 'border-coffee-200',
      MediumDark: 'border-coffee-400',
      ExtraDark: 'border-coffee-500',
    },
    headerStyle: {
      Dark: 'border-coffee-200 bg-coffee-500',
      Medium: 'border-coffee-300 bg-coffee-500',
      Light: 'border-coffee-400 bg-coffee-500',
      LightMedium: 'border-coffee-200 bg-coffee-500',
      MediumDark: 'border-coffee-200 bg-coffee-500',
      ExtraDark: 'border-coffee-200 bg-coffee-500',
    },
    titleColor: {
      Dark: 'text-white',
      Medium: 'text-white',
      Light: 'text-white',
      LightMedium: 'text-white',
      MediumDark: 'text-white',
      ExtraDark: 'text-white',
    },
    iconStyle: {
      ExtraDark: 'text-coffee-500',
      Dark: 'text-coffee-500',
      MediumDark: 'text-coffee-400',
      Medium: 'text-coffee-300',
      LightMedium: 'text-coffee-200',
      Light: 'text-coffee-100',
    },
    body: {
      Dark: 'divide-coffee-300 bg-coffee-500',
      Medium: 'divide-coffee-300 bg-coffee-500',
      Light: 'divide-coffee-300 bg-coffee-500',
      LightMedium: 'divide-coffee-300 bg-coffee-500',
      MediumDark: 'divide-coffee-300 bg-coffee-500',
      ExtraDark: 'divide-coffee-300 bg-coffee-500',
    },
    dataLabel: {
      Dark: 'text-coffee-100',
      Medium: 'text-coffee-100',
      Light: 'text-coffee-100',
      LightMedium: 'text-coffee-100',
      MediumDark: 'text-coffee-100',
      ExtraDark: 'text-coffee-100',
    },
    dataText: {
      Dark: 'text-white',
      Medium: 'text-white',
      Light: 'text-white',
      LightMedium: 'text-white',
      MediumDark: 'text-white',
      ExtraDark: 'text-white',
    },
  },
});

export interface InfoCardProps extends VariantProps<typeof CardStyle> {
  id: string;
  icon: React.ReactNode;
  title: string;
  menuOptions: MenuOption[];
  info:
    | z.infer<typeof coffeeModel>
    | z.infer<typeof sellerModel>
    | z.infer<typeof roasterModel>
    | z.infer<typeof producerModel>
    | z.infer<typeof brewerModel>;
}

const InfoCard = ({
  id,
  icon,
  title,
  menuOptions,
  info,
  cardBorder = 'Dark',
  headerStyle = 'Dark',
  titleColor = 'Dark',
  body = 'Dark',
  dataLabel = 'Dark',
  dataText,
}: InfoCardProps) => {
  const excludedInfo = [
    'id',
    'userId',
    'sellerId',
    'roasterId',
    'producerId',
    'brewerId',
    'recipes',
    'isFavorite',
    'origin',
    'roast',
    'info',
    'name',
  ];
  const filteredInfo = Object.entries(info).filter(
    (entry) => excludedInfo.indexOf(entry[0]) == -1
  );
  return (
    <Reorder.Item
      key={id}
      value={info}
      drag={false}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className={`overflow-hidden rounded-xl border ${CardStyle({
        cardBorder,
      })}`}
    >
      <div
        className={`flex items-center gap-x-4 border-b ${CardStyle({
          headerStyle,
        })} p-6`}
      >
        {icon}
        <div
          className={`truncate text-lg font-medium leading-6 ${CardStyle({
            titleColor,
          })}`}
        >
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
        className={`-my-3 divide-y ${CardStyle({
          body,
        })} px-6 py-4 text-sm leading-6`}
      >
        {filteredInfo.map((entry) => {
          return (
            <div key={entry[0]} className='flex justify-between gap-x-4 py-3'>
              <dt className={`capitalize ${CardStyle({ dataLabel })}`}>
                {entry[0]}
              </dt>
              <dd
                className={`truncate ${
                  entry[1] ? CardStyle({ dataText }) : 'text-gray-500'
                }`}
              >
                {entry[1] || 'Empty'}
              </dd>
            </div>
          );
        })}
      </dl>
    </Reorder.Item>
  );
};

export default InfoCard;
