import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '<styles>/theme';

const Input = ({
  width,
  type,
  placeholder,
  error,
  ...props
}) => (
  <Input.Container
   type={type}
   width={width}
   error={error}
   placeholder={placeholder}
   {...props}
  />
);

Input.Container = styled.input`
  ${({
    width,
    error,
    theme: { textColors, spacings },
  }) => `
    padding: .5em .5em;
    line-height: 1.2em;
    letter-spacing: .1em;
    display: inline;
    border-radius: .4em;
    outline: 0;
    border: .1em solid ${error ? textColors.danger : textColors.grey};
    color: ${textColors.ash};
    width: calc(${spacings[width]} - 1.4em);
    transition: .3s linear;

    &:hover, &:focus  {
      border-color: ${error ? textColors.danger : textColors.primary};
      box-shadow: .1em .1em .4em ${textColors.grey};
    }
  `}
`;

Input.defaultProps = {
  type: 'text',
  width: 'fw',
  error: undefined,
};

const { spacings } = theme;

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password']),
  width: PropTypes.oneOf(Object.keys(spacings)),
  error: PropTypes.string,
};

export default Input;
