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
const ProducerSection = ({ state, dispatch }: Props) => {

    const title = "Producer"
    const description = "Where was the coffee produced? This could be a large company, or a single farm. The primary group responsible for everything up until roasting."

    return (
        <CoffeeSection title={title} description={description}>

            <InputText
                title="Name"
                id="producerName"
                type="text"
                placeholder="Bean McProducerino"
                value={state.producer.name}
                handleChange={e => dispatch({ type: "HANDLE PRODUCER INPUT", field: "name", payload: e.currentTarget.value })}
            />
            <InputText
                title="Website"
                id="producerUrl"
                type="url"
                placeholder="www.coffee-mcproducer.com"
                value={state.producer.url || ""}
                handleChange={e => dispatch({ type: "HANDLE PRODUCER INPUT", field: "url", payload: e.currentTarget.value })}
            />
            <InputText
                title="Address"
                id="producerAddress"
                type="text"
                placeholder="123 Bourbon Varietal St."
                value={state.producer.address || ""}
                handleChange={e => dispatch({ type: "HANDLE PRODUCER INPUT", field: "address", payload: e.currentTarget.value })}
            />
            <TextArea
                title="About"
                id="producerInfo"
                placeholder="#HightAltitudeLife"
                value={state.producer.info || ""}
                handleChange={e => dispatch({ type: "HANDLE PRODUCER INPUT", field: "info", payload: e.currentTarget.value })}
            />
        </CoffeeSection>
    )
};

export default ProducerSection;
