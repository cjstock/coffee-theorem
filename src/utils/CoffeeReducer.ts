import { CoffeeByIdOutput, Input } from '../types/coffee';
import { CompleteCoffeeTastingNote } from '../../prisma/zod/coffeetastingnote';
import { TastingNote } from '@prisma/client';
import { CompleteSeller } from '../../prisma/zod/seller';
import { CompleteCoffee } from '../../prisma/zod/coffee';
import { CompleteRoaster } from '../../prisma/zod/roaster';
import { CompleteProducer } from '../../prisma/zod/producer';
import { CompleteBrewer } from '../../prisma/zod/brewer';

export const initialState: Input = {
    id: "",
    userId: "",
    origin: "",
    isFavorite: false,
    altitude: 0,
    process: "",
    roast: "",
    variety: "",
    coffeeTastingNotes: Array<CompleteCoffeeTastingNote>(),
    tastingNotes: Array<TastingNote>(),
    sellerId: "",
    roasterId: "",
    producerId: "",
    brewerId: "",
    seller: {
        id: "",
        name: "",
        isRoaster: false,
        address: "",
        info: "",
        url: "",
        coffees: Array<CompleteCoffee>()
    },
    roaster: {
        id: "",
        name: "",
        address: "",
        info: "",
        url: "",
        coffees: Array<CompleteCoffee>()
    },
    producer: {
        id: "",
        name: "",
        address: "",
        info: "",
        url: "",
        coffees: Array<CompleteCoffee>()
    },
    brewer: {
        id: "",
        name: "",
        address: "",
        info: "",
        url: "",
        coffees: Array<CompleteCoffee>()
    },

}

export type ACTIONTYPE =
    | { type: "SET COFFEE IDS"; payload: string }
    | { type: "SET BASE INFO"; payload: CoffeeByIdOutput }
    | { type: "HANDLE INPUT TEXT"; field: string; payload: string }
    | { type: "HANDLE SELLER INPUT"; field: keyof typeof initialState.seller; payload: string | boolean }
    | { type: "SET SELLER INFO"; payload: CompleteSeller }
    | { type: "HANDLE ROASTER INPUT"; field: keyof typeof initialState.roaster; payload: string | boolean }
    | { type: "SET ROASTER INFO"; payload: CompleteRoaster }
    | { type: "HANDLE PRODUCER INPUT"; field: keyof typeof initialState.producer; payload: string | boolean }
    | { type: "SET PRODUCER INFO"; payload: CompleteProducer }
    | { type: "HANDLE BREWER INPUT"; field: keyof typeof initialState.brewer; payload: string | boolean }
    | { type: "SET BREWER INFO"; payload: CompleteBrewer }
    | { type: "ADD TASTING NOTE"; payload: TastingNote }
    | { type: "SET TASTING NOTES"; payload: TastingNote[] }
    | { type: "RESET"; payload: string }

export function reducer(
    state: typeof initialState,
    action: ACTIONTYPE,
): typeof initialState {
    switch (action.type) {
        case "HANDLE INPUT TEXT": {
            if (action.field === "altitude") {
                return {
                    ...state,
                    altitude: Number.parseInt(action.payload)
                };
            }
            return {
                ...state,
                [action.field]: action.payload
            };
        }
        case "SET BASE INFO": {
            return {
                ...state,
                ...action.payload,
            }
        }
        case "HANDLE SELLER INPUT": {
            return {
                ...state,
                seller: { ...state.seller, [action.field]: action.payload }
            }
        }
        case "SET SELLER INFO": {
            return {
                ...state,
                seller: action.payload
            }
        }
        case "HANDLE ROASTER INPUT": {
            return {
                ...state,
                roaster: { ...state.roaster, [action.field]: action.payload }
            }
        }
        case "SET ROASTER INFO": {
            return {
                ...state,
                roaster: action.payload
            }
        }
        case "HANDLE PRODUCER INPUT": {
            return {
                ...state,
                producer: { ...state.producer, [action.field]: action.payload }
            }
        }
        case "SET PRODUCER INFO": {
            return {
                ...state,
                producer: action.payload
            }
        }
        case "HANDLE BREWER INPUT": {
            return {
                ...state,
                brewer: { ...state.brewer, [action.field]: action.payload }
            }
        }
        case "SET BREWER INFO": {
            return {
                ...state,
                brewer: action.payload
            }
        }
        case "ADD TASTING NOTE": {
            return { ...state, tastingNotes: [...state.tastingNotes, action.payload] }
        }
        case "SET TASTING NOTES": {
            return { ...state, tastingNotes: action.payload }
        }
        case "RESET": {
            return { ...initialState, userId: action.payload }
        }
        default: {
            throw new Error("Invalid reducer action!");
        }
    }
}
