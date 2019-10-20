
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as faSolid from 'styled-icons/fa-solid';
import * as faRegular from 'styled-icons/fa-regular';
import theme from '<styles>/theme';

const Icon = ({
  type,
  big,
  color,
  ...props
}) => {
  const IconType = faRegular[type] || faSolid[type];

  return (
  <Icon.Container
    big={big}
    color={color}
    role='icon'
    {...props}
  >
    <IconType/>
  </Icon.Container>);
};

Icon.Container = styled.span`
  ${({
    big,
    color,
    theme: { textColors },
  }) => `
    color: ${textColors[color]};
    width: ${big ? '4em' : '1em'};
    height: ${big ? '4em' : '1em'};
    display: inline-block;
  `}`;

Icon.defaultProps = {
  color: 'primary',
  big: false,
};

const { textColors } = theme;

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  big: PropTypes.bool,
  color: PropTypes.oneOf(Object.keys(textColors)),
};

export default Icon;
