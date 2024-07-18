// userContext.js
import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setUsername(username);
  };

  return (
    <UserContext.Provider value={{ username, handleLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
