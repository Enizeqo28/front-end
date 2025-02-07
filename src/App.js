
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Profile from "./components/profile"; 
import peachImage from "./peach.jpg"; // Background image

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
        <h1>Welcome Back to Connectify! We Missed You!</h1>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/profile" element={<Profile />} /> {/* ✅ Added Profile Route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
