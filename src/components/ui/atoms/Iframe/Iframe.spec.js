import React from 'react';
import { render } from '<src>/helpers/testUtils';
import Iframe from './Iframe';
import '@testing-library/jest-dom/extend-expect';


describe('Iframe Atom', () => {
  it('should render with default css', () => {
    const { getByTestId } = render(<Iframe src='url' data-testid='iframe'/>);

    expect(getByTestId('iframe')).toBeTruthy();
    expect(getByTestId('iframe').tagName).toBe('IFRAME');
    expect(getByTestId('iframe')).toHaveStyle(`
      width: 100%;
      height: 100%;
    `);
  });
});
