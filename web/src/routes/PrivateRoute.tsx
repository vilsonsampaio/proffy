import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../services/auth';

const PrivateRoute: React.FC<RouteProps> = (props) => {
  if (isAuthenticated()) return <Route {...props} />;
  else if(!isAuthenticated()) return <Redirect to={'/sessions/sign-in'} />
  else return null;
}

export default PrivateRoute;