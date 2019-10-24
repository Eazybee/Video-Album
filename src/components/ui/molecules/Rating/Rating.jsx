import React from 'react';
import PropTypes from 'prop-types';
import getContainer from '<atoms>/Flexbox/Flexbox';
import Icon from '<atoms>/Icon/Icon';
import Text from '<atoms>/Text/Text';
import theme from '<styles>/theme';

const Flexbox = getContainer();

/**
 * @description - InputField Component
 *
 * @prop {number} count - count
 * @prop {string} icon- icon name
 * @prop {func} onClick - onClick
 * @prop {string} alignItems - alignItems
 * @prop {string} leftPadding - leftPadding
 *
 * @return {component} InputField
 */
const Rating = ({
  count, icon, onClick, alignItems, leftPadding,
}) => (
    <Flexbox alignItems={alignItems} leftPadding={leftPadding}>
      <>
        <Text fontSize='md'>{count}</Text>
        <Icon icon={icon} onClick={onClick}/>
      </>
    </Flexbox>
);

Rating.defaultProps = {
  alignItems: 'baseline',
};

Rating.propTypes = {
  count: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  alignItems: PropTypes.oneOf(['baseline', 'center']),
  leftPadding: PropTypes.oneOf(Object.keys(theme.spacings)),
};

export default Rating;
