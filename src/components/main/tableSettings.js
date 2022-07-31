export const tableColumns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'title', headerName: 'Title', flex: 1 },
  { field: 'startDate', headerName: 'Start Date', flex: 1 },
  { field: 'endDate', headerName: 'End Date', flex: 1 },
  { field: 'done', headerName: 'Done', flex: 1 },
];

export const tableHeaderSX = {
  '& .MuiDataGrid-columnHeader:nth-of-type(odd)': {
    backgroundColor: 'blue',
  },
  '& .MuiDataGrid-footerContainer': {
    backgroundColor: 'orange',
  },
};
