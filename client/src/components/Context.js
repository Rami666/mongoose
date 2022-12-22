import { createContext } from 'react';

export const AppContext = createContext();

export const ContextProvider = ({childern}) => {

    return (
        <AppContext.Provider value={{state, dispatchState}}>
            {childern}
        </AppContext.Provider>
    )
}