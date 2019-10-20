
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as faSolid from 'styled-icons/fa-solid';
import * as faRegular from 'styled-icons/fa-regular';
import theme from '<styles>/theme';

const Icon = ({
  icon,
  big,
  color,
  onClick,
  ...props
}) => {
  const [iconType, iconName] = icon.split('/');
  const StyleIcon = iconType === 'faRegular' ? faRegular[iconName] : faSolid[iconName];

  return (
  <Icon.Container
    big={big}
    color={color}
    role='icon'
    onClick={onClick}
    {...props}
  >
    <StyleIcon/>
  </Icon.Container>);
};

Icon.Container = styled.span`
  ${({
    big,
    color,
    onClick,
    theme: { textColors },
  }) => `
    color: ${textColors[color]};
    width: ${big ? '4em' : '1em'};
    height: ${big ? '4em' : '1em'};
    cursor: ${onClick ? 'pointer' : 'auto'};
    display: inline-block;

  `}`;

Icon.defaultProps = {
  color: 'primary',
  big: false,
  onClick: undefined,
};

const { textColors } = theme;

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  big: PropTypes.bool,
  color: PropTypes.oneOf(Object.keys(textColors)),
  onClick: PropTypes.func,
};

export default Icon;
