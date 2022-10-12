import React, { createContext, useContext } from 'react';

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  return <stateContext.Provider value={{}}>{children}</stateContext.Provider>;
};

export const useStateContext = () => useContext(stateContext);
