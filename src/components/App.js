
import React,{useState} from "react";
import Login from './Login.js'
import './../styles/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {/* Do not remove the main div */}
    </div>
  );
}

export default App
