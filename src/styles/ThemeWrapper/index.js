
import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../theme';

export class ThemeWrapper extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>{this.props.children}</Fragment>
      </ThemeProvider>
    );
  }
}

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeWrapper;
