import React from 'react';
import { render } from '<src>/helpers/testUtils';
import '@testing-library/jest-dom/extend-expect';
import InputField from './InputField';

describe('InputField Component', () => {
  it('should render with input element', () => {
    const { getByPlaceholderText } = render(<InputField inputProps={{ placeholder: 'Default' }} />);

    expect(getByPlaceholderText('Default')).toBeTruthy();
    expect(getByPlaceholderText('Default').tagName).toBe('INPUT');
    expect(getByPlaceholderText('Default').type).toBe('text');
  });

  it('should render input with red border on error', () => {
    const { getByPlaceholderText } = render(
      <InputField
        inputProps={{ placeholder: 'Default' }}
        error='only alphabet are allowed'
      />,
    );

    expect(getByPlaceholderText('Default')).toHaveStyle(`
      border: .1em solid #FF0000;
    `);
  });

  it('should render label, input and error', () => {
    const { getByPlaceholderText, getByText } = render(
      <InputField
        inputProps={{
          placeholder: 'John Doe',
        }}
        label='Full Name'
        id='name'
        error='only alphabet are allowed'
        showError
      />,
    );

    const labelElement = getByText('Full Name');
    const inputElement = getByPlaceholderText('John Doe');
    const errorMessage = getByText('only alphabet are allowed');

    expect(inputElement.tagName).toBe('INPUT');
    expect(inputElement).toHaveStyle(`
      border: .1em solid #FF0000;
    `);

    expect(errorMessage).toBeTruthy();
    expect(labelElement).toBeTruthy();
  });
});
