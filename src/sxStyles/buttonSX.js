const baseButtonSX = {
  backgroundColor: 'steelblue',
};

export const lightButtonSX = {
  ...baseButtonSX,
  borderBottom: '1px solid green',
  '&:hover': { backgroundColor: 'secondary.light', color: 'black' },
};

export const darkButtonSX = {
  ...baseButtonSX,
  '&:hover': {
    color: 'steelblue',
    borderBottom: '1px solid black',
  },
};
