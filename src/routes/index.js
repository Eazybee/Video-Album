
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routeData from './data';

const Routes = () => (
  <Switch>
    <Route>
      {routeData.default.map(({ exact, path, component }, index) => (
        <Route key={index} exact={exact} path={path} component={component} />
      ))}
    </Route>
  </Switch>
);
export default Routes;
