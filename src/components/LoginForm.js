import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Email, Lock } from '@mui/icons-material';
import peachImage from "../peach.jpg"; // Ensure correct path

const BackgroundContainer = styled("div")({
  backgroundImage: `url(${peachImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

const Overlay = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
});

const FormContainer = styled(Container)({
  background: "rgba(253, 252, 230, 0.4)",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.6)",
  width: "90%",
  maxWidth: "600px",
  minWidth: "450px",
  textAlign: "center",
  zIndex: 2,
});

const StyledButton = styled(Button)({
  background: "linear-gradient(to right, #89574c, #ae4040)",
  color: "white",
  fontWeight: "bold",
  padding: "16px",
  transition: "0.3s",
  "&:hover": {
    background: "linear-gradient(to right, #ae4040, black)",
    transform: "scale(1.05)",
  },
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#89574c" },
    "&:hover fieldset": { borderColor: "#89574c" },
    "&.Mui-focused fieldset": { borderColor: "#89574c", borderWidth: "5px" },
  },
});

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please fill in both fields');
      return;
    }

    // Implement login logic here (e.g., API call for authentication)
    console.log("Logged in with", { email, password });
    // After successful login, redirect to the dashboard or main page
    // navigate('/dashboard');  // Uncomment after setting up routes
  };

  return (
    <BackgroundContainer>
      <Overlay />
      <FormContainer>
        <Typography variant="h4" gutterBottom style={{ fontWeight: "bold", color: "#89574c" }}>
          Log in to start making friends! :)
        </Typography>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <StyledTextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            fullWidth
            error={!!errorMessage}
            helperText={errorMessage && "Please fill in both fields"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email style={{ color: "blue" }} />
                </InputAdornment>
              ),
            }}
          />
          <StyledTextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            fullWidth
            error={!!errorMessage}
            helperText={errorMessage && "Please fill in both fields"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock style={{ color: "green" }} />
                </InputAdornment>
              ),
            }}
          />
          <StyledButton variant="contained" type="submit">Login</StyledButton>
        </form>
        <Box mt={2}>
          <Typography variant="body2">
            Don't have an account? <a href="/signup" style={{ color: "#89574c", fontWeight: "bold" }}>Sign up here</a>
          </Typography>
        </Box>
      </FormContainer>
    </BackgroundContainer>
  );
};

export default LoginForm;
