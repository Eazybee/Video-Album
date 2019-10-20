import React from 'react';
import { render } from '<src>/helpers/testUtils';
import Icon from './Icon';
import '@testing-library/jest-dom/extend-expect';

describe('Icon Component', () => {
  it('should render with default css', () => {
    const { getByTestId } = render(<Icon type='ThumbsDown' data-testid='icon'/>);

    expect(getByTestId('icon')).toBeTruthy();
    expect(getByTestId('icon')).toHaveStyle(`
      display: inline-block;
      width: 1em;
      height: 1em;
      color: #494CA2;
    `);
  });

  it('should render big icon', () => {
    const { getByTestId } = render(
      <Icon
        type='ThumbsDown'
        data-testid='icon'
        big
      />,
    );

    expect(getByTestId('icon')).toHaveStyle(`
      width: 4em;
      height: 4em;
    `);
  });
});
