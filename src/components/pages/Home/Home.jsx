import React, { useContext } from 'react';
import PageLayout from '../../ui/layout/PageLayout';
import Video from '<organisms>/Video/Video';
import VideoContext from '<context>/video';


const Homepage = () => {
  const [videos] = useContext(VideoContext);
  return (
      <PageLayout>
        {videos.map((videoData, key) => <Video key={key} {...videoData}/>)}
      </PageLayout>
  );
};

export default Homepage;
