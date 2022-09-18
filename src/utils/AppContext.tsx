import {
    createContext,
    ReactNode,
    Reducer,
    useContext,
    useReducer,
} from "react";

export interface MyAppState {
    selectedNavTab: string;
}

export interface Action {
    type: "setSelectedNavTab";
    payload: any;
}

const initialAppState: MyAppState = {
    selectedNavTab: "/",
};

const MyAppContext = createContext<MyAppState>(null);
const MyAppDispatchContext = createContext(null);

interface AppProviderProps {
    children: ReactNode;
}
export function MyAppProvider({ children }: AppProviderProps) {
    const [appState, dispatch] = useReducer(appStateReducer, initialAppState);

    return (
        <MyAppContext.Provider value={appState}>
            <MyAppDispatchContext.Provider value={dispatch}>
                {children}
            </MyAppDispatchContext.Provider>
        </MyAppContext.Provider>
    );
}

export const useAppState = () => {
    return useContext(MyAppContext);
};

export const useAppDispatch = () => {
    return useContext(MyAppDispatchContext);
};

const appStateReducer: Reducer<MyAppState, Action> = (appState, action) => {
    switch (action.type) {
        case "setSelectedNavTab": {
            return {
                ...appState,
                selectedNavTab: action.payload,
            };
        }
        default: {
            return appState;
        }
    }
};
