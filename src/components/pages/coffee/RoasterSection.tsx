import InputText from '../../ui/InputText';
import TextArea from '../../ui/TextArea';
import CoffeeSection from '../../ui/CoffeeSection';
import { useCoffee, useCoffeeDispatch } from '@utils/CoffeeContext';

const RoasterSection = () => {
  const state = useCoffee();
  const dispatch = useCoffeeDispatch();

  const title = 'Roaster';
  const description =
    'Where was the coffee roasted? Many coffee shops roast their own beans.';

  return (
    <CoffeeSection title={title} description={description}>
      <InputText
        title='Name'
        id='roasterName'
        type='text'
        placeholder='Roasty McRoasterson'
        value={state.roaster?.name}
        handleChange={(e) =>
          dispatch({
            type: 'EditRoaster',
            field: 'name',
            payload: e.currentTarget.value,
          })
        }
      />
      <InputText
        title='Website'
        id='roasterUrl'
        type='url'
        placeholder='www.coffee-mcroasterson.com'
        value={state.roaster?.url || ''}
        handleChange={(e) =>
          dispatch({
            type: 'EditRoaster',
            field: 'url',
            payload: e.currentTarget.value,
          })
        }
      />
      <InputText
        title='Location'
        id='roasterLocation'
        type='text'
        placeholder='123 Roaster St.'
        value={state.roaster?.location || ''}
        handleChange={(e) =>
          dispatch({
            type: 'EditRoaster',
            field: 'location',
            payload: e.currentTarget.value,
          })
        }
      />
      <TextArea
        title='About'
        id='roasterInfo'
        placeholder='The roast it so good.'
        value={state.roaster?.info || ''}
        handleChange={(e) =>
          dispatch({
            type: 'EditRoaster',
            field: 'info',
            payload: e.currentTarget.value,
          })
        }
      />
    </CoffeeSection>
  );
};

export default RoasterSection;
