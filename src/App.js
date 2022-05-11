import React, { useState, useEffect } from "react";
import "./App.css";
import Loginpage from "./components/Loginpage";
import Weatherpage from "./components/Weatherpage";

function App() {

  const [loginPass, setLoginPass] = useState(null);

  const logInControl = () => {
    localStorage.getItem("keypointToken") ? setLoginPass(true) : setLoginPass(null);
  };

  const logOut = () => {
    localStorage.removeItem("keypointToken");
    setLoginPass(false);
  };

  useEffect(() => {
    logInControl();
  }, [loginPass]);


  return <div className="App">{loginPass ? <Weatherpage logOut={logOut}/> : <Loginpage loginPass={loginPass} setLoginPass={setLoginPass}  />}</div>;
}

export default App;
