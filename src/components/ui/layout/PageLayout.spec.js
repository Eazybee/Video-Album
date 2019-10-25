import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '<src>/helpers/testUtils';
import PageLayout from './PageLayout';

describe('PageLayout Component', () => {
  it('should render with default css', () => {
    const {
      container, getByPlaceholderText, getByRole, getByText,
    } = render(
      <MemoryRouter>
        <PageLayout>
          <div>This is a div</div>
        </PageLayout>
      </MemoryRouter>,
    );

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
    expect(container).toBeTruthy();
    expect(getByText('This is a div')).toBeTruthy();
    expect(getByText('This is a div').tagName).toBe('DIV');
    expect(getByText('This is a div').parentNode.tagName).toBe('MAIN');
  });
});
