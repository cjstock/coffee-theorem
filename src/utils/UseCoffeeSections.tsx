import { useReducer, useState } from "react";
import { initialState, reducer } from "./CoffeeReducer";
import SellerSection from "../components/pages/coffee/SellerSection";
import RoasterSection from "../components/pages/coffee/RoasterSection";
import ProducerSection from "../components/pages/coffee/ProducerSection";
import BrewerSection from "../components/pages/coffee/BrewerSection";
import { CoffeeReducer } from '../types/coffee';

interface section {
    title: string,
    jsx: JSX.Element,
    addSection: (data: Partial<CoffeeReducer>) => void,
    removeSection: () => void
}

export function useCoffeeSections() {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [enabledSections, setEnabledSections] = useState<Array<section>>([])

    const seller: section = {
        title: "seller",
        jsx: <SellerSection key={"seller"} state={state} dispatch={dispatch} />,
        addSection: (data) => dispatch({ type: "AddSeller", seller: data.seller }),
        removeSection: () => dispatch({ type: "RemoveSeller" })
    }
    const roaster: section = {
        title: "roaster",
        jsx: <RoasterSection key={"roaster"} state={state} dispatch={dispatch} />,
        addSection: (data) => dispatch({ type: "AddRoaster", roaster: data.roaster }),
        removeSection: () => dispatch({ type: "RemoveRoaster" })
    }
    const producer: section = {
        title: "producer",
        jsx: <ProducerSection key={"producer"} state={state} dispatch={dispatch} />,
        addSection: (data) => dispatch({ type: "AddProducer", producer: data.producer }),
        removeSection: () => dispatch({ type: "RemoveProducer" })
    }
    const brewer: section = {
        title: "brewer",
        jsx: <BrewerSection key={"brewer"} state={state} dispatch={dispatch} />,
        addSection: (data) => dispatch({ type: "AddBrewer", brewer: data.brewer }),
        removeSection: () => dispatch({ type: "RemoveBrewer" })
    }



    const containsSection = (element: section) => {
        return enabledSections.findIndex(value => value.title == element.title) != -1
    }

    const enableSection = (element: section, data: Partial<CoffeeReducer>) => {
        element.addSection(data)
        setEnabledSections(curr => {
            return curr.findIndex(value => value.title == element.title) != -1 ?
                curr :
                [...curr, element]
        })

    }

    const disableSection = (element: section) => {
        element.removeSection()
        setEnabledSections(curr => {
            return curr.filter(section => section.title !== element.title)
        })
    }

    const values = {
        state,
        dispatch,
        enabledSections,
        enableSection,
        disableSection,
        containsSection,
        seller,
        roaster,
        producer,
        brewer
    }

    return values;
}