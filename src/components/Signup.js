import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AccountCircle, Email, Lock, CalendarToday } from "@mui/icons-material";
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
  background: "rgba(253, 252, 230, 0.45)",
  padding: "90px",
  borderRadius: "10px",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.6)",
  width: "90%",
  maxWidth: "600px",
  minWidth: "500px",
  textAlign: "center",
  zIndex: 2,
});

const StyledButton = styled(Button)({
  background: "linear-gradient(to right, #893d3d, #958f8f)",
  color: "white",
  fontWeight: "bold",
  padding: "16px",
  transition: "0.3s",
  "&:hover": {
    background: "linear-gradient(to right, #ae4040, #9f826d)",
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

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email format";
    if (!formData.age || isNaN(formData.age) || formData.age < 18) {
      newErrors.age = "Sorry, you must be at least 18 years old to create an account";
    }
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("User Signed Up:", formData);
      // Backend API call here
    }
  };

  return (
    <BackgroundContainer>
      <Overlay />
      <FormContainer>
        <Typography variant="h4" gutterBottom style={{ fontWeight: "bold", color: "#89574c" }}>
          Sign Up Today
        </Typography>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <StyledTextField 
            label="Full Name" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            error={!!errors.fullName} 
            helperText={errors.fullName} 
            required fullWidth 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle style={{ color: "red" }} />
                </InputAdornment>
              ),
            }}
          />
          <StyledTextField 
            label="Email" 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            error={!!errors.email} 
            helperText={errors.email} 
            required fullWidth 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email style={{ color: "blue" }} />
                </InputAdornment>
              ),
            }}
          />
          <StyledTextField 
            label="Age" 
            type="number" 
            name="age" 
            value={formData.age} 
            onChange={handleChange} 
            error={!!errors.age} 
            helperText={errors.age} 
            required fullWidth 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarToday style={{ color: "black" }} />
                </InputAdornment>
              ),
            }}
          />
          <StyledTextField 
            label="Password" 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            error={!!errors.password} 
            helperText={errors.password} 
            required fullWidth 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock style={{ color: "green" }} />
                </InputAdornment>
              ),
            }}
          />
          <StyledTextField 
            label="Confirm Password" 
            type="password" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            error={!!errors.confirmPassword} 
            helperText={errors.confirmPassword} 
            required fullWidth 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock style={{ color: "#89574c" }} />
                </InputAdornment>
              ),
            }}
          />
          <StyledButton variant="contained" type="submit">Sign Up</StyledButton>
        </form>
        {/* Ensure the login link is visible */}
        <Box mt={2}>
          <Typography variant="body2">
            Already have an account?{" "}
            <a href="/login" style={{ color: "#89574c", fontWeight: "bold", textDecoration: "none" }}>
              Log in here
            </a>
          </Typography>
        </Box>
      </FormContainer>
    </BackgroundContainer>
  );
};

export default Signup;
