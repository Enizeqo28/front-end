import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
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
  //backgroundColor: "rgba(0, 0, 0, 0.0)", // Dark overlay for better readability
});

const FormContainer = styled(Container)({
  background: "rgba(253, 252, 230, 0.15)",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
  width: "90%",  // Ensures responsiveness
  maxWidth: "600px",  // ⬅️ Increase width explicitly
  minWidth: "450px",  // ⬅️ Ensures a minimum width
  textAlign: "center",
  zIndex: 2,
});


const StyledButton = styled(Button)({
  background: "linear-gradient(to right, #ff7eb3, #ff758c)", // Gradient effect
  color: "white",
  fontWeight: "bold",
  padding: "12px",
  transition: "0.3s",
  "&:hover": {
    background: "linear-gradient(to right, #ff758c, #ff7eb3)",
    transform: "scale(1.05)",
  },
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset":{ borderColor: "#ff758c" },
    "&:hover fieldset": { borderColor: "#ff7eb3" },
    "&.Mui-focused fieldset": { borderColor: "#ff7eb3", borderWidth: "5px" },
  },
});

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
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
        <Typography variant="h4" gutterBottom style={{ fontWeight: "bold", color: "#ff758c" }}>
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
          />
          <StyledButton variant="contained" type="submit">Sign Up</StyledButton>
        </form>
        <Box mt={2}>
          <Typography variant="body2">
            Already have an account? <a href="/login" style={{ color: "#ff758c", fontWeight: "bold" }}>Log in here</a>
          </Typography>
        </Box>
      </FormContainer>
    </BackgroundContainer>
  );
};

export default Signup;
