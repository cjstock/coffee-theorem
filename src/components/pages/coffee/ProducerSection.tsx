import InputText from '../../ui/InputText';
import TextArea from '../../ui/TextArea';
import CoffeeSection from '../../ui/CoffeeSection';
import { useCoffee, useCoffeeDispatch } from '@utils/CoffeeContext';

const ProducerSection = () => {
  const state = useCoffee();
  const dispatch = useCoffeeDispatch();

  const title = 'Producer';
  const description =
    'Where was the coffee produced? This could be a large company, or a single farm. The primary group responsible for everything up until roasting.';

  return (
    <CoffeeSection title={title} description={description}>
      <InputText
        title='Name'
        id='producerName'
        type='text'
        placeholder='Bean McProducerino'
        value={state.producer?.name}
        handleChange={(e) =>
          dispatch({
            type: 'EditProducer',
            field: 'name',
            payload: e.currentTarget.value,
          })
        }
      />
      <InputText
        title='Website'
        id='producerUrl'
        type='url'
        placeholder='www.coffee-mcproducer.com'
        value={state.producer?.url || ''}
        handleChange={(e) =>
          dispatch({
            type: 'EditProducer',
            field: 'url',
            payload: e.currentTarget.value,
          })
        }
      />
      <InputText
        title='Location'
        id='producerLocation'
        type='text'
        placeholder='123 Bourbon Varietal St.'
        value={state.producer?.location || ''}
        handleChange={(e) =>
          dispatch({
            type: 'EditProducer',
            field: 'location',
            payload: e.currentTarget.value,
          })
        }
      />
      <TextArea
        title='About'
        id='producerInfo'
        placeholder='#HightAltitudeLife'
        value={state.producer?.info || ''}
        handleChange={(e) =>
          dispatch({
            type: 'EditProducer',
            field: 'info',
            payload: e.currentTarget.value,
          })
        }
      />
    </CoffeeSection>
  );
};

export default ProducerSection;
