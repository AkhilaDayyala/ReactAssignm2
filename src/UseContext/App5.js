// App.js or index.js
import '../App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './UserContext';
import LoginForm from './LoginForm.js';
import Welcome from './Welcome';

const App5 = () => {
  return (
    <h2>
        <h5 style={{color:'blue'}}>Display username by using UseContext</h5>
    <UserProvider>
      <div>
        <LoginForm />
        <Welcome />
      </div>
    </UserProvider>
    </h2>
  );
};


export default App5;
