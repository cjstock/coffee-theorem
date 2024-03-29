import { CheckIcon } from '@heroicons/react/24/outline';
import Heading from '@page-components/coffee-collection/Heading';
import BeanSection from '@page-components/coffee/BeanSection';
import ProducerSection from '@page-components/coffee/ProducerSection';
import RoasterSection from '@page-components/coffee/RoasterSection';
import SectionAdd from '@page-components/coffee/SectionAdd';
import SellerSection from '@page-components/coffee/SellerSection';
import { useQueryClient } from '@tanstack/react-query';
import { trpc } from '@utils/trpc';
import { AnimatePresence, motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import Router, { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { ACTIONTYPE } from '../../utils/CoffeeReducer';
import { CoffeeByIdOutput } from '../../types/coffee';
import { useCoffee, useCoffeeDispatch } from '@utils/CoffeeContext';

function Coffee() {
  const router = useRouter();
  const id = router.query.id as string; //Get coffee id or "add"
  const session = useSession();
  const titleRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const {data: allTastingNotes} = trpc.tastingNotes.getAll.useQuery();

  //Manage local state
  const state = useCoffee();
  const dispatch = useCoffeeDispatch();

  const [enabledSections, setEnabledSections] = useState<Array<string>>([]);


  trpc.coffee.byId.useQuery(
    { coffeeId: id },
    {
      enabled: session.status === 'authenticated' && id !== 'add',
      onSuccess(data: CoffeeByIdOutput) {
        if (data) {
          dispatch({ type: 'LoadCoffee', coffee: data });
          data.seller &&
            enableSection('seller', {
              type: 'SetSeller',
              seller: data.seller,
            });
          data.roaster &&
            enableSection('roaster', {
              type: 'SetRoaster',
              roaster: data.roaster,
            });
          data.producer &&
            enableSection('producer', {
              type: 'SetProducer',
              producer: data.producer,
            });
          dispatch({
            type: 'SetTastingNotes',
            notes: allTastingNotes?.filter(
              (note) =>
                data.coffeeTastingNotes.findIndex(
                  (cNote) => cNote.tastingNoteId === note.id
                ) !== -1
            ),
          });
        }
      },
      refetchOnWindowFocus: false,
    }
  );
  const upsertCoffee = trpc.coffee.upsert.useMutation({
    onSuccess(data) {
      queryClient.setQueryData(['coffee.byId', id], () => {
        return data;
      });
      Router.back();
    },
  });

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus();
    }
    id === 'add' && dispatch({type: 'Reset'});
    session.data?.user?.id &&
      dispatch({
        type: 'EditCoffeeField',
        field: 'userId',
        payload: session.data.user.id,
      });
  }, [session.data, dispatch, id]);

  const handleSaveClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    upsertCoffee.mutate(state);
  };

  const enableSection = (element: string, type: ACTIONTYPE) => {
    dispatch(type);
    setEnabledSections((curr) => {
      return curr.includes(element) ? curr : [...curr, element];
    });
  };

  // const disableSection = (element: string) => {
  //   setEnabledSections((curr) => {
  //     return curr.filter((section) => section !== element);
  //   });
  // };

  const sections = {
    seller: {
      title: 'seller',
      jsx: <SellerSection key={'seller'} />,
      addFunction: () => enableSection('seller', { type: 'AddEmptySeller' }),
    },
    roaster: {
      title: 'roaster',
      jsx: <RoasterSection key={'roaster'} />,
      addFunction: () => enableSection('roaster', { type: 'AddEmptyRoaster' }),
    },
    producer: {
      title: 'producer',
      jsx: <ProducerSection key={'producer'} />,
      addFunction: () =>
        enableSection('producer', { type: 'AddEmptyProducer' }),
    },
  };

  console.log(state);

  return (
    <AnimatePresence>
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          key={'body'}
        >
          <Heading
            leftSide={
              <input
                type='text'
                name='origin'
                id='origin'
                key='left'
                ref={titleRef}
                className='block w-full border-0 bg-gradient-to-r from-coffee-400 to-coffee-500 text-2xl font-semibold -tracking-tight text-matcha-100 focus:ring-0'
                placeholder='Origin'
                value={state.coffee.origin}
                onChange={(e) =>
                  dispatch({
                    type: 'EditCoffeeField',
                    field: e.currentTarget.name,
                    payload: e.currentTarget.value,
                  })
                }
              />
            }
          />
          <BeanSection />
          {enabledSections.map(
            (name) => sections[name as 'seller' | 'roaster' | 'producer'].jsx
          )}
          {!enabledSections.includes('seller') && (
            <SectionAdd title='Seller' onClick={sections.seller.addFunction} />
          )}
          {!enabledSections.includes('roaster') && (
            <SectionAdd
              title='Roaster'
              onClick={sections.roaster.addFunction}
            />
          )}
          {!enabledSections.includes('producer') && (
            <SectionAdd
              title='Producer'
              onClick={sections.producer.addFunction}
            />
          )}
        </motion.div>
        <motion.button
          initial={{ width: 'auto', height: 'atuo' }}
          transition={{
            duration: 1,
            times: [0, 0.25, 0.75, 1],
          }}
          key='button'
          type='submit'
          className='fixed bottom-10 right-10 inline-flex items-center rounded-full border border-transparent bg-matcha-100 p-3 text-center text-coffee-500 shadow-sm transition-colors focus:outline-none md:bottom-20 md:right-20'
          onClick={handleSaveClick}
        >
          <CheckIcon className='h-10 w-10' />
        </motion.button>
      </>
    </AnimatePresence>
  );
}

export default Coffee;
