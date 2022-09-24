import { CompleteCoffee } from "../../prisma/zod";

export type Coffee = CompleteCoffee;

export const initialState: Omit<
    Coffee,
    "user" | "sellerId" | "roasterId" | "producerId" | "brewerId"
> = {
    id: "",
    userId: "",
    isBlend: false,
    isFavorite: false,
    originName: "",
    beans: [],
    seller: {
        id: "",
        coffeeId: "",
        name: "",
        url: "",
        address: "",
        info: "",
        isRoaster: false,
    },
    roaster: {
        id: "",
        coffeeId: "",
        name: "",
        url: "",
        address: "",
        info: "",
    },
    producer: {
        id: "",
        coffeeId: "",
        name: "",
        url: "",
        address: "",
        info: "",
    },
    brewer: {
        id: "",
        coffeeId: "",
        name: "",
        url: "",
        address: "",
        info: "",
    },
};

export type ACTIONTYPE =
    | { type: "TOGGLE ISBLEND" }
    | { type: "HANDLE INPUT TEXT"; field: string; payload: string };

export function reducer(state: typeof initialState, action: ACTIONTYPE) {
    switch (action.type) {
        case "TOGGLE ISBLEND": {
            return { ...state, isBlend: !state.isBlend };
        }
        case "HANDLE INPUT TEXT": {
            return { ...state, [action.field]: action.payload };
        }
        default: {
            throw new Error("Invalid reducer action!");
        }
    }
}
