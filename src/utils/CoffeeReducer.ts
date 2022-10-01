import { CoffeeInput } from '../types/coffee';
export const initialState: CoffeeInput = {
    coffee: {
        id: "",
        userId: "",
        origin: "",
        isFavorite: false,
        altitude: 0,
        process: "",
        roast: "",
        recipes: "",
    }
}

export type ACTIONTYPE =
    | { type: "HANDLE INPUT TEXT"; field: string; payload: string }
    | { type: "SET ALL"; payload: typeof initialState };

export function reducer(
    state: typeof initialState,
    action: ACTIONTYPE
): typeof initialState {
    switch (action.type) {
        case "HANDLE INPUT TEXT": {
            if (action.field === "altitude") {
                return {
                    coffee: {
                        ...state.coffee,
                        altitude: Number.parseInt(action.payload)
                    },
                };
            }
            return {
                coffee: {
                    ...state.coffee,
                    [action.field]: action.payload
                }
            };
        }
        case "SET ALL": {
            return { ...action.payload }
        }
        default: {
            throw new Error("Invalid reducer action!");
        }
    }
}
