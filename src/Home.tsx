import React, { FC } from 'react';
import app from './base';

type Props = {};

const handleClick = (): void => {
  app.auth().signOut();
};
const Home: FC<Props> = () => {
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
