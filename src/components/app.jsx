import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRoute from '<routes>';
import GlobalStyle from '<styles>/global';
import ThemeWrapper from '<styles>/ThemeWrapper';
import { UserProvider } from '../context/user';
import { VideoProvider } from '../context/video';


const App = () => (
    <ThemeWrapper>
      <GlobalStyle/>
      <UserProvider>
        <VideoProvider>
          <Router>
            <BaseRoute />
          </Router>
        </VideoProvider>
      </UserProvider>
    </ThemeWrapper>
);

export default App;
