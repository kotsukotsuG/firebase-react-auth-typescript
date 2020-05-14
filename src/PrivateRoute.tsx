import React, { FC, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';
import { ContextProps } from './types';

type Props = { exact: true; path: string; component: FC<Props> };

const PrivateRoute: FC<Props> = ({
  component: RouteComponent,
  exact,
  path,
}) => {
  const { currentUser } = useContext<ContextProps>(AuthContext);

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) =>
        currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
