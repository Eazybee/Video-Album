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
      line-height: 1.5em;
      letter-spacing: .1em;
      display: inline;
      border-radius: .4em;
      outline: 0;
      border: .1em solid #719192;
      color: #424546;
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

  it('should have red border on error', () => {
    const { getByPlaceholderText } = render(
      <Input
        type='email'
        placeholder='JohnDoe@test.com'
        error='error'
      />,
    );

    const inputElement = getByPlaceholderText('JohnDoe@test.com');
    expect(inputElement.type).toBe('email');
    expect(inputElement).toHaveStyle(`
      border: .1em solid #FF0000;
    `);
  });

  it('should have margin to and bottom', () => {
    const { getByPlaceholderText } = render(
      <Input
        placeholder='Test'
        hasVerticalMargin
      />,
    );

    const inputElement = getByPlaceholderText('Test');
    expect(inputElement).toHaveStyle(`
      margin: .5em 0;
    `);
  });
});
