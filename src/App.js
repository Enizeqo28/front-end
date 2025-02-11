
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Profile from "./components/profile";
import HomePage from "./components/HomePage"; 
import peachImage from "./peach.jpg"; // Background image
import Signup from "./components/Signup";
const App = () => {
  const appStyles = {
    backgroundImage: `url(${peachImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Router>
      <div className="App" style={appStyles}>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/Home" element={<HomePage />} /> 
          <Route path="/profile" element={<Profile />} /> {/* ✅ Added Profile Route */}
	  <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
