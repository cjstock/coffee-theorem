import { useReducer, useState } from "react";
import { reducer, initialState } from "./CoffeeReducer";
import { trpc } from "./trpc";

export function useCoffee() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const [enabledSections, setEnabledSections] = useState<Array<string>>([])

    const upsertCoffeeMutation = trpc.coffee.upsertCoffee.useMutation();
    const upsertSellerMutation = trpc.seller.upsertSeller.useMutation({
        onSuccess(data) {
            dispatch({ type: "HANDLE SELLER INPUT", field: 'id', payload: data.id })
        }
    });
    const upsertRoasterMutation = trpc.roaster.upsertRoaster.useMutation({
        onSuccess(data) {
            dispatch({ type: "HANDLE ROASTER INPUT", field: 'id', payload: data.id })
        }
    });
    const upsertProducerMutation = trpc.producer.upsertProducer.useMutation({
        onSuccess(data) {
            dispatch({ type: "HANDLE PRODUCER INPUT", field: 'id', payload: data.id })
        }
    });
    const upsertBrewerMutation = trpc.brewer.upsertBrewer.useMutation({
        onSuccess(data) {
            dispatch({ type: "HANDLE BREWER INPUT", field: 'id', payload: data.id })
        }
    });
}