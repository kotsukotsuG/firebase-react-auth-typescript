import React, { FC, useEffect, useState, createContext } from 'react';
import app from './base';

export const AuthContext = createContext(null);

export const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>Loading ...</>;
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
