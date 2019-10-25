import React from 'react';
import PropTypes from 'prop-types';
import getFlexbox from '<atoms>/Flexbox/Flexbox';
import Rating from '<organisms>/Rating/Rating';
import Text from '<atoms>/Text/Text';
import Title from '<atoms>/Title/Title';
import Iframe from '<atoms>/Iframe/Iframe';

const Flexbox = getFlexbox();

/**
 * @description - Form Component
 *
 * @prop {string} src - src
 * @prop {string} title - title
 * @prop {string} description - description
 * @prop {number} likeCount - likeCount
 * @prop {number} dislikeCount - dislikeCount
 * @prop {string} sharer - sharer
 *
 * @return {component} Form
 */
const Video = ({
  src, title, description, likeCount, dislikeCount, sharer,
}) => (
    <Flexbox
      justifyContent='space-between'
      alignItems='center'
      sidePadding='x'
      hasMarginBottom
      hasMarginTop
      mediaQuery={Video.mediaQuery}
    >
      <Flexbox width='video' height='xl' role='video'>
        <Iframe src={`https://www.youtube.com/embed/${src}`} />
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
          <Text>{description && `${description.slice(0, 400)}...`}</Text>
        </Flexbox>
      </Flexbox>
    </Flexbox>
);

Video.mediaQuery = `
  @media screen and (max-width:846px){
    padding-left: 5em;
    padding-right: 5em;
    margin 0 auto;
  }

  @media screen and (max-width:735px){
    padding-left: 2em;
    padding-right: 2em;

  }

  @media screen and (max-width:619px){
    padding-left: .5em;
    padding-right: .5em;
  }
  @media screen and (max-width:580px){
    justify-content: center;
    padding: 1em 0;
    width: 100%;
  }
`;
Video.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  likeCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  dislikeCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  sharer: PropTypes.string,
};
export default Video;
