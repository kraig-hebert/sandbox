import React, { createContext, useContext, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { getItems } from '../api/apiCalls';
import { lightButtonSX, darkButtonSX } from '../sxStyles/buttonSX';

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [buttonData, setButtonData] = useState();
  const [tableData, setTableData] = useState();

  const initData = async () => {
    const newListItems = await getItems();
    setTableData(newListItems);
    const transformedList = newListItems.map((item, index) => {
      if (index % 2 === 0) {
        return (
          <Button sx={darkButtonSX} key={item.id} variant="contained">
            {item.title}
          </Button>
        );
      } else {
        return (
          <Button sx={lightButtonSX} key={item.id} variant="text">
            {item.title}
          </Button>
        );
      }
    });
    setButtonData(transformedList);
  };
  useEffect(() => {
    initData();
  }, []);

  return (
    <stateContext.Provider value={{ buttonData, tableData }}>
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
