import React from 'react';
import { render } from '<src>/helpers/testUtils';
import Button from './Button';
import '@testing-library/jest-dom/extend-expect';

describe('Buttton Component', () => {
  it('should render with default css', () => {
    const { getByText } = render(<Button>Submit</Button>);

    expect(getByText('Submit')).toBeTruthy();
    expect(getByText('Submit')).toHaveStyle(`
      background-color: transparent;
      color: #494ca2;
      border: solid .1em #494ca2;
      display: inline;
      padding: .5em 1em;
      border-radius: .4em;
      outline: 0;
      transition: .3s linear;
    `);
  });

  it('should render abort button', () => {
    const { getByText } = render(<Button type='danger'>Submit</Button>);

    expect(getByText('Submit')).toBeTruthy();
    expect(getByText('Submit')).toHaveStyle(`
      color: #FF0000;
      border: solid .1em #FF0000;
    `);
  });
});
