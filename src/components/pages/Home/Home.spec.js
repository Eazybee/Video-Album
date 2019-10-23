import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '<src>/helpers/testUtils';
import Home from './Home';

describe('Home Component', () => {
  it('should render successfully', () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(container).toBeTruthy();
  });
});
