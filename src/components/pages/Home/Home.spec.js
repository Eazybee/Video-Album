import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '<src>/helpers/testUtils';
import { VideoProvider } from '<context>/video';
import Home from './Home';

describe('Home Component', () => {
  it('should render successfully', () => {
    const { container, getAllByRole, getByText } = render(
      <MemoryRouter>
        <VideoProvider>
          <Home />
        </VideoProvider>
      </MemoryRouter>,
    );

    expect(container).toBeTruthy();
    expect(getByText('Funny Movies')).toBeTruthy();
    expect(getAllByRole('video').length).toBeGreaterThanOrEqual(1);
  });
});
