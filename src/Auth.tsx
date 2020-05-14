import React, { FC, useEffect, useState, createContext } from 'react';
import app from './base';
import { ContextProps } from './types';
// interface ContextProps {
//   currentUser: firebase.User | null;
// }
export const AuthContext = createContext<ContextProps>({ currentUser: null });

export const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
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
