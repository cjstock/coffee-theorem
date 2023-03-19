import { CoffeeReducer as CoffeeState, CoffeeByIdOutput } from '../types/coffee';
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
    | { type: "LoadAll", coffee: CoffeeState }
    | { type: "EditCoffeeField", field: string, payload: string | boolean | number }
    | { type: "AddEmptySeller" }
    | { type: "AddSeller", seller: z.infer<typeof sellerModel> | null | undefined }
    | { type: "EditSeller", field: string, payload: string | boolean | number }
    | { type: "RemoveSeller" }
    | { type: "AddEmptyRoaster" }
    | { type: "AddRoaster", roaster: z.infer<typeof roasterModel> | null | undefined }
    | { type: "EditRoaster", field: string, payload: string | boolean | number }
    | { type: "RemoveRoaster" }
    | { type: "AddEmptyProducer" }
    | { type: "AddProducer", producer: z.infer<typeof producerModel> | null | undefined }
    | { type: "EditProducer", field: string, payload: string | boolean | number }
    | { type: "RemoveProducer" }
    | { type: "AddEmptyBrewer" }
    | { type: "AddBrewer", brewer: z.infer<typeof brewerModel> | null | undefined }
    | { type: "EditBrewer", field: string, payload: string | boolean | number }
    | { type: "RemoveBrewer" }

export function reducer(
    state: typeof initialState,
    action: ACTIONTYPE,
): typeof initialState {
    switch (action.type) {
        case "LoadAll": {
            return { ...action.coffee }
        }
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
        case "AddSeller": {
            if (!!action.seller) return { ...state, seller: action.seller }
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
        case "EditSeller": {
            console.log(`Editing ${action.field}`)
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
        case "AddRoaster": {
            if (!!action.roaster) return { ...state, roaster: action.roaster }
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

        case "AddProducer": {
            if (!!action.producer) return { ...state, producer: action.producer }
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
        case "AddBrewer": {
            if (!!action.brewer) return { ...state, brewer: action.brewer }
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
