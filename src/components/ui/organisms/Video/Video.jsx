import React from 'react';
import PropTypes from 'prop-types';
import getFlexbox from '<atoms>/Flexbox/Flexbox';
import Rating from '<organisms>/Rating/Rating';
import Text from '<atoms>/Text/Text';
import Title from '<atoms>/Title/Title';
import Iframe from '<atoms>/Iframe/Iframe';

const Flexbox = getFlexbox();
const mediaQuery = `
  @media screen and (max-width:841px){
    padding: 1em;
    width: calc(100% - 2em);
    margin 0 auto;
  }

  @media screen and (max-width:559px){
    justify-content: center;
    padding: 1em 0;
     width: 100%;
  }
`;

const Video = ({
  src, title, description, likeCount, dislikeCount, sharer,
}) => (
    <Flexbox
      justifyContent='space-between'
      alignItems='center'
      sidePadding='x'
      hasMarginBottom
      mediaQuery={mediaQuery}
    >
      <Flexbox width='video' height='xl' role='video'>
        <Iframe src={src} />
      </Flexbox>
      <Flexbox flexDirection='column' width='video' role='details'>
        <Flexbox flexDirection='column' padding='xsm'>
          <Title type='h6' color='danger'>{title}</Title>
          <Text>{`Shared by ${sharer || 'IloriEzekiel@video.com'}`}</Text>
          <Rating
            like={{ count: parseInt(likeCount, 10) }}
            dislike={{ count: parseInt(dislikeCount, 10) }}
          />
        </Flexbox>
        <Flexbox flexDirection='column' padding='xsm' role='summary'>
          <Title fontWeight='bold' type='h6'>Description</Title>
          <Text>{description}</Text>
        </Flexbox>
      </Flexbox>
    </Flexbox>
);

Video.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  likeCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  dislikeCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  sharer: PropTypes.string,
};
export default Video;
