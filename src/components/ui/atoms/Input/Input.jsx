import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '<styles>/theme';

const Input = ({
  width,
  type,
  placeholder,
  ...props
}) => (
  <Input.Container
   type={type}
   width={width}
   placeholder={placeholder}
   {...props}
  />
);

Input.Container = styled.input`
  ${({
    width,
    theme: { textColors, spacings },
  }) => `
    padding: .5em .5em;
    line-height: 1.2em;
    letter-spacing: .1em;
    display: inline;
    border-radius: .4rem;
    outline: 0;
    border: .2em solid ${textColors.grey};
    color: ${textColors.grey};
    width: calc(${spacings[width]} - 1.4em);
    transition: .3s linear;

    &:hover, &:focus  {
      border-color: ${textColors.primary};
      box-shadow: .1em .1em .4em ${textColors.grey};
    }
  `}
`;

Input.defaultProps = {
  type: 'text',
  width: 'fw',
};

const { spacings } = theme;

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password']),
  width: PropTypes.oneOf(Object.keys(spacings)),
};

export default Input;
