import React from 'react';
import { render, fireEvent } from '<src>/helpers/testUtils';
import Rating from './Rating';
import UserContext from '<context>/context';


const setup = children => render(
  <UserContext.Provider value={[true]} >
    {children}
  </UserContext.Provider>,
);

describe('Rating Organism', () => {
  it('should render with input element', () => {
    const { getAllByRole, getByText } = setup(
      <Rating
        like={{
          count: 2,
        }}

        dislike={{
          count: 0,
        }}
      />,
    );


    const iconElements = getAllByRole('icon');
    expect(iconElements.length).toBe(2);
    expect(getByText('2')).toBeTruthy();
    expect(getByText('0')).toBeTruthy();
  });

  it('should increase like by 1', () => {
    const { getAllByRole, getByText } = setup(
      <Rating
        like={{
          count: 2,
        }}

        dislike={{
          count: 1,
          status: true,
        }}
      />,
    );

    const iconElements = getAllByRole('icon');
    fireEvent.click(iconElements[0]);
    fireEvent.click(iconElements[0]);

    expect(iconElements.length).toBe(2);
    expect(getByText('3')).toBeTruthy();
    expect(getByText('0')).toBeTruthy();
  });

  it('should decrease like by 1 and Increase like by 1 ', () => {
    const { getAllByRole, getByText } = setup(
      <Rating
        like={{
          count: 3,
          status: true,
        }}

        dislike={{
          count: 0,
        }}
      />,
    );

    const iconElements = getAllByRole('icon');
    fireEvent.click(iconElements[1]);

    expect(iconElements.length).toBe(2);
    expect(getByText('2')).toBeTruthy();
    expect(getByText('1')).toBeTruthy();
  });

  it('should not decrease like by 1 nor Increase like by 1 ', () => {
    const { getAllByRole, getByText } = setup(
      <Rating
        like={{
          count: 3,
        }}

        dislike={{
          count: 0,
          status: true,
        }}
      />,
    );

    const iconElements = getAllByRole('icon');
    fireEvent.click(iconElements[1]);

    expect(iconElements.length).toBe(2);
    expect(getByText('3')).toBeTruthy();
    expect(getByText('0')).toBeTruthy();
  });

  it('should not decrease like or Increase like if user is not logged in  ', () => {
    const { getAllByRole, getByText } = render(
      <Rating
        like={{
          count: 3,
        }}

        dislike={{
          count: 0,
          status: true,
        }}
      />,
    );

    const iconElements = getAllByRole('icon');
    // like icon
    fireEvent.click(iconElements[0]);

    expect(iconElements.length).toBe(2);
    expect(getByText('3')).toBeTruthy();
    expect(getByText('0')).toBeTruthy();

    // dislike icon
    fireEvent.click(iconElements[1]);

    expect(getByText('3')).toBeTruthy();
    expect(getByText('0')).toBeTruthy();
  });
});
