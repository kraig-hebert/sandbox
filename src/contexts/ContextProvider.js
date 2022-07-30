import React, { createContext, useContext, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { getItems } from '../api/apiCalls';

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState();

  const initData = async () => {
    const newListItems = await getItems();
    const transformedList = newListItems.map((item) => {
      return (
        <Button key={item.id} variant="contained">
          {item.title}
        </Button>
      );
    });
    setData(transformedList);
  };
  useEffect(() => {
    initData();
  }, []);

  return (
    <stateContext.Provider value={{ data }}>{children}</stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
