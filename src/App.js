
import './App.css';
import App2 from './Day2-Assignments/App2';
import App4 from './Props/App4'
 import App5 from './UseContext/App5';
 import { UserProvider } from './UseContext/UserContext';



function App() {
  return (
    <div className="App">
    <App2/>
    <App4/>
    <App5/>

  <UserProvider>
    <App5 />
  </UserProvider>
    </div>
  );
}

export default App;
