// Welcome.js
import React, { useContext } from 'react';
import UserContext from './UserContext';

const Welcome = () => {
  const { username } = useContext(UserContext);

  return (
    <div>
      {/* {username ? (
        <h2>Welcome, {username}!</h2>
      ) : (
        <h2></h2>
      )} */}
      <h2>Display username by using Props</h2>
       <h3>Welcome,  { username}!</h3>
    </div>
  );
};

export default Welcome;
