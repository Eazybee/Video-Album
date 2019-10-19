import React from 'react';
import { render } from '<src>/helpers/testUtils';
import Flexbox from './Flexbox';
import '@testing-library/jest-dom/extend-expect';


describe('Flexbox Component', () => {
  it('should render with default css', () => {
    const { getByText } = render(<Flexbox>This is a flebox</Flexbox>);

    expect(getByText('This is a flebox')).toBeTruthy();
    expect(getByText('This is a flebox')).toHaveStyle(`
      display: flex;
      padding: 0;
      margin: 0;
      flex-direction: row;
      flex-wrap: wrap;
    `);
  });

  it('should have border bottom', () => {
    const { getByText } = render(<Flexbox hasBottomBorder>This is a flebox</Flexbox>);

    expect(getByText('This is a flebox')).toHaveStyle(`
      display: flex;
      padding: 0;
      margin: 0;
      flex-direction: row;
      flex-wrap: wrap;
      border-bottom: solid .2em #719192;
    `);
  });

  it('should have border bottom', () => {
    const { getByText } = render(<Flexbox hasBottomBorder>This is a flebox</Flexbox>);

    expect(getByText('This is a flebox')).toHaveStyle(`
      border-bottom: solid .2em #719192;
    `);
  });

  it('should have md padding', () => {
    const { getByText } = render(<Flexbox padding='md'>This is a flebox</Flexbox>);

    expect(getByText('This is a flebox')).toHaveStyle(`
      padding: .5em;
    `);
  });

  it('should have flex-direction column', () => {
    const { getByText } = render(<Flexbox flexDirection='column'>This is a flebox</Flexbox>);

    expect(getByText('This is a flebox')).toHaveStyle(`
      flex-direction: column;
    `);
  });

  it('should have justify content of space-between', () => {
    const { getByText } = render(<Flexbox justifyContent='space-between'>This is a flebox</Flexbox>);

    expect(getByText('This is a flebox')).toHaveStyle(`
      justify-content: space-between;
    `);
  });
});
