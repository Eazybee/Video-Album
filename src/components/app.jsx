import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRoute from '<routes>';
import GlobalStyle from '<styles>/global';
import ThemeWrapper from '<styles>/ThemeWrapper';
import { UserProvider } from '../context/context';

const App = () => (

    <ThemeWrapper>
      <GlobalStyle/>
      <UserProvider>
        <Router>
          <BaseRoute />
        </Router>
      </UserProvider>
    </ThemeWrapper>
);

export default App;
