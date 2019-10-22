import React from 'react';
import PropTypes from 'prop-types';
import getContainer from '<atoms>/Flexbox/Flexbox';
import Icon from '<atoms>/Icon/Icon';
import Text from '<atoms>/Text/Text';

const Flexbox = getContainer();
const Rating = ({ count, icon, onClick, alignItems }) => (
    <Flexbox alignItems={alignItems}>
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
};

export default Rating;
