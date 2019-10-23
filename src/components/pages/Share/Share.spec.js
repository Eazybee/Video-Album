import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '<src>/helpers/testUtils';
import Share from './Share';

describe('Share Component', () => {
  it('should render succefully', () => {
    const { container } = render(
      <MemoryRouter>
        <Share />
      </MemoryRouter>,
    );

    expect(container).toBeTruthy();
  });

  it('should render succefully', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <Share />
      </MemoryRouter>,
    );

    fireEvent.change(
      getByPlaceholderText('https://www.youtube.com/watch?v='),
      { target: { value: 'https://www.youtube.com/watch?v=YTCJHC' } },
    );

    fireEvent.click(getByText('Share'));

    expect(container).toBeTruthy();
  });
});
