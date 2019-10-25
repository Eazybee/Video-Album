/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '<styles>/theme';


/**
 * @description - Title Component
 *
 * @prop {string} fontSize - fontSize
 * @prop {string} textAlign - textAlign
 * @prop {string} color - color
 * @prop {string} display - display
 * @prop {string} children - children
 * @prop {string} padding - padding
 * @prop {string} type - type
 *
 * @return {component} Title
 */
const Title = ({
  fontSize,
  textAlign,
  color,
  display,
  children,
  padding,
  type,
  ...props
}) => {
  const Header = styled(type)`
  ${({
    fontSize,
    textAlign,
    color,
    display,
    padding,
    theme: {
      fontSizes, textColors, spacings,
    },
  }) => `
    margin: 0;
    font-weight: bold;
    font-size: ${fontSizes[fontSize]};
    display: ${display};
    padding: ${spacings[padding]};
    color: ${textColors[color]};
    text-align: ${textAlign};
  `}`;

  return (
    <Header
      fontSize={fontSize}
      textAlign={textAlign}
      color={color}
      display={display}
      padding={padding}
      {...props}
    >
      {children}
    </Header>);
};


Title.defaultProps = {
  type: 'h1',
  display: 'block',
  textAlign: 'left',
  fontSize: 'normal',
  color: 'primary',
  padding: 'zero',
};

const {
  textColors, fontSizes, fontWeights, spacings,
} = theme;
Title.propTypes = {
  type: PropTypes.oneOf(['h1', 'h6']).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  display: PropTypes.oneOf(['block', 'inline', 'flex', 'inline-block', 'none']),
  color: PropTypes.oneOf(Object.keys(textColors)),
  fontSize: PropTypes.oneOf(Object.keys(fontSizes)),
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  fontWeight: PropTypes.oneOf(Object.keys(fontWeights)),
  padding: PropTypes.oneOf(Object.keys(spacings)),
};

export default Title;
