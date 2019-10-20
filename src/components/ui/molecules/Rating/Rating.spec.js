import React, { useState } from 'react';
import { render, fireEvent } from '<src>/helpers/testUtils';
import '@testing-library/jest-dom/extend-expect';
import Rating from './Rating';


const TestComponent = () => {
  const [count, setCounter] = useState(0);
  const [icon, setIcon] = useState('faRegular/ThumbsUp');

  const onClick = () => {
    setCounter(1);
    setIcon('faSolid/ThumbsUp');
  };

  return <Rating count={count} icon={icon} onClick={onClick}/>;
};

describe('Rating Molecule', () => {
  it('should render with input element', () => {
    const { getByText, getByRole } = render(<TestComponent/>);
    const iconElement = getByRole('icon');

    fireEvent.click(iconElement);

    expect(getByText('1')).toBeTruthy();
    expect(iconElement).toBeTruthy();
  });
});
