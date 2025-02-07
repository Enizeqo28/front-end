import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("Eni Zeqo");
  const [bio, setBio] = useState("I am new in Canada and I want to make more friends that have the same interests as me");
  const [age, setAge] = useState(25); // Default age
  const [isEditing, setIsEditing] = useState(false);
  const [profilePic, setProfilePic] = useState("https://via.placeholder.com/200");

  // Handle profile picture upload
  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  // Save profile changes
  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title_one}>Welcome to My Profile</h1>

      <div style={styles.profileCard}>
        {/* Profile Picture Upload */}
        <div style={styles.profilePicContainer}>
          <img src={profilePic} alt="Profile" style={styles.profilePic} />
          <div style={styles.uploadButtonWrapper}>
            <label htmlFor="profile-upload" style={styles.customUploadButton}>
              Change Photo
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              style={styles.fileInput}
            />
          </div>
        </div>

        <h2 style={styles.header}>My Profile</h2>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              placeholder="Enter your name"
            />
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              style={styles.input}
              placeholder="Enter your age"
            />
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              style={styles.textarea}
              placeholder="Enter a short bio"
            />
            <button onClick={handleSave} style={styles.button}>
              Save Profile
            </button>
          </div>
        ) : (
          <div>
            <p><strong style={styles.bold}>Name:</strong> {name}</p>
            <p><strong style={styles.bold}>Age:</strong> {age}</p>
            <p><strong style={styles.bold}>Bio:</strong> {bio}</p>
            <button onClick={() => setIsEditing(true)} style={styles.button}>
              Edit Profile
            </button>
          </div>
        )}
      </div>

      {/* Categories Section */}
      <div style={styles.categoriesSection}>
        <h3 style={styles.header}>Your Categories</h3>
        <ul style={styles.categoryList}>
          {["Tech", "Volleyball", "Books"].map((category, index) => (
            <li key={index} style={styles.categoryItem}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Styling
const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    background: "#AC9D8E", // Updated background color
    minHeight: "100vh",
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    fontSize: "28px",
    color: "#836853", // Updated bold color
    fontWeight: "bold",
  },
  title_one: {
    fontSize: "28px",
    color: "#FFFFFF", // Updated bold color
    fontWeight: "bold",
  },
  profileCard: {
    border: "1px solid #ddd",
    padding: "2rem",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    width: "500px",
    margin: "auto",
    textAlign: "center",
  },
  profilePicContainer: {
    marginBottom: "1.5rem",
  },
  profilePic: {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    border: "3px solid #836853",
    borderRadius: "10px",
  },
  uploadButtonWrapper: {
    marginTop: "10px",
  },
  customUploadButton: {
    display: "inline-block",
    padding: "10px 15px",
    backgroundColor: "#836853",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
  },
  fileInput: {
    display: "none",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#836853",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
  },
  categoriesSection: {
    marginTop: "2rem",
    padding: "2rem",
    backgroundColor: "#fff",
    borderRadius: "10px",
    width: "500px",
    margin: "2rem auto",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  categoryList: {
    listStyleType: "none",
    padding: 0,
  },
  categoryItem: {
    backgroundColor: "#836853",
    color: "white",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "5px",
    fontSize: "16px",
  },
  header: {
    color: "#836853",
    fontWeight: "bold",
  },
};

export default Profile;
