import React from 'react';
import { render } from '<src>/helpers/testUtils';
import '@testing-library/jest-dom/extend-expect';
import Label from './Label';

describe('Label Component', () => {
  it('should render successfully', () => {
    const { getByText } = render(
      <Label>Default</Label>,
    );

    const label = getByText('Default');
    expect(label).toBeTruthy();
    expect(label.tagName).toBe('LABEL');
    expect(getByText('Default')).toHaveStyle(`
      display: inline-block;
      padding: 0;
      margin-bottom: 0;
    `);
  });

  it('should render successfully', () => {
    const { getByText } = render(
      <Label hasBottomMargin>Default</Label>,
    );

    expect(getByText('Default')).toHaveStyle(`
      margin-bottom: .5em;
    `);
  });
});
