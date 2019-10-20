import React from 'react';
import { render } from '<src>/helpers/testUtils';
import Input from './Input';
import '@testing-library/jest-dom/extend-expect';

describe('Input Component', () => {
  it('should render with default css', () => {
    const { getByPlaceholderText } = render(<Input placeholder='John Doe'/>);

    const inputElement = getByPlaceholderText('John Doe');
    expect(inputElement).toBeTruthy();
    expect(inputElement.type).toBe('text');
    expect(inputElement).toHaveStyle(`
      padding: .5em .5em;
      line-height: 1.2em;
      letter-spacing: .1em;
      display: inline;
      border-radius: .4rem;
      outline: 0;
      border: .2em solid #719192;
      color: #719192;
      transition: .3s linear;
    `);
  });

  it('should render password input', () => {
    const { getByPlaceholderText } = render(
      <Input
        type='password'
        placeholder='John Doe'
      />,
    );

    const inputElement = getByPlaceholderText('John Doe');
    expect(inputElement.type).toBe('password');
  });
});
