import React from 'react';
import PropTypes from 'prop-types';
import getContainer from '<atoms>/Flexbox/Flexbox';
import Icon from '<atoms>/Icon/Icon';
import Text from '<atoms>/Text/Text';

const Flexbox = getContainer();
const Rating = ({ count, icon, onClick }) => (
    <Flexbox>
      <>
        <Text padding='xxsm'>{count}</Text>
        <Icon icon={icon} onClick={onClick}/>
      </>
    </Flexbox>
);


Rating.propTypes = {
  count: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Rating;
