
import React from 'react';

const Welcome = ({ username, password }) => {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>Your password is: {password}</p>
    </div>
  );
};

export default Welcome;
