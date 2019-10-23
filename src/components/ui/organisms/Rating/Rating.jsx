import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import getFlexbox from '<atoms>/Flexbox/Flexbox';
import RatingMolecule from '<molecules>/Rating/Rating';
import UserContext from '<context>/context';

const Flexbox = getFlexbox();
const Rating = ({ like, dislike }) => {
  const [user] = useContext(UserContext);
  const [likeIcon, setLike] = useState({
    count: like.count,
    icon: like.status ? 'faSolid/ThumbsUp' : 'faRegular/ThumbsUp',
    status: like.status || false,
  });

  const [dislikeIcon, setDislike] = useState({
    count: dislike.count,
    icon: dislike.status ? 'faSolid/ThumbsDown' : 'faRegular/ThumbsDown',
    status: dislike.status || false,
  });

  const onLike = () => {
    if (user) {
      setLike({
        count: likeIcon.status ? likeIcon.count : likeIcon.count + 1,
        icon: 'faSolid/ThumbsUp',
        status: true,
      });

      setDislike({
        count: dislikeIcon.status ? dislikeIcon.count - 1 : dislikeIcon.count,
        icon: 'faRegular/ThumbsDown',
        status: false,
      });
    }
  };

  const onDislike = () => {
    if (user) {
      setLike({
        count: likeIcon.status ? likeIcon.count - 1 : likeIcon.count,
        status: false,
        icon: 'faRegular/ThumbsUp',
      });

      setDislike({
        count: dislikeIcon.status ? dislikeIcon.count : dislikeIcon.count + 1,
        status: true,
        icon: 'faSolid/ThumbsDown',
      });
    }
  };

  return (
    <Flexbox justifyContent='space-between' width='lg'>
      <>
        <RatingMolecule count={likeIcon.count} icon={likeIcon.icon} onClick={onLike}/>
        <RatingMolecule
          alignItems='center'
          count={dislikeIcon.count}
          icon={dislikeIcon.icon}
          onClick={onDislike}
        />
      </>
    </Flexbox>
  );
};

Rating.propTypes = {
  like: PropTypes.shape({
    count: PropTypes.number.isRequired,
    status: PropTypes.bool,
  }).isRequired,
  dislike: PropTypes.shape({
    count: PropTypes.number.isRequired,
    status: PropTypes.bool,
  }).isRequired,
};

export default Rating;