import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '<styles>/theme';

/**
 * @description - Button Component
 *
 * @prop {boolean} danger - background color red
 * @prop {string} display - display
 * @prop {string} width - width
 * @prop {string} mediaQuery - mediaQuery
 * @prop {string} children - children
 *
 * @return {component} Button
 */
const Button = ({
  danger,
  children,
  display,
  width,
  mediaQuery,
  ...props
}) => (
  <Button.Container
    danger={danger}
    display={display}
    width={width}
    mediaQuery={mediaQuery}
    {...props}
  >
    {children}
  </Button.Container>
);

Button.Container = styled.button`
  ${({
    danger,
    display,
    width,
    mediaQuery,
    theme: {
      backgroundColors, textColors, spacings,
    },
  }) => `
    background-color: ${backgroundColors.transparent};
    color: ${danger ? textColors.danger : textColors.primary};
    border: solid .1em ${danger ? textColors.danger : textColors.primary};
    display: ${display};
    width: ${width === 'auto' ? 'auto' : `calc(${spacings[width]} - 1.4em)`};
    padding: .7em 1em;
    border-radius: .4em;
    outline: 0;
    cursor: pointer;
    transition: .3s linear;

    &:hover, &:active  {
      background-color: ${danger ? textColors.danger : textColors.primary};
      color: ${textColors.white};
      box-shadow: .1em .1em .4em ${textColors.grey};
    }
    ${mediaQuery}
  `}
`;

Button.defaultProps = {
  display: 'inline',
  danger: false,
  width: 'auto',
};

const { spacings } = theme;

Button.propTypes = {
  danger: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]).isRequired,
  display: PropTypes.oneOf(['block', 'inline']),
  mediaQuery: PropTypes.string,
  width: PropTypes.oneOf(Object.keys(spacings)),
};

export default Button;
