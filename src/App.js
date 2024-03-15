import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#023784";
      showAlert("Dark mode has been enable", "Sucess");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enable", "Sucess");
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" text="About us"/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route excat path="/About" element={<About mode={mode} />} />
            <Route excat path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text Here" mode={mode}></TextForm>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
