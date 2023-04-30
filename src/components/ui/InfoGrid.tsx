import { Fragment, SetStateAction } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import { Reorder } from 'framer-motion';

const statuses = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
};
const clients = [
  {
    id: 1,
    name: 'this is a very long name here',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
    lastInvoice: {
      date: 'December 13, 2022',
      dateTime: '2022-12-13',
      amount: '$2,000.00',
      status: 'Overdue',
    },
  },
  {
    id: 2,
    name: 'SavvyCal',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
    lastInvoice: {
      date: 'January 22, 2023',
      dateTime: '2023-01-22',
      amount: '$14,000.00',
      status: 'Paid',
    },
  },
  {
    id: 3,
    name: 'Reform',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
    lastInvoice: {
      date: 'January 23, 2023',
      dateTime: '2023-01-23',
      amount: '$7,600.00',
      status: 'Paid',
    },
  },
];

interface InfoGridProps {
  children?: React.ReactNode;
  state: any;
  setState: SetStateAction<any>;
}

const InfoGrid = ({ state, setState, children }: InfoGridProps) => {
  return (
    <Reorder.Group
      axis='x'
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
  );
};

export default InfoGrid;
