import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, TextField, MenuItem, Container, Box, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Event, CalendarToday, AccessTime, LocationOn, Description, Category } from "@mui/icons-material";
import peachImage from "../peach.jpg"; // Ensure correct path
import logo from "../logo.jpg"; // Ensure correct path
import axios from "axios";

const BackgroundContainer = styled("div")({
  backgroundImage: `url(${peachImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
});

const FormContainer = styled(Container)({
  background: "rgba(253, 252, 230, 0.4)",
  padding: "90px",
  borderRadius: "10px",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
  width: "90%",
  maxWidth: "600px",
  minWidth: "650px",
  textAlign: "center",
  zIndex: 2,
  marginTop: "100px", // Space from navbar
});

const StyledButton = styled(Button)({
  background: "linear-gradient(to right, #893d3d, #958f8f)",
  color: "white",
  fontWeight: "bold",
  padding: "16px",
  transition: "0.3s",
  "&:hover": {
    background: "linear-gradient(to right, #ae4040, black)",
    transform: "scale(1.05)",
  },
});

const Navbar = () => (
  <AppBar position="fixed" sx={{ background: "#89574c" }}>
    <Toolbar>
      <img src={logo} alt="Logo" style={{ height: "90px", marginRight: "20px" }} />
      <Typography variant="h6" sx={{ flexGrow: 1 }}>Create an Event</Typography>
      <Button color="inherit" href="/">Home</Button>
      <Button color="inherit" href="/events">Events</Button>
      <Button color="inherit" href="/profile">Profile</Button>
    </Toolbar>
  </AppBar>
);

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
    category: "",
  });

  const categories = ["Outdoor", "Tech", "Arts & Crafts", "Food & Drinks", "Networking", "Other"];

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/events/create/", eventData);
      console.log("Event Created Successfully:", response.data);
      alert("Event created successfully!");
    } catch (error) {
      console.error("Event creation failed:", error.response?.data || error.message);
      alert("Event creation failed. Please try again.");
    }
  };

  return (
    <BackgroundContainer>
      <Navbar />
      <FormContainer>
        <Typography variant="h4" gutterBottom style={{ fontWeight: "bold", color: "#89574c" }}>
          Host an Event
        </Typography>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField 
            label="Event Name" 
            name="name" 
            value={eventData.name} 
            onChange={handleChange} 
            required 
            fullWidth 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Event style={{ color: "#89574c" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField 
            type="date" 
            name="date" 
            value={eventData.date} 
            onChange={handleChange} 
            required 
            fullWidth 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarToday style={{ color: "#89574c" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField 
            type="time" 
            name="time" 
            value={eventData.time} 
            onChange={handleChange} 
            required 
            fullWidth 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccessTime style={{ color: "#89574c" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField 
            label="Location" 
            name="location" 
            value={eventData.location} 
            onChange={handleChange} 
            required 
            fullWidth 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOn style={{ color: "#89574c" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField 
            label="Description" 
            name="description" 
            value={eventData.description} 
            onChange={handleChange} 
            required 
            fullWidth 
            multiline 
            rows={3} 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Description style={{ color: "#89574c" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField 
            select 
            label="Category" 
            name="category" 
            value={eventData.category} 
            onChange={handleChange} 
            required 
            fullWidth 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Category style={{ color: "#89574c" }} />
                </InputAdornment>
              ),
            }}
          >
            {categories.map((option) => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </TextField>
          <StyledButton variant="contained" type="submit">Create Event</StyledButton>
        </form>
      </FormContainer>
    </BackgroundContainer>
  );
};

export default CreateEvent;
