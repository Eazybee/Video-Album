import React from 'react';
import { render } from '<src>/helpers/testUtils';
import Title from './Title';
import '@testing-library/jest-dom/extend-expect';


describe('Title Component', () => {
  it('should render with default css', () => {
    const { getByText } = render(<Title>Hello</Title>);

    expect(getByText('Hello')).toBeTruthy();
    expect(getByText('Hello')).toHaveStyle(`
      text-align: left;
      font-size: 1em;
      display: block;
      color: #FF0000;
      padding: 0;
    `);
  });

  it('should have black color', () => {
    const { getByText } = render(
      <Title color='black'>Hello</Title>,
    );

    expect(getByText('Hello')).toHaveStyle(`
      color: #000000;
    `);
  });

  it('should have md padding', () => {
    const { getByText } = render(
      <Title padding='md'>Hello</Title>,
    );

    expect(getByText('Hello')).toHaveStyle(`
      padding: .5em;
    `);
  });
});
