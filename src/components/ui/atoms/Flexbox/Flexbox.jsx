/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '<styles>/theme';


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
    ...props
  }) => (
    <Flexbox.Container
      padding={padding}
      margin={padding}
      hasBottomBorder={hasBottomBorder}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      justifyContent={justifyContent}
      width={width}
      height={height}
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
    theme: { spacings, textColors },
  }) => `
    display: flex;
    padding: ${spacings[padding]};
    margin: ${spacings[margin]};
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    justify-content: ${justifyContent};
    border-bottom: ${hasBottomBorder ? `solid .2em ${textColors.grey}` : ''};
    width: ${spacings[width]}
    height: ${spacings[height]}
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
  };

  const { spacings } = theme;

  Flexbox.propTypes = {
    children: PropTypes.node,
    padding: PropTypes.oneOf(Object.keys(spacings)),
    margin: PropTypes.oneOf(Object.keys(spacings)),
    flexDirection: PropTypes.oneOf(['row', 'column']),
    flexWrap: PropTypes.oneOf(['nowrap', 'wrap']),
    justifyContent: PropTypes.oneOf(['flex-start', 'space-between', 'space-around']),
    hasBottomBorder: PropTypes.bool,
    width: PropTypes.oneOf(Object.keys(spacings)),
    height: PropTypes.oneOf(Object.keys(spacings)),
  };

  return Flexbox;
};


export default getContainer;
