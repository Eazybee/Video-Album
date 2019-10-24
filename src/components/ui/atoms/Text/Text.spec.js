import React from 'react';
import { render } from '<src>/helpers/testUtils';
import Text from './Text';
import '@testing-library/jest-dom/extend-expect';

describe('Text Atom', () => {
  it('should render with default css', () => {
    const { getByText } = render(<Text>Hello</Text>);

    expect(getByText('Hello')).toBeTruthy();
    expect(getByText('Hello')).toHaveStyle(`
      text-align: left;
      font-size: 1em;
      display: inline;
      color: #000000;
    `);
  });

  it('should render with primary color', () => {
    const { getByText } = render(<Text color='primary'>Hello</Text>);

    expect(getByText('Hello')).toHaveStyle(`
      color: #494ca2;
    `);
  });

  it('should have md padding', () => {
    const { getByText } = render(<Text padding='md'>Hello</Text>);

    expect(getByText('Hello')).toHaveStyle(`
      padding: .5em;
    `);
  });

  it('should align right', () => {
    const { getByText } = render(<Text textAlign='right'>Hello</Text>);

    expect(getByText('Hello')).toHaveStyle(`
      text-align: right;
    `);
  });
});
