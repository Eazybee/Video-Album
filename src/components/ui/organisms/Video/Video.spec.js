import React from 'react';
import { render } from '<src>/helpers/testUtils';
import Video from './Video';


describe('Video Organism', () => {
  const props = {
    src: 'https://www.youtube.com/embed/QPwd_TQpsHY',
    title: 'Official Funny Video',
    description: 'This is a description',
    likeCount: 0,
    dislikeCount: 0,
  };

  it('should render successfully', () => {
    const { getByText, getByRole, getAllByRole } = render(<Video {...props} />);

    expect(getByRole('video')).toBeTruthy();
    expect(getByRole('details')).toBeTruthy();
    expect(getByRole('summary')).toBeTruthy();
    expect(getAllByRole('icon').length).toBe(2);
    expect(getByText(props.title)).toBeTruthy();
    expect(getByText(props.description)).toBeTruthy();
    expect(getByText('Shared by IloriEzekiel@video.com')).toBeTruthy();
  });

  it('should show sharer', () => {
    props.sharer = 'myemail@test.com';
    const {
      getByText,
    } = render(<Video {...props} />);

    expect(getByText('Shared by myemail@test.com')).toBeTruthy();
  });
});
