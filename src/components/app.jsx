import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRoute from '<routes>';
import GlobalStyle from '<styles>/global';
import ThemeWrapper from '<styles>/ThemeWrapper';

const App = () => (
  <ThemeWrapper>
    <GlobalStyle/>
    <Router>
      <BaseRoute />
    </Router>
  </ThemeWrapper>
);

export default App;
