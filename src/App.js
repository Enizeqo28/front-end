import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import peachImage from './peach.jpg';  // Import the image here

// Home page component
const Home = () => <h2>Welcome to the home page!</h2>;

const App = () => {
  const appStyles = {
    backgroundImage: `url(${peachImage})`, // Dynamically set the background image
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Router>
      <div className="App" style={appStyles}> {/* Apply dynamic styling here */}
        <h1>Welcome Back to Connectify! We Missed You!</h1>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
