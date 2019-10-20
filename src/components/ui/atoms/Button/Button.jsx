import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({
  type,
  children,
  display,
  ...props
}) => (
  <Button.Container
    type={type}
    display={display}
    {...props}
  >
    {children}
  </Button.Container>
);

Button.Container = styled.button`
  ${({
    type,
    display,
    theme: {
      backgroundColors, textColors,
    },
  }) => `
    background-color: ${backgroundColors.transparent};
    color: ${type === 'primary' ? textColors.primary : textColors.danger};
    border: solid .1em ${type === 'primary' ? textColors.primary : textColors.danger};
    display: ${display};
    padding: .5em 1em;
    border-radius: .4rem;
    outline: 0;
    cursor: pointer;
    transition: .3s linear;

    &:hover, &:active  {
      background-color: ${type === 'primary' ? textColors.primary : textColors.danger};
      color: ${textColors.white};
      box-shadow: .1em .1em .4em ${textColors.grey};
    }
  `}
`;

Button.defaultProps = {
  type: 'primary',
  display: 'inline',
};


Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'danger']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]).isRequired,
  display: PropTypes.oneOf(['block', 'inline']),
};

export default Button;
