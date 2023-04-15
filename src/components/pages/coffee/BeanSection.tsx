import { processOptions, roastOptions } from '../../../types/coffee';
import InputText from '../../ui/InputText';
import Select from '../../ui/Select';
import React from 'react';
import { Dispatch } from 'react';
import { ACTIONTYPE, initialState } from '../../../utils/CoffeeReducer';
import CoffeeSection from '../../ui/CoffeeSection';

interface Props {
  state: typeof initialState;
  dispatch: Dispatch<ACTIONTYPE>;
}
const BeanSection = ({ state, dispatch }: Props) => {
  const title = 'Bean';
  const description =
    'This section is meant to contain characteristics and growing conditions provided by the seller/roaster/producer.';

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
    </CoffeeSection>
  );
};

export default BeanSection;
