import InputText from "../../common/InputText";
import TextArea from "../../common/TextArea";
import { ACTIONTYPE, initialState } from '../../../utils/CoffeeReducer';
import { Dispatch } from "react";
import CoffeeSection from "../../common/CoffeeSection";
import { brewerModel } from '../../../../prisma/zod/brewer';
import { trpc } from "../../../utils/trpc";
import { z } from "zod";

interface Props {
    state: typeof initialState,
    dispatch: Dispatch<ACTIONTYPE>
}
const BrewerSection = ({ state, dispatch }: Props) => {
    const brewer = trpc.brewer.byId.useQuery({ brewerId: state.brewer?.id }, {
        enabled: state.brewer?.id !== "",
        onSuccess(data) {
            data && dispatch({ type: "LoadBrewer", brewer: data as z.infer<typeof brewerModel> })
        },
    })
    const title = "Brewer"
    const description = "Who brewed the coffee when you tried it? Did you brew at home? Did you order a cup of coffee from your favorite local coffee shop?"
    return (
        <CoffeeSection title={title} description={description}>

            <InputText
                title="Name"
                id="brewerName"
                type="text"
                placeholder="Brewy McBrewerson"
                value={state.brewer?.name}
                handleChange={e => dispatch({ type: "EditBrewer", field: "name", payload: e.currentTarget.value })}
            />
            <InputText
                title="Website"
                id="brewerUrl"
                type="url"
                placeholder="www.coffee-shop.com"
                value={state.brewer?.url || ""}
                handleChange={e => dispatch({ type: "EditBrewer", field: "url", payload: e.currentTarget.value })}
            />
            <InputText
                title="Address"
                id="brewerAddress"
                type="text"
                placeholder="123 Lovecup Way."
                value={state.brewer?.address || ""}
                handleChange={e => dispatch({ type: "EditBrewer", field: "address", payload: e.currentTarget.value })}
            />
            <TextArea
                title="About"
                id="brewerInfo"
                placeholder="Mmmmmm coffee."
                value={state.brewer?.info || ""}
                handleChange={e => dispatch({ type: "EditBrewer", field: "info", payload: e.currentTarget.value })}
            />
        </CoffeeSection>
    )
};

export default BrewerSection;
