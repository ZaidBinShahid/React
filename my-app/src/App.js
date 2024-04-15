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

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert(" Dark mode has been enabled", "success");
      document.title = "TextUtils - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been enabled", "success");
      document.title = "TextUtils - LightMode";
    }
  };

  const  router = createBrowserRouter ([
    {
      path: "/about",
      element: <><Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /><About mode={mode}/></>
    },
    {
      path: "/",
      element:  <><Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /><TextForm showAlert={showAlert} heading = "Enter the text to analyze below"  mode={mode}/></>
    }
  ]) 
  return (
    <>
        <RouterProvider router={router} />
        <Alert alert={alert} />
        <div className="container my-3">
        
        </div>
    </>
  );
}

export default App;
