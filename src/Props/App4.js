import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Welcome from './Welcome';

function App4() {
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setUsername(user);
  };

  return (
    <div className="App">
      <h6 style={{color:'blue'}}>Display userdetails by using props</h6>
      {username ? (
        <Welcome username={username} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App4;
