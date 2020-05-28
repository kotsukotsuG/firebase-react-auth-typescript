import React, { FC, useCallback, useContext } from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps, Link } from 'react-router-dom';
import app from './base';
import { AuthContext } from './Auth';

// type Props = { exact: true; path: string; component: FC<object>; history: H.History};
interface Props extends RouteComponentProps<{}> {
  exact: true;
  path: string;
  component: FC<object>;
}

const Login: FC<Props> = ({ exact, path, component, history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history],
  );

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
      <Link to="signup">Signup画面へ</Link>
    </div>
  );
};

export default withRouter(Login);
