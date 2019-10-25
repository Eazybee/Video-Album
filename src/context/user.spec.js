import React, { useContext } from 'react';
import { render } from '<src>/helpers/testUtils';
import UserContext, { UserProvider } from './user';

const Text = () => {
  const A = () => (
    <UserProvider>
      <B/>
    </UserProvider>
  );

  const B = () => {
    const [, setUser] = useContext(UserContext);
    setUser('Ezekiel');
    return <C/>;
  };
  const C = () => <D/>;

  const D = () => {
    const [user] = useContext(UserContext);
    return <p>{user}</p>;
  };

  return <A/>;
};

describe('User Context', () => {
  it('should display Ezekiel', () => {
    const { getByText } = render(<Text/>);

    expect(getByText('Ezekiel')).toBeTruthy();
  });
});
