import {createContext} from 'react';

const AppContext = createContext({});

export const AppProvider = ({children}) => {
  const showModal = "Hello";
  
  return <AppContext.Provider value={{showModal}}>
    {children}
  </AppContext.Provider>
};

export default AppContext;