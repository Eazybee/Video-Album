/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '<styles>/theme';

/**
 * @description - Get a flex container
 *
 * @prop {strin} tag - HTML tag name
 * @return {component} Flexbox
 */
const getContainer = (tag = 'div') => {
  const Flexbox = ({
    padding,
    margin,
    hasBottomBorder,
    flexDirection,
    flexWrap,
    justifyContent,
    children,
    width,
    height,
    alignItems,
    sidePadding,
    hasMarginBottom,
    hasMarginTop,
    leftPadding,
    onClick,
    mediaQuery,
    ...props
  }) => (
    <Flexbox.Container
      padding={padding}
      margin={margin}
      hasBottomBorder={hasBottomBorder}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      justifyContent={justifyContent}
      width={width}
      height={height}
      alignItems={alignItems}
      sidePadding={sidePadding}
      hasMarginBottom={hasMarginBottom}
      hasMarginTop={hasMarginTop}
      leftPadding={leftPadding}
      onClick={onClick}
      mediaQuery={mediaQuery}
      {...props}
    >
      {children}
    </Flexbox.Container>
  );

  Flexbox.Container = styled(tag)`
  ${({
    padding,
    margin,
    flexDirection,
    flexWrap,
    justifyContent,
    hasBottomBorder,
    width,
    height,
    alignItems,
    sidePadding,
    leftPadding,
    hasMarginBottom,
    hasMarginTop,
    onClick,
    mediaQuery,
    theme: { spacings, textColors },
  }) => `
    display: flex;
    padding: ${spacings[padding]};
    margin: ${spacings[margin]};
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    justify-content: ${justifyContent};
    border-bottom: ${hasBottomBorder ? `solid .2em ${textColors.grey}` : ''};
    width: ${spacings[width]};
    height: ${spacings[height]};
    align-items: ${alignItems};
    padding-right: ${sidePadding ? spacings[sidePadding] : spacings[padding]};
    padding-left: ${spacings[sidePadding] || spacings[leftPadding] || spacings[padding]};
    padding-bottom: ${hasMarginBottom ? '3em' : spacings[padding]};
    padding-top: ${hasMarginTop ? '1.5em' : spacings[padding]};
    cursor: ${onClick ? 'pointer' : 'auto'};

    ${mediaQuery}
  `}`;

  Flexbox.defaultProps = {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    hasBottomBorder: false,
    padding: 'zero',
    margin: 'zero',
    width: 'auto',
    height: 'auto',
    alignItems: 'baseline',
    hasMarginBottom: false,
  };

  const { spacings } = theme;

  Flexbox.propTypes = {
    children: PropTypes.node,
    padding: PropTypes.oneOf(Object.keys(spacings)),
    sidePadding: PropTypes.oneOf(Object.keys(spacings)),
    leftPadding: PropTypes.oneOf(Object.keys(spacings)),
    margin: PropTypes.oneOf(Object.keys(spacings)),
    flexDirection: PropTypes.oneOf(['row', 'column']),
    flexWrap: PropTypes.oneOf(['nowrap', 'wrap']),
    justifyContent: PropTypes.oneOf(['flex-start', 'space-between', 'space-around', 'center']),
    hasBottomBorder: PropTypes.bool,
    width: PropTypes.oneOf(Object.keys(spacings)),
    height: PropTypes.oneOf(Object.keys(spacings)),
    alignItems: PropTypes.oneOf(['baseline', 'center']),
    hasMarginBottom: PropTypes.bool,
    hasMarginTop: PropTypes.bool,
    onClick: PropTypes.func,
    mediaQuery: PropTypes.string,
  };

  return Flexbox;
};


export default getContainer;
