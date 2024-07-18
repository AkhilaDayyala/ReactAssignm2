// LoginForm.js
import React, { useContext, useState } from 'react';
import UserContext from './UserContext';

const LoginForm = () => {
  const { handleLogin } = useContext(UserContext);
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
