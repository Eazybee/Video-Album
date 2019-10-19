import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '<styles>/theme';

const Flexbox = ({
  type,
  padding,
  margin,
  hasBottomBorder,
  flexDirection,
  flexWrap,
  justifyContent,
  children,
  ...props
}) => {
  const FLexContainer = styled(type)`
    ${({
      padding,
      margin,
      flexDirection,
      flexWrap,
      justifyContent,
      hasBottomBorder,
      theme: { spacings }
    }) => `
      display: flex;
      padding: ${spacings[padding]};
      margin: ${spacings[margin]};
      flex-direction: ${flexDirection};
      flex-wrap: ${flexWrap};
      justify-content: ${justifyContent};
      border-bottom: ${hasBottomBorder ? 'solid .2em #719192' : '' };
    `}`;

    return (
      <FLexContainer
        padding={padding}
        margin={padding}
        hasBottomBorder={hasBottomBorder}
        flexDirection={flexDirection}
        flexWrap={flexWrap}
        justifyContent={justifyContent}
        {...props}
      >
        {children}
      </FLexContainer>
    );
};

Flexbox.defaultProps = {
  type: 'div',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  hasBottomBorder: false,
  padding: 'zero',
  margin: 'zero',
};

const { spacings } = theme;

Flexbox.propTypes = {
  type: PropTypes.oneOf(['div', 'header', 'main', 'details']),
  children: PropTypes.node,
  padding: PropTypes.oneOf(Object.keys(spacings)),
  margin: PropTypes.oneOf(Object.keys(spacings)),
  flexDirection: PropTypes.oneOf(['row', 'column']),
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap']),
  justifyContent: PropTypes.oneOf(['flex-start', 'space-between', 'space-around']),
  hasBottomBorder: PropTypes.bool,
};

export default Flexbox;
