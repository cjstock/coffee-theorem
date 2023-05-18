import Checkbox from '@ui/Checkbox';
import InputText from '@ui/InputText';
import TextArea from '@ui/TextArea';
import CoffeeSection from '@ui/CoffeeSection';
import { useCoffee, useCoffeeDispatch } from '@utils/CoffeeContext';
import { trpc } from '@utils/trpc';
import ComboBox from '@ui/ComboBox';
import { useState } from 'react';
import type { Option } from '@ui/ComboBox';


const SellerSection = () => {
  const state = useCoffee();
  const dispatch = useCoffeeDispatch();

  const { data: sellers } = trpc.seller.getAll.useQuery();

  const [selectedSeller, setSelectedSeller] = useState<Option | null>(null)

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: 'EditSeller',
      field: 'isRoaster',
      payload: event.currentTarget.checked,
    });
  }
  const handlePressEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && selectedSeller) {
      dispatch({ type: 'SetSeller', seller: sellers?.find(seller => seller.name === selectedSeller.value) });
    }
  };

  const title = 'Seller';
  const description =
    'Where did you buy the beans? This could be a subscription service, coffee shop, or other retailer. They could have also roasted the beans.';

  return (
    <CoffeeSection title={title} description={description}>
      <ComboBox
        label='Name'
        options={sellers?.map((seller) => {
          return { id: seller.id, value: seller.name };
        })}
        selectedOption={ selectedSeller }
      setSelectedOption={setSelectedSeller}
      handleSelectOption={handlePressEnter}
      />
      <InputText
        title='Name'
        id='sellerName'
        type='text'
        placeholder='Coffee McShop'
        value={state.seller?.name}
        handleChange={(e) =>
          dispatch({
            type: 'EditSeller',
            field: 'name',
            payload: e.currentTarget.value,
          })
        }
      />
      <InputText
        title='Website'
        id='sellerUrl'
        type='url'
        placeholder='www.coffee-mcshop.com'
        value={state.seller?.url || ''}
        handleChange={(e) =>
          dispatch({
            type: 'EditSeller',
            field: 'url',
            payload: e.currentTarget.value,
          })
        }
      />
      <InputText
        title='Location'
        id='sellerLocation'
        type='text'
        placeholder='123 Coffee St.'
        value={state.seller?.location || ''}
        handleChange={(e) =>
          dispatch({
            type: 'EditSeller',
            field: 'location',
            payload: e.currentTarget.value,
          })
        }
      />
      <TextArea
        title='About'
        id='sellerInfo'
        placeholder='They sell the best stufferino'
        value={state.seller?.info || ''}
        handleChange={(e) =>
          dispatch({
            type: 'EditSeller',
            field: 'info',
            payload: e.currentTarget.value,
          })
        }
      />
      <Checkbox
        title='Coffee was also roasted here'
        id='sellerIsRoaster'
        isChecked={state.seller?.isRoaster || false}
        handleChange={handleCheckboxChange}
      />
    </CoffeeSection>
  );
};

export default SellerSection;
