import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface CustomRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const CustomRoute: React.FC<CustomRouteProps> = ({ component: Component, isPrivate = false, ...rest }) => {
  const { authenticated, loading } = useAuth();

  if (loading) return <h1>Carregando</h1>

  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          (authenticated === isPrivate) 
            ? <Component />
            : <Redirect to={{ 
              pathname: isPrivate ? '/sessions/sign-in' : '/', 
              state: { from: location } }} 
              />
        )
      }
    />
  )
}

export default CustomRoute;