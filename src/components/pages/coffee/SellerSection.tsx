import Checkbox from '@ui/Checkbox';
import InputText from '@ui/InputText';
import TextArea from '@ui/TextArea';
import { Dispatch } from 'react';
import { ACTIONTYPE, initialState } from '../../../utils/CoffeeReducer';
import CoffeeSection from '@ui/CoffeeSection';

interface Props {
  state: typeof initialState;
  dispatch: Dispatch<ACTIONTYPE>;
}
const SellerSection = ({ state, dispatch }: Props) => {
  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: 'EditSeller',
      field: 'isRoaster',
      payload: event.currentTarget.checked,
    });
  }

  const title = 'Seller';
  const description =
    'Where did you buy the beans? This could be a subscription service, coffee shop, or other retailer. They could have also roasted the beans.';

  return (
    <CoffeeSection title={title} description={description}>
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
        title='Address'
        id='sellerAddress'
        type='text'
        placeholder='123 Coffee St.'
        value={state.seller?.address || ''}
        handleChange={(e) =>
          dispatch({
            type: 'EditSeller',
            field: 'address',
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
