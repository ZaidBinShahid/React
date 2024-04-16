// import { useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = (cls) => {  
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert(" Dark mode has been enabled", "success");
      // document.title = "TextUtils - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been enabled", "success");
      // document.title = "TextUtils - LightMode";
    }
  };

  const  router = createBrowserRouter ([
    {
      path: "/about",
      element: <><Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> <Alert alert={alert} />
      <About mode={mode}/></>
    },
    {
      path: "/",
      element:  <><Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading = "Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"  mode={mode}/></>
    }
  ]) 
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
