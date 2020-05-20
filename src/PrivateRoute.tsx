import React, { FC, useContext } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { AuthContext, AuthContextProps } from './Auth';

type Props = { exact: true; path: string; component: FC<RouteComponentProps> };

const PrivateRoute: FC<Props> = ({
  component: RouteComponent,
  exact,
  path,
}) => {
  const { currentUser } = useContext<AuthContextProps>(AuthContext);

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) =>
        currentUser ? (
          /* eslint-disable react/jsx-props-no-spreading */
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
