import { processOptions, roastOptions } from '../../../types/coffee';
import InputText from '../../ui/InputText';
import Select from '../../ui/Select';
import React, { useState } from 'react';
import CoffeeSection from '../../ui/CoffeeSection';
import { Option } from '@ui/ComboBox';
import MyComboBox from '@ui/ComboBox';
import Tags from '@ui/Tags';
import { trpc } from '@utils/trpc';
import { TastingNote } from '@prisma/client';
import { useCoffee, useCoffeeDispatch } from '@utils/CoffeeContext';

const BeanSection = () => {
  const title = 'Bean';
  const description =
    'This section is meant to contain characteristics and growing conditions provided by the seller/roaster/producer.';

  const state = useCoffee();
  const dispatch = useCoffeeDispatch();

  const { data: tastingNotes } = trpc.tastingNotes.getAll.useQuery();
  const removeTastingNote = trpc.tastingNotes.removeFromCoffee.useMutation();

  const [selectedOption, setSelectedOption] = useState<TastingNote | null>(
    null
  );

  const handleRemove = (option: Option) => {
    dispatch({ type: 'RemoveTastingNote', noteId: option.id });
    removeTastingNote.mutate({coffeeId: state.coffee.id, noteId: option.id})
  };

  const handlePressEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && selectedOption) {
      console.log(selectedOption);
      dispatch({ type: 'AddTastingNote', note: selectedOption });
      setSelectedOption(null);
    }
  };

  return (
    <CoffeeSection title={title} description={description} withDivider={false}>
      <Select
        title='Roast Level'
        id='roast'
        options={roastOptions}
        selected={state.coffee.roast || ''}
        dispatch={dispatch}
      />
      <Select
        title='Processing Method'
        id='process'
        options={processOptions}
        selected={state.coffee.process || ''}
        dispatch={dispatch}
      />
      <InputText
        title='Altitude'
        id='altitude'
        value={state.coffee.altitude || 0}
        handleChange={(e) =>
          dispatch({
            type: 'EditCoffeeField',
            field: 'altitude',
            payload: e.currentTarget.value,
          })
        }
      />
      <MyComboBox
        label='Tasting Notes'
        placeholder='What do you taste?'
        options={tastingNotes}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        handleSelectOption={handlePressEnter}
      />
      <div className='col-span-3 sm:col-span-2'>
        {state.tastingNotes.length > 0 && (
          <Tags
            tags={state.tastingNotes}
            handleRemove={handleRemove}
            setTags={() =>
              dispatch({
                type: 'SetTastingNotes',
                notes: state.tastingNotes,
              })
            }
          />
        )}
      </div>
    </CoffeeSection>
  );
};

export default BeanSection;
