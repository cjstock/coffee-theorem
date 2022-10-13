import { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';
import { initialState, ACTIONTYPE, reducer } from './CoffeeReducer';

const CoffeeContext = createContext(initialState);

const CoffeeDispatchContext = createContext<Dispatch<ACTIONTYPE>>(() => initialState);

interface Props {
    children: ReactNode;
}
export function CoffeeProvider({ children }: Props) {
    const [coffee, dispatch] = useReducer(reducer, initialState);

    return (
        <CoffeeContext.Provider value={coffee}>
            <CoffeeDispatchContext.Provider value={dispatch}>
                {children}
            </CoffeeDispatchContext.Provider>
        </CoffeeContext.Provider>
    )
}

export function useCoffee() {
    return useContext(CoffeeContext)
}

export function useCoffeeDispatch() {
    return useContext(CoffeeDispatchContext)
}