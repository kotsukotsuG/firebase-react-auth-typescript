import React, { FC, useCallback } from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps, Link } from 'react-router-dom';

import app from './base';

const SignUp: FC<RouteComponentProps> = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history],
  );

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <Link to="login">Login画面へ</Link>
    </div>
  );
};

export default withRouter(SignUp);
