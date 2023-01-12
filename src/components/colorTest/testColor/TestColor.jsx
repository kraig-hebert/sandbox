import React, { useLayoutEffect, useState, useRef } from 'react';
import { useStyles } from './styles';

const TestColor = (props) => {
  const { buttonColor } = props;
  const ref = useRef();
  const [width, setWidth] = useState();

  const classes = useStyles({ ...props, width });
  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  });

  return (
    <div className={classes.colorButton} ref={ref}>
      <button className={classes.button}>{`Test: ${buttonColor}`}</button>
    </div>
  );
};

export default TestColor;
