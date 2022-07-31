import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import { DataGrid } from '@mui/x-data-grid';
import { tableColumns, tableHeaderSX } from './tableSettings';
import { Box } from '@mui/system';

const Main = () => {
  const { buttonData, tableData } = useStateContext();
  console.log(tableData);
  return (
    <Box sx={{ height: '800px' }}>
      {buttonData}
      {!tableData ? (
        'Loading'
      ) : (
        <DataGrid sx={tableHeaderSX} columns={tableColumns} rows={tableData} />
      )}
    </Box>
  );
};

export default Main;
