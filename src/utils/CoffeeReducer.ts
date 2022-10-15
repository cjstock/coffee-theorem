import { Input, CoffeeByIdOutput, SellerByIdOutput, RoasterByIdOutput, ProducerByIdOutput, BrewerByIdOutput } from '../types/coffee';

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
    },
    roaster: {
        id: "",
        name: "",
        coffeeId: "",
        address: "",
        info: "",
        url: ""
    },
    producer: {
        id: "",
        name: "",
        coffeeId: "",
        address: "",
        info: "",
        url: ""
    },
    brewer: {
        id: "",
        name: "",
        coffeeId: "",
        address: "",
        info: "",
        url: ""
    },

}

export type ACTIONTYPE =
    | { type: "SET COFFEE ID"; payload: string }
    | { type: "SET BASE INFO"; payload: CoffeeByIdOutput }
    | { type: "HANDLE INPUT TEXT"; field: string; payload: string }
    | { type: "HANDLE SELLER INPUT"; field: keyof typeof initialState.seller; payload: string | boolean }
    | { type: "SET SELLER INFO"; payload: SellerByIdOutput }
    | { type: "HANDLE ROASTER INPUT"; field: keyof typeof initialState.roaster; payload: string | boolean }
    | { type: "SET ROASTER INFO"; payload: RoasterByIdOutput }
    | { type: "HANDLE PRODUCER INPUT"; field: keyof typeof initialState.producer; payload: string | boolean }
    | { type: "SET PRODUCER INFO"; payload: ProducerByIdOutput }
    | { type: "HANDLE BREWER INPUT"; field: keyof typeof initialState.brewer; payload: string | boolean }
    | { type: "SET BREWER INFO"; payload: BrewerByIdOutput }
    | { type: "RESET"; payload: string }

export function reducer(
    state: typeof initialState,
    action: ACTIONTYPE
): typeof initialState {
    switch (action.type) {
        case "SET COFFEE ID": {
            return {
                ...state,
                seller: { ...state.seller, coffeeId: action.payload },
                roaster: { ...state.roaster, coffeeId: action.payload },
                producer: { ...state.producer, coffeeId: action.payload },
                brewer: { ...state.brewer, coffeeId: action.payload }
            }
        }
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
        case "RESET": {
            return { ...initialState, userId: action.payload }
        }
        default: {
            throw new Error("Invalid reducer action!");
        }
    }
}
