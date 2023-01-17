import { Input, processOptions, roastOptions } from "../../../types/coffee";
import InputText from "../../common/InputText";
import Select from "../../common/Select";
import React from 'react';
import TastingNotes from "../../common/TastingNotes";
import { Dispatch } from 'react';
import { ACTIONTYPE } from "../../../utils/CoffeeReducer";
import CoffeeSection from "../../common/CoffeeSection";

interface Props {
    state: Input
    dispatch: Dispatch<ACTIONTYPE>
}
const BeanSection = ({ state, dispatch }: Props) => {

    const title = "Bean"
    const description = "This section is meant to contain characteristics and growing conditions provided by the seller/roaster/producer."

    return (
        <CoffeeSection title={title} description={description} withDivider={false}>
            <Select
                title="Roast Level"
                id="roast"
                options={roastOptions}
                selected={state.roast || ""}
                dispatch={dispatch}
            />
            <Select
                title="Processing Method"
                id="process"
                options={processOptions}
                selected={state.process || ""}
                dispatch={dispatch}
            />
            <TastingNotes
                title="Tasting Notes"
                id="tastingNotes"
            />
            <InputText
                title="Altitude"
                id="altitude"
                value={state.altitude || 0}
                handleChange={(e) => dispatch({ type: "HANDLE INPUT TEXT", field: "altitude", payload: e.currentTarget.value })}
            />
        </CoffeeSection>
    );
};

export default BeanSection;
