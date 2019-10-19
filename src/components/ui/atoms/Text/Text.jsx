import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '<styles>/theme';

const Text = ({
  fontSize,
  textAlign,
  color,
  display,
  fontWeight,
  children,
  padding,
  ...props
}) => (
  <Text.Container
    fontSize={fontSize}
    textAlign={textAlign}
    color={color}
    display={display}
    fontWeight={fontWeight}
    padding={padding}
    {...props}
  >
    {children}
  </Text.Container>
);

Text.Container = styled.span`
${({
    padding,
    fontSize: userFontSize,
    fontWeight: userFontWeight,
    display,
    textAlign,
    color,
    theme: {
      fontSizes, fontWeights, textColors, spacings,
    },
  }) => `
    text-align: ${textAlign};
    color: ${textColors[color]};
    display: ${display};
    padding: ${spacings[padding]};
    font-size: ${fontSizes[userFontSize]};
    font-weight: ${fontWeights[userFontWeight]};
`}`;


Text.defaultProps = {
  display: 'inline',
  fontWeight: 'normal',
  textAlign: 'left',
  fontSize: 'normal',
  color: 'black',
  padding: 'zero',
};

const {
  textColors, fontSizes, fontWeights, spacings,
} = theme;

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  display: PropTypes.oneOf(['block', 'inline', 'flex', 'inline-block', 'none']),
  color: PropTypes.oneOf(Object.keys(textColors)),
  fontSize: PropTypes.oneOf(Object.keys(fontSizes)),
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  fontWeight: PropTypes.oneOf(Object.keys(fontWeights)),
  padding: PropTypes.oneOf(Object.keys(spacings)),
};

export default Text;
