import Checkbox from "../../common/Checkbox";
import InputText from "../../common/InputText";
import TextArea from "../../common/TextArea";
import { trpc } from "../../../utils/trpc";
import { Input } from "../../../types/coffee";
import { Dispatch } from "react";
import { ACTIONTYPE } from "../../../utils/CoffeeReducer";
import CoffeeSection from "../../common/CoffeeSection";

interface Props {
    state: Input,
    dispatch: Dispatch<ACTIONTYPE>
}
const SellerSection = ({ state, dispatch }: Props) => {

    const seller = trpc.seller.byId.useQuery({ sellerId: state.seller.id }, {
        enabled: !!state.seller.id,
        onSuccess(data) {
            data && dispatch({ type: "SET SELLER INFO", payload: data })
        },
    })


    function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch({ type: "HANDLE SELLER INPUT", field: "isRoaster", payload: event.currentTarget.checked })
    }

    const title = "Seller"
    const description = "Where did you buy the beans? This could be a subscription service, coffee shop, or other retailer. They could have also roasted the beans."

    return (
        <CoffeeSection title={title} description={description}>
            <InputText
                title="Name"
                id="sellerName"
                type="text"
                placeholder="Coffee McShop"
                value={state.seller.name}
                handleChange={(e) => dispatch({ type: "HANDLE SELLER INPUT", field: "name", payload: e.currentTarget.value })}
            />
            <InputText
                title="Website"
                id="sellerUrl"
                type="url"
                placeholder="www.coffee-mcshop.com"
                value={state.seller.url || ""}
                handleChange={(e) => dispatch({ type: "HANDLE SELLER INPUT", field: "url", payload: e.currentTarget.value })}
            />
            <InputText
                title="Address"
                id="sellerAddress"
                type="text"
                placeholder="123 Coffee St."
                value={state.seller.address || ""}
                handleChange={(e) => dispatch({ type: "HANDLE SELLER INPUT", field: "address", payload: e.currentTarget.value })}
            />
            <TextArea
                title="About"
                id="sellerInfo"
                placeholder="They sell the best stufferino"
                value={state.seller.info || ""}
                handleChange={(e) => dispatch({ type: "HANDLE SELLER INPUT", field: "info", payload: e.currentTarget.value })}
            />
            <Checkbox
                title="Coffee was also roasted here"
                id="sellerIsRoaster"
                isChecked={state.seller.isRoaster}
                handleChange={handleCheckboxChange}
            />
        </CoffeeSection>
    )
};

export default SellerSection;
