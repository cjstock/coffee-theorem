import InputText from "../../common/InputText";
import TextArea from "../../common/TextArea";
import { ACTIONTYPE } from "../../../utils/CoffeeReducer";
import { Input } from "../../../types/coffee";
import { Dispatch } from "react";
import CoffeeSection from "../../common/CoffeeSection";

interface Props {
    state: Input,
    dispatch: Dispatch<ACTIONTYPE>
}
const RoasterSection = ({ state, dispatch }: Props) => {

    const title = "Roaster"
    const description = "Where was the coffee roasted? Many coffee shops roast their own beans."

    return (
        <CoffeeSection title={title} description={description}>

            <InputText
                title="Name"
                id="roasterName"
                type="text"
                placeholder="Roasty McRoasterson"
                value={state.roaster.name}
                handleChange={(e) => dispatch({ type: "HANDLE ROASTER INPUT", field: "name", payload: e.currentTarget.value })}
            />
            <InputText
                title="Website"
                id="roasterUrl"
                type="url"
                placeholder="www.coffee-mcroasterson.com"
                value={state.roaster.url || ""}
                handleChange={(e) => dispatch({ type: "HANDLE ROASTER INPUT", field: "url", payload: e.currentTarget.value })}
            />
            <InputText
                title="Address"
                id="roasterAddress"
                type="text"
                placeholder="123 Roaster St."
                value={state.roaster.address || ""}
                handleChange={(e) => dispatch({ type: "HANDLE ROASTER INPUT", field: "address", payload: e.currentTarget.value })}
            />
            <TextArea
                title="About"
                id="roasterInfo"
                placeholder="The roast it so good."
                value={state.roaster.info || ""}
                handleChange={(e) => dispatch({ type: "HANDLE ROASTER INPUT", field: "info", payload: e.currentTarget.value })}
            />
        </CoffeeSection>
    )
};

export default RoasterSection;
