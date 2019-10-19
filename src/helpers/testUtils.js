/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import ThemeWrapper from '<styles>/ThemeWrapper';

const ThemeProvider = ({ children }) => <ThemeWrapper>{children}</ThemeWrapper>;

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const customRender = (ui, options) => render(ui, { wrapper: ThemeProvider, ...options });

export * from '@testing-library/react';

export { customRender as render };
