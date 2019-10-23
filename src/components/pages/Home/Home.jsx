import React from 'react';
import PageLayout from '../../ui/layout/Layout';
import Video from '<organisms>/Video/Video';
import videoMockData from './VideoMockData';


const Homepage = () => (
  <PageLayout>
    <Video {...videoMockData}/>
    <Video {...videoMockData}/>
    <Video {...videoMockData}/>
  </PageLayout>
);

export default Homepage;
