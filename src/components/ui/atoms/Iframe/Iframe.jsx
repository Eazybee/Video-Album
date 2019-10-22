import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Iframe = ({ src }) => (
  <Iframe.Container
    src={src}
    frameBorder='0'
    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    allowFullScreen
  />
);

Iframe.Container = styled.iframe`
  width: 100%;
  height: 100%;
`;

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Iframe;
