import React from 'react';
import { render } from '<src>/helpers/testUtils';
import '@testing-library/jest-dom/extend-expect';
import Form from './Form';

const setup = (alterProp = {}) => {
  const props = {
    buttonText: 'Submit',
    rules: {
      firstName: 'required|alpha',
    },
    submit: e => console.log(e),
    inputs: [
      {
        inputProps: {
          placeholder: 'John Doe',
          type: 'text',
          name: 'firstName',
        },
        id: 5,
      },
    ],
  };

  const overideProps = {
    ...props,
    ...alterProp,
  };

  return render(<Form {...overideProps} />);
};

describe('Form Component', () => {
  it('should render with input element', () => {
    const {
      container, getByPlaceholderText, getByText,
    } = setup();

    expect(container).toBeTruthy();
    expect(getByPlaceholderText('John Doe')).toBeTruthy();
    expect(getByText('Submit').type).toBeTruthy();
  });
});
