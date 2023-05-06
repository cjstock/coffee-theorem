import { processOptions, roastOptions } from '../../../types/coffee';
import InputText from '../../ui/InputText';
import Select from '../../ui/Select';
import React, { useState } from 'react';
import { Dispatch } from 'react';
import { ACTIONTYPE, initialState } from '../../../utils/CoffeeReducer';
import CoffeeSection from '../../ui/CoffeeSection';
import { Option } from '@ui/ComboBox';
import ComboBox from '@ui/ComboBox';
import Tags from '@ui/Tags';

interface Props {
  state: typeof initialState;
  dispatch: Dispatch<ACTIONTYPE>;
}
const BeanSection = ({ state, dispatch }: Props) => {
  const title = 'Bean';
  const description =
    'This section is meant to contain characteristics and growing conditions provided by the seller/roaster/producer.';

  const [selectedTastingNotes, setSelectedTastingNotes] = useState<Option[]>(
    []
  );

  const handleRemove = (option: Option) => {
    setSelectedTastingNotes((prev) => {
      return prev.filter((tastingNote) => tastingNote.id !== option.id);
    });
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
      <ComboBox
        label='Tasting Notes'
        options={[
          { id: 1, value: 'Chocolate' },
          { id: 2, value: 'Vanilla' },
        ]}
        handleSelectedOptionsChange={setSelectedTastingNotes}
      />
      <div className='col-span-3 sm:col-span-2'>
        {selectedTastingNotes.length > 0 && (
          <Tags tags={selectedTastingNotes} handleRemove={handleRemove} />
        )}
      </div>
    </CoffeeSection>
  );
};

export default BeanSection;
