import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import app from './base';

const handleClick = (): void => {
  app.auth().signOut();
};

const Home: FC<RouteComponentProps> = (props) => {
  return (
    <>
      <h1>Home</h1>
      <div />
      <button type="button" onClick={handleClick}>
        SignOut
      </button>
    </>
  );
};

export default Home;
