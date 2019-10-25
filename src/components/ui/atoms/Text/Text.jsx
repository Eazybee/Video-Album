import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '<styles>/theme';


/**
 * @description - Text Component
 *
 * @prop {string} fontSize - fontSize
 * @prop {string} textAlign - textAlign
 * @prop {string} color - color
 * @prop {string} display - display
 * @prop {string} fontWeight - fontWeight
 * @prop {string} children - children
 * @prop {string} padding - padding
 * @prop {boolean} hasRightMargin - hasRightMargin
 *
 * @return {component} Text
 */
const Text = ({
  fontSize,
  textAlign,
  color,
  display,
  fontWeight,
  children,
  padding,
  hasRightMargin,
  ...props
}) => (
  <Text.Container
    fontSize={fontSize}
    textAlign={textAlign}
    color={color}
    display={display}
    fontWeight={fontWeight}
    padding={padding}
    hasRightMargin={hasRightMargin}
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
    hasRightMargin,
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
    ${hasRightMargin ? 'margin-right: 1em;' : ''}
`}`;


Text.defaultProps = {
  display: 'inline',
  fontWeight: 'normal',
  textAlign: 'left',
  fontSize: 'normal',
  color: 'black',
  padding: 'zero',
  hasRightMargin: false,
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
  hasRightMargin: PropTypes.bool,
};

export default Text;
