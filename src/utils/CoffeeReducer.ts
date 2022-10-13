import { Input, CoffeeByIdOutput, SellerByIdOutput } from '../types/coffee';

export const initialState: Input = {
    id: "",
    userId: "",
    origin: "",
    isFavorite: false,
    altitude: 0,
    process: "",
    roast: "",
    variety: "",
    sellerId: "",
    roasterId: "",
    producerId: "",
    brewerId: "",
    seller: {
        id: "",
        name: "",
        coffeeId: "",
        isRoaster: false,
        address: "",
        info: "",
        url: ""
    }
}

export type ACTIONTYPE =
    | { type: "SET BASE INFO"; payload: CoffeeByIdOutput }
    | { type: "HANDLE INPUT TEXT"; field: string; payload: string }
    | { type: "HANDLE SELLER INPUT"; field: keyof typeof initialState.seller; payload: string | boolean }
    | { type: "SET SELLER INFO"; payload: SellerByIdOutput }
    | { type: "RESET"; payload: string }

export function reducer(
    state: typeof initialState,
    action: ACTIONTYPE
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
        case "RESET": {
            return { ...initialState, userId: action.payload }
        }
        default: {
            throw new Error("Invalid reducer action!");
        }
    }
}
