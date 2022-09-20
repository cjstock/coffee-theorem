export const initialState = {
    isBlend: false,
    originName: "",
};

export type ACTIONTYPE =
    | { type: "toggleIsBlend" }
    | { type: "setOriginName"; payload: string };

export function reducer(state: typeof initialState, action: ACTIONTYPE) {
    switch (action.type) {
        case "toggleIsBlend": {
            return { ...state, isBlend: !state.isBlend };
        }
        case "setOriginName": {
            return { ...state, originName: action.payload };
        }
        default: {
            throw new Error("Invalid reducer action!");
        }
    }
}
