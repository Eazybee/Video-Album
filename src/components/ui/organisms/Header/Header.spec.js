import React, { useState } from 'react';
import { render, fireEvent } from '<src>/helpers/testUtils';
import UserContext from '<context>/context';
import Header from './Header';

const HeaderWithContext = () => {
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider value={[user, setUser]} >
      <Header>This is a flebox</Header>
    </UserContext.Provider>
  );
};

describe('Header Organism', () => {
  it('should render successfully', () => {
    const {
      getByText, getByRole, getByPlaceholderText,
    } = render(<Header>This is a flebox</Header>);

    const logo = getByRole('icon');
    const title = getByText('Funny Movies');
    const form = getByRole('form');
    const emailInput = getByPlaceholderText('JohnDoe@mail.com');
    const passwordInput = getByPlaceholderText('********');
    const loginButton = getByText('Login / Register');

    expect(logo).toBeTruthy();
    expect(title).toBeTruthy();
    expect(form).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(loginButton).toBeTruthy();
  });

  it('should login successfully', () => {
    const {
      getByText, getByPlaceholderText,
    } = render(<HeaderWithContext />);

    const emailInput = getByPlaceholderText('JohnDoe@mail.com');
    const passwordInput = getByPlaceholderText('********');
    const loginButton = getByText('Login / Register');

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: '1erghj#ffs' } });
    fireEvent.click(loginButton);

    expect(getByText('Welcome')).toBeTruthy();
    expect(getByText('test@test.com')).toBeTruthy();
    expect(getByText('Logout')).toBeTruthy();
    expect(getByText('Share a movie')).toBeTruthy();
  });

  it('should logout successfully', () => {
    const {
      getByText, getByPlaceholderText, getByRole,
    } = render(<HeaderWithContext />);

    fireEvent.change(getByPlaceholderText('JohnDoe@mail.com'), { target: { value: 'test@test.com' } });
    fireEvent.change(getByPlaceholderText('********'), { target: { value: '1erghj#ffs' } });
    fireEvent.click(getByText('Login / Register'));
    fireEvent.click(getByText('Logout'));

    expect(getByRole('form')).toBeTruthy();
    expect(getByPlaceholderText('JohnDoe@mail.com')).toBeTruthy();
    expect(getByPlaceholderText('********')).toBeTruthy();
    expect(getByText('Login / Register')).toBeTruthy();
  });
});
