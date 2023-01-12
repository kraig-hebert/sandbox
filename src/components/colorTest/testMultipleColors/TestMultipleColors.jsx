import React from 'react';
import TestColor from '../testColor/TestColor';

const TestMultipleColors = () => {
  const colors = ['green', 'blue', 'red', 'brown', 'black', 'orange', 'peru'];
  const renderedButtons = colors.map((color, index) => (
    <div key={index}>
      <TestColor buttonColor={color} />
    </div>
  ));

  return <div>{renderedButtons}</div>;
};

export default TestMultipleColors;
