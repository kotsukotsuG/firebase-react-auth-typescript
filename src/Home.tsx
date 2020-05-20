import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import app from './base';

const handleClick = (): void => {
  app.auth().signOut();
};
const Home: FC<RouteComponentProps> = () => {
  return (
    <>
      <h1>Home</h1>
      <button type="button" onClick={handleClick}>
        SignOut
      </button>
    </>
  );
};

export default Home;
