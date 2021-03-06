import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '<styles>/theme';

/**
 * @description - Button Component
 *
 * @prop {string} width - widh
 * @prop {string} type - type
 * @prop {string} placeholder - placeholder
 * @prop {string} error - error
 * @prop {bool} hasVerticalMargin - hasVerticalMargin
 *
 * @return {component} Button
 */
const Input = ({
  width,
  type,
  placeholder,
  error,
  hasVerticalMargin,
  ...props
}) => (
  <Input.Container
   type={type}
   width={width}
   error={error}
   placeholder={placeholder}
   hasVerticalMargin={hasVerticalMargin}
   {...props}
  />
);

Input.Container = styled.input`
  ${({
    width,
    error,
    hasVerticalMargin,
    theme: { textColors, spacings },
  }) => `
    padding: .5em .5em;
    line-height: 1.5em;
    letter-spacing: .1em;
    display: inline;
    border-radius: .4em;
    outline: 0;
    border: .1em solid ${error ? textColors.danger : textColors.grey};
    color: ${textColors.ash};
    width: calc(${spacings[width]} - 1.4em);
    transition: .3s linear;
    ${hasVerticalMargin ? 'margin: .5em 0;' : ''}
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
  hasVerticalMargin: false,
};

const { spacings } = theme;

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password']),
  width: PropTypes.oneOf(Object.keys(spacings)),
  hasVerticalMargin: PropTypes.bool,
  error: PropTypes.string,
};

export default Input;
