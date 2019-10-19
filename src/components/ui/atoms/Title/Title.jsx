/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '<styles>/theme';


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
    font-size: ${fontSizes[fontSize]};
    font-weight: bold;
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
  color: 'danger',
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
