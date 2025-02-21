import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, Box, TextField, InputAdornment } from "@mui/material";
import { Email, Lock } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import peachImage from "../peach.jpg"; // Ensure correct path
import logo from "../logo.jpg"; // Replace with actual logo path

const BackgroundContainer = styled("div")({
  backgroundImage: `url(${peachImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "80px", // Adds space between navbar and login box
  position: "relative",
});

const Overlay = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
});

const FormContainer = styled(Container)({
  background: "rgba(253, 252, 230, 0.4)",
  padding: "60px 30px",
  borderRadius: "10px",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)",
  width: "100%",
  maxWidth: "600px",
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

const Navbar = () => (
  <AppBar position="fixed" sx={{ background: "#89574c" }}>
    <Toolbar>
      <img src={logo} alt="Logo" style={{ height: "90px", marginRight: "10px" }} />
      <Typography variant="h6" sx={{ flexGrow: 1 }}>Connectify, Find Your People Today</Typography>
      <Button color="inherit" href="/">Home</Button>
      <Button color="inherit" href="/about">About Us</Button>
      <Button color="inherit" href="/signup">Register</Button>
    </Toolbar>
  </AppBar>
);

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please fill in both fields");
      return;
    }
    try {
      const response = await fetch("http://localhost:8000/users/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }
      localStorage.setItem("authToken", data.token);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <BackgroundContainer>
      <Navbar />
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
