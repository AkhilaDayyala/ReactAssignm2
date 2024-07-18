
import React, { useState } from 'react';
import Login from './Login';
import Welcome from './Welcome';

const Form5 = () => {
  const [userDetails, setUserDetails] = useState(null);

  const handleLogin = (details) => {
    setUserDetails(details);
  };

  return (
    <div>
      <h5 style={{color:'blue'}}>Display the login Details in  Welcome Component</h5>
      {userDetails ? (
        <Welcome username={userDetails.username} password={userDetails.password} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Form5;
