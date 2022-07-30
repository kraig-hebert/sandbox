import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';

const Main = () => {
  const { data } = useStateContext();
  return <div>{data}</div>;
};

export default Main;
