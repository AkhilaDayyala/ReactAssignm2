
import React, { useRef } from 'react';


const Login = ({ onLogin }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    onLogin({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label id="text">Username: </label>
        <input type="text" ref={usernameRef} class="form-control" for="text" />
      </div>
      <div>
        <label id='pass'>Password: </label>
        <input type="password" ref={passwordRef} for="pass" class="form-control" />
      </div>
      <button type="submit" class="btn btn-warning" style={{width:'500px'}}>Login</button>
      
    </form>
  );
};

export default Login;
