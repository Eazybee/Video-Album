
import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import UserContext from '<context>/user';
import routeData from './data';

const Routes = () => {
  const [user] = useContext(UserContext);
  return (
    <Switch>
    <Route>
      {routeData.default.map(({
        exact, path, Component, isProtected,
      }, index) => {
        if (isProtected) {
          return <Route key={index} exact={exact} path={path} render={props => (
            user ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />
          )} />;
        }
        return <Route key={index} exact={exact} path={path} component={Component} />;
      })}
    </Route>
  </Switch>
  );
};
export default Routes;
