import React from 'react';
import Header from '<organisms>/Header/Header';
import Video from '<organisms>/Video/Video';
import getFlexbox from '<atoms>/Flexbox/Flexbox';
import videoMockData from './VideoMockData';


// const Main = getFlexbox('main');
const Homepage = () => (
  <>
    <Header />
    <main>
      <Video {...videoMockData}/>
      <Video {...videoMockData}/>
      <Video {...videoMockData}/>
    </main>
  </>
);

export default Homepage;
