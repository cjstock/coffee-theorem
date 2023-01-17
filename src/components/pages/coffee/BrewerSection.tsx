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
const BrewerSection = ({ state, dispatch }: Props) => {
    const title = "Brewer"
    const description = "Who brewed the coffee when you tried it? Did you brew at home? Did you order a cup of coffee from your favorite local coffee shop?"
    return (
        <CoffeeSection title={title} description={description}>

            <InputText
                title="Name"
                id="brewerName"
                type="text"
                placeholder="Brewy McBrewerson"
                value={state.brewer.name}
                handleChange={e => dispatch({ type: "HANDLE BREWER INPUT", field: "name", payload: e.currentTarget.value })}
            />
            <InputText
                title="Website"
                id="brewerUrl"
                type="url"
                placeholder="www.coffee-shop.com"
                value={state.brewer.url || ""}
                handleChange={e => dispatch({ type: "HANDLE BREWER INPUT", field: "url", payload: e.currentTarget.value })}
            />
            <InputText
                title="Address"
                id="brewerAddress"
                type="text"
                placeholder="123 Lovecup Way."
                value={state.brewer.address || ""}
                handleChange={e => dispatch({ type: "HANDLE BREWER INPUT", field: "address", payload: e.currentTarget.value })}
            />
            <TextArea
                title="About"
                id="brewerInfo"
                placeholder="Mmmmmm coffee."
                value={state.brewer.info || ""}
                handleChange={e => dispatch({ type: "HANDLE BREWER INPUT", field: "info", payload: e.currentTarget.value })}
            />
        </CoffeeSection>
    )
};

export default BrewerSection;
