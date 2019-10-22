import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Button = ({
  danger,
  children,
  display,
  mediaQuery,
  ...props
}) => (
  <Button.Container
    danger={danger}
    display={display}
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
    mediaQuery,
    theme: {
      backgroundColors, textColors,
    },
  }) => `
    background-color: ${backgroundColors.transparent};
    color: ${danger ? textColors.danger : textColors.primary};
    border: solid .1em ${danger ? textColors.danger : textColors.primary};
    display: ${display};
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
};


Button.propTypes = {
  danger: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]).isRequired,
  display: PropTypes.oneOf(['block', 'inline']),
  mediaQuery: PropTypes.string,
};

export default Button;
