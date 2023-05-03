import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { trpc } from '../utils/trpc';
import Heading from '../components/pages/coffee-collection/Heading';
import Router from 'next/router';
import Unauthorized from '../components/ui/Unauthorized';
import { z } from 'zod';
import { coffeeModel } from '../../prisma/zod/coffee';
import ButtonDropDown from '@ui/ButtonDropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffeeBeans,
  faShop,
  faFireplace,
  faFarm,
  faList,
  faMagnifyingGlass,
} from '@fortawesome/pro-solid-svg-icons';
import InfoGrid, { OnReorder } from '@ui/InfoGrid';
import InfoCard, { CardStyle } from '@ui/InfoCard';
import { useQueryClient } from '@tanstack/react-query';
import {
  brewerModel,
  producerModel,
  roasterModel,
  sellerModel,
} from 'prisma/zod';
import { cva } from 'cva';
import { filtered } from '@utils/utils';

const Home: NextPage = () => {
  const session = useSession();
  const queryClient = useQueryClient();

  const [coffeeState, setCoffeeState] = useState<
    Array<z.infer<typeof coffeeModel>>
  >([]);
  const { data: coffees } = trpc.coffee.getAll.useQuery(undefined, {
    refetchOnWindowFocus: false,
    enabled: session.status == 'authenticated',
    onSuccess(data) {
      setCoffeeState(data);
    },
  });

  const [sellerState, setSellerState] = useState<
    Array<z.infer<typeof sellerModel>>
  >([]);
  trpc.seller.getAll.useQuery(
    { coffees: coffees },
    {
      enabled: !!coffees,
      onSuccess(data) {
        setSellerState(data);
      },
    }
  );

  const [roasterState, setRoasterState] = useState<
    Array<z.infer<typeof roasterModel>>
  >([]);
  trpc.roaster.getAll.useQuery(
    { coffees: coffees },
    {
      enabled: !!coffees,
      onSuccess(data) {
        setRoasterState(data);
      },
    }
  );

  const [producerState, setProducerState] = useState<
    Array<z.infer<typeof producerModel>>
  >([]);
  trpc.producer.getAll.useQuery(
    { coffees: coffees },
    {
      enabled: !!coffees,
      onSuccess(data) {
        setProducerState(data);
      },
    }
  );

  const [brewerState, setBrewerState] = useState<
    Array<z.infer<typeof brewerModel>>
  >([]);
  trpc.brewer.getAll.useQuery(
    { coffees: coffees },
    {
      enabled: !!coffees,
      onSuccess(data) {
        setBrewerState(data);
      },
    }
  );

  const deleteCoffee = trpc.coffee.deleteCoffee.useMutation({
    onSuccess(data) {
      queryClient.invalidateQueries(['coffee.getAll']);
      setCoffeeState((prev) => prev.filter((coffee) => coffee.id !== data.id));
    },
  });

  const tabs = ['Coffees', 'Sellers', 'Roasters', 'Producers', 'Brewers'];
  const [selectedTab, setSelectedTab] = useState('Coffees');

  const TabStyles = cva(
    ['text-sm rounded-md px-3 py-2 font-medium transition-all'],
    {
      variants: {
        intent: {
          selected: ['bg-matcha-300 text-coffee-500'],
          default: ['bg-coffee-400 text-coffee-100'],
        },
      },
    }
  );

  const tabNav = (
    <>
      <div className='md:hidden'>
        <label htmlFor='tabs' className='sr-only'>
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id='tabs'
          name='tabs'
          className='block w-full rounded-md border-coffee-300 bg-coffee-500 text-coffee-100 focus:border-coffee-300 focus:ring-coffee-300'
          defaultValue={'Coffees'}
          onChange={(e) => setSelectedTab(e.currentTarget.value)}
        >
          {tabs.map((tab) => (
            <option key={tab}>{tab}</option>
          ))}
        </select>
      </div>
      <div className='hidden md:block'>
        <nav className='flex space-x-4' aria-label='Tabs'>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={TabStyles({
                intent: selectedTab === tab ? 'selected' : 'default',
              })}
              aria-current={tab == selectedTab ? 'page' : undefined}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </>
  );

  const [searchText, setSearchText] = useState('');
  const rightSide = (
    <div className='mt-3 flex justify-between md:ml-4 md:mt-0'>
      <ButtonDropDown />
      <label htmlFor='mobile-search-candidate' className='sr-only'>
        Filter
      </label>
      <label htmlFor='desktop-search-candidate' className='sr-only'>
        Filter
      </label>
      <div className='flex rounded-md shadow-sm'>
        <div className='relative flex-grow focus-within:z-10'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className='h-5 w-5 text-matcha-200'
            />
          </div>
          <input
            type='text'
            name='mobile-search-candidate'
            id='mobile-search-candidate'
            value={searchText}
            onChange={(e) => setSearchText(e.currentTarget.value)}
            className='block w-full rounded rounded-l-md border-coffee-300 bg-coffee-500 pl-10 text-matcha-200 transition-colors focus:border-coffee-200 focus:ring-coffee-200 sm:hidden'
            placeholder='Filter'
          />
          <input
            type='text'
            name='desktop-search-candidate'
            id='desktop-search-candidate'
            value={searchText}
            onChange={(e) => setSearchText(e.currentTarget.value)}
            className='hidden w-full rounded rounded-l-md border-coffee-300 bg-coffee-500 pl-10 text-matcha-200 transition-colors focus:border-coffee-200 focus:ring-coffee-200 sm:block sm:text-sm'
            placeholder='Filter Coffees'
          />
        </div>
      </div>
    </div>
  );

  if (session.status == 'unauthenticated') return <Unauthorized />;
  return (
    <>
      <Heading key={'heading'} leftSide={tabNav} rightSide={rightSide} />
      {selectedTab === 'Coffees' && (
        <InfoGrid state={coffeeState} setState={setCoffeeState as OnReorder}>
          {filtered(coffeeState, searchText).map((coffee) => {
            return (
              <InfoCard
                id={coffee.id}
                title={coffee.origin}
                icon={
                  <FontAwesomeIcon
                    icon={faCoffeeBeans}
                    className={`h-11 w-11 rounded border-2 border-matcha-500 bg-matcha-400/30 p-1 ${CardStyle(
                      {
                        iconStyle: `${coffee.roast}`,
                      }
                    )}`}
                  />
                }
                key={coffee.id}
                menuOptions={[
                  {
                    name: 'Edit',
                    action: () => Router.push(`coffee/${coffee.id}`),
                  },
                  {
                    name: 'Remove',
                    action: () => deleteCoffee.mutate({ coffeeId: coffee.id }),
                  },
                ]}
                info={coffee}
                cardBorder={coffee.roast}
                headerStyle={coffee.roast}
                titleColor={coffee.roast}
                body={coffee.roast}
                dataLabel={coffee.roast}
                dataText={coffee.roast}
              />
            );
          })}
        </InfoGrid>
      )}
      {selectedTab === 'Sellers' && (
        <InfoGrid state={sellerState} setState={setSellerState as OnReorder}>
          {filtered(sellerState, searchText).map((seller) => {
            return (
              <InfoCard
                id={seller.id}
                title={seller.name}
                icon={
                  <FontAwesomeIcon
                    icon={faShop}
                    className={`h-11 w-11 rounded border-2 border-matcha-500 bg-matcha-400/30 p-1 ${CardStyle(
                      {
                        iconStyle: 'Light',
                      }
                    )}`}
                  />
                }
                key={seller.id}
                menuOptions={[
                  {
                    name: 'Edit',
                    action: () => null,
                  },
                  {
                    name: 'Remove',
                    action: () => null,
                  },
                ]}
                info={seller}
                cardBorder={'Dark'}
                headerStyle={'Dark'}
                titleColor={'Dark'}
                body={'Dark'}
                dataLabel={'Dark'}
                dataText={'Dark'}
              />
            );
          })}
        </InfoGrid>
      )}
      {selectedTab === 'Roasters' && (
        <InfoGrid state={roasterState} setState={setRoasterState as OnReorder}>
          {filtered(roasterState, searchText).map((roaster) => {
            return (
              <InfoCard
                id={roaster.id}
                title={roaster.name}
                icon={
                  <FontAwesomeIcon
                    icon={faFireplace}
                    className={`h-11 w-11 rounded border-2 border-matcha-500 bg-matcha-400/30 p-1 ${CardStyle(
                      {
                        iconStyle: 'Light',
                      }
                    )}`}
                  />
                }
                key={roaster.id}
                menuOptions={[
                  {
                    name: 'Edit',
                    action: () => null,
                  },
                  {
                    name: 'Remove',
                    action: () => null,
                  },
                ]}
                info={roaster}
                cardBorder={'Dark'}
                headerStyle={'Dark'}
                titleColor={'Dark'}
                body={'Dark'}
                dataLabel={'Dark'}
                dataText={'Dark'}
              />
            );
          })}
        </InfoGrid>
      )}
      {selectedTab === 'Producers' && (
        <InfoGrid
          state={producerState}
          setState={setProducerState as OnReorder}
        >
          {filtered(producerState, searchText).map((producer) => {
            return (
              <InfoCard
                id={producer.id}
                title={producer.name}
                icon={
                  <FontAwesomeIcon
                    icon={faFarm}
                    className={`h-11 w-11 rounded border-2 border-matcha-500 bg-matcha-400/30 p-1 ${CardStyle(
                      {
                        iconStyle: 'Light',
                      }
                    )}`}
                  />
                }
                key={producer.id}
                menuOptions={[
                  {
                    name: 'Edit',
                    action: () => null,
                  },
                  {
                    name: 'Remove',
                    action: () => null,
                  },
                ]}
                info={producer}
                cardBorder={'Dark'}
                headerStyle={'Dark'}
                titleColor={'Dark'}
                body={'Dark'}
                dataLabel={'Dark'}
                dataText={'Dark'}
              />
            );
          })}
        </InfoGrid>
      )}
      {selectedTab === 'Brewers' && (
        <InfoGrid state={brewerState} setState={setBrewerState as OnReorder}>
          {brewerState.map((brewer) => {
            return (
              <InfoCard
                id={brewer.id}
                title={brewer.name}
                icon={
                  <FontAwesomeIcon
                    icon={faList}
                    className={`h-11 w-11 rounded border-2 border-matcha-500 bg-matcha-400/30 p-1 ${CardStyle(
                      {
                        iconStyle: 'Light',
                      }
                    )}`}
                  />
                }
                key={brewer.id}
                menuOptions={[
                  {
                    name: 'Edit',
                    action: () => null,
                  },
                  {
                    name: 'Remove',
                    action: () => null,
                  },
                ]}
                info={brewer}
                cardBorder={'Dark'}
                headerStyle={'Dark'}
                titleColor={'Dark'}
                body={'Dark'}
                dataLabel={'Dark'}
                dataText={'Dark'}
              />
            );
          })}
        </InfoGrid>
      )}
    </>
  );
};

export default Home;
