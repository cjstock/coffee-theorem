export const initialState = {
    id: "",
    userId: "",
    isFavorite: false,
    origin: "",
    altitude: 0,
    process: "",
    tastingNotes: Array<string>(0),
    recipes: "",
    roast: "",
    variety: "",
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
    brewerName: "",
    brewerUrl: "",
    brewerAddress: "",
    brewerInfo: "",
};

export type ACTIONTYPE =
    | { type: "HANDLE INPUT TEXT"; field: string; payload: string }
    | { type: "HANDLE ADD TASTING NOTE"; payload: string }
    | { type: "SET ALL"; payload: typeof initialState };

export function reducer(
    state: typeof initialState,
    action: ACTIONTYPE
): typeof initialState {
    switch (action.type) {
        case "HANDLE INPUT TEXT": {
            if (action.field === "altitude") {
                return {
                    ...state,
                    ["altitude"]: Number.parseInt(action.payload),
                };
            }
            return { ...state, [action.field]: action.payload };
        }
        case "HANDLE ADD TASTING NOTE": {
            if (state.tastingNotes?.length < 1) {
                return {
                    ...state,
                    tastingNotes: [action.payload],
                };
            }
            return {
                ...state,
                tastingNotes: [action.payload, ...state.tastingNotes],
            };
        }
        case "SET ALL": {
            return action.payload;
        }
        default: {
            throw new Error("Invalid reducer action!");
        }
    }
}
