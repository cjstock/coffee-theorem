export const initialState = {
    isBlend: false,
    originName: "",

    sellerName: "",
    sellerUrl: "",
    sellerAddress: "",
    sellerInfo: "",
    sellerIsRoaster: false,

    roasterName: "",
    roasterUrl: "",
    roasterAddress: "",
    roasterInfo: "",

    producerName: "",
    producerUrl: "",
    producerAddress: "",
    producerInfo: "",
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
