import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '<src>/helpers/testUtils';
import VideoContext from '<context>/video';
import Share from './Share';


describe('Share Component', () => {
  it('should render succefully', () => {
    const { container } = render(
      <MemoryRouter>
        <VideoContext.Provider value={['', () => {}]} >
          <Share history={{ push: () => {} }}/>
        </VideoContext.Provider>
      </MemoryRouter>,
    );

    expect(container).toBeTruthy();
  });
});
