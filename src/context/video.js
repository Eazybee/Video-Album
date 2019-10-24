import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import videoMockData from './VideoMockData';

const VideoContext = createContext(['']);

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([...videoMockData]);

  return (
    <VideoContext.Provider value={[videos, setVideos]}>
      {children}
    </VideoContext.Provider>
  );
};

VideoProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default VideoContext;
