import { CoffeeReducer as CoffeeState } from '../types/coffee';
import { sellerModel } from '../../prisma/zod/seller';
import { z } from 'zod';
import { roasterModel } from '../../prisma/zod/roaster';
import { producerModel } from '../../prisma/zod/producer';
import { brewerModel } from '../../prisma/zod/brewer';
import { coffeeModel } from '../../prisma/zod/coffee';

export const initialState: CoffeeState = {
    coffee: {
        id: "",
        userId: "",
        origin: "",
        isFavorite: false,
        altitude: 0,
        process: "",
        roast: "",
        variety: "",
        sellerId: null,
        roasterId: null,
        producerId: null,
        brewerId: null,
    },
    seller: null,
    roaster: null,
    producer: null,
    brewer: null,

}

export type ACTIONTYPE =
    | { type: "LoadCoffee", coffee: z.infer<typeof coffeeModel> }
    | { type: "EditCoffeeField", field: string, payload: string | boolean | number }
    | { type: "AddEmptySeller" }
    | { type: "LoadSeller", seller: z.infer<typeof sellerModel> }
    | { type: "EditSeller", field: string, payload: string | boolean | number }
    | { type: "RemoveSeller" }
    | { type: "AddEmptyRoaster" }
    | { type: "LoadRoaster", roaster: z.infer<typeof roasterModel> }
    | { type: "EditRoaster", field: string, payload: string | boolean | number }
    | { type: "RemoveRoaster" }
    | { type: "AddEmptyProducer" }
    | { type: "LoadProducer", producer: z.infer<typeof producerModel> }
    | { type: "EditProducer", field: string, payload: string | boolean | number }
    | { type: "RemoveProducer" }
    | { type: "AddEmptyBrewer" }
    | { type: "LoadBrewer", brewer: z.infer<typeof brewerModel> }
    | { type: "EditBrewer", field: string, payload: string | boolean | number }
    | { type: "RemoveBrewer" }

export function reducer(
    state: typeof initialState,
    action: ACTIONTYPE,
): typeof initialState {
    switch (action.type) {
        case "LoadCoffee": {
            return { ...state, coffee: action.coffee }
        }
        case "EditCoffeeField": {
            if (action.field == "altitude") {
                const altitude = parseInt(action.payload as string)
                return {
                    ...state,
                    coffee: {
                        ...state.coffee,
                        [action.field]: altitude
                    }
                }
            }
            return {
                ...state,
                coffee: {
                    ...state.coffee,
                    [action.field]: action.payload
                }
            };
        }
        case "AddEmptySeller": {
            return {
                ...state,
                seller: {
                    id: "",
                    isRoaster: false,
                    name: "",
                    address: "",
                    info: "",
                    url: ""
                }
            }
        }
        case "LoadSeller": {
            return { ...state, seller: action.seller }
        }
        case "EditSeller": {
            if (!state.seller) return { ...state }
            return {
                ...state,
                seller: {
                    ...state.seller,
                    [action.field]: action.payload
                }
            };
        }
        case "RemoveSeller": {
            if (state.seller) return { ...state, seller: null }
            return { ...state }
        }
        case "AddEmptyRoaster": {
            return {
                ...state,
                roaster: {
                    id: "",
                    name: "",
                    address: "",
                    info: "",
                    url: ""
                }
            }
        }
        case "LoadRoaster": {
            return { ...state, roaster: action.roaster }
        }
        case "EditRoaster": {
            if (!state.roaster) return { ...state }
            return {
                ...state,
                roaster: {
                    ...state.roaster,
                    [action.field]: action.payload
                }
            };
        }
        case "RemoveRoaster": {
            if (state.roaster) return { ...state, roaster: null }
            return { ...state }
        }
        case "AddEmptyProducer": {
            return {
                ...state,
                producer: {
                    id: "",
                    name: "",
                    address: "",
                    info: "",
                    url: ""
                }
            }
        }
        case "LoadProducer": {
            return { ...state, producer: action.producer }
        }
        case "EditProducer": {
            if (!state.producer) return { ...state }
            return {
                ...state,
                producer: {
                    ...state.producer,
                    [action.field]: action.payload
                }
            };
        }
        case "RemoveProducer": {
            if (state.producer) return { ...state, producer: null }
            return { ...state }
        }
        case "AddEmptyBrewer": {
            return {
                ...state,
                brewer: {
                    id: "",
                    name: "",
                    address: "",
                    info: "",
                    url: ""
                }
            }
        }
        case "LoadBrewer": {
            return { ...state, brewer: action.brewer }
        }
        case "EditBrewer": {
            if (!state.brewer) return { ...state }
            return {
                ...state,
                brewer: {
                    ...state.brewer,
                    [action.field]: action.payload
                }
            };
        }
        case "RemoveBrewer": {
            if (state.brewer) return { ...state, brewer: null }
        }
        default: {
            throw new Error("Invalid reducer action!");
        }
    }
}
