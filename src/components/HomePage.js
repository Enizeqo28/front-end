import React from "react";
import { useNavigate } from "react-router-dom";

const dummyMatches = [
  {
    name: "Eni Zeqo",
    age: 25,
    interests: ["Reading", "Traveling", "Music"],
    imgUrl:
      "https://media-yyz1-1.cdn.whatsapp.net/v/t61.24694-24/473396411_613803474517207_7371020398974454938_n.jpg?ccb=11-4&oh=01_Q5AaIMt7CF2EmiO5X6FLL9yvk_VQrWrPNgBHDHlIiJzE2OCN&oe=67B121F1&_nc_sid=5e03e0&_nc_cat=106",
  },
  {
    name: "Shailendra Kushwaha",
    age: 25,
    interests: ["Sports", "Technology", "Movies"],
    imgUrl:
      "https://media-yyz1-1.cdn.whatsapp.net/v/t61.24694-24/473396367_1678596543064566_7931647013761059272_n.jpg?ccb=11-4&oh=01_Q5AaIHlw6XbOsbi1tZW96sqy3vthPFNtmTIOptdyzGb3aQ9J&oe=67B14781&_nc_sid=5e03e0&_nc_cat=104",
  },
];

// Navigation Bar Component – menu items centered
const NavBar = ({ navigate }) => {
  const navItems = [
    { label: "Home", path: "/home" },
    { label: "Chat", path: "/ChatPage" },
    { label: "My Profile", path: "/profile" },
    { label: "About Us", path: "/about" },
    { label: "My Matches", path: "/matches" },
    { label: "Logout", path: "/login" },
  ];
  return (
    <nav style={styles.navbar}>
      <div style={styles.navItems}>
        {navItems.map((item) => (
          <button
            key={item.label}
            style={styles.navButton}
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

// Default export of HomePage component
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.outerContainer}>
      <NavBar navigate={navigate} />
      <div style={styles.contentWrapper}>
        <div style={styles.contentContainer}>
          <div style={styles.homePage}>
            <h1 style={styles.welcomeTitle}>Welcome to Connectify</h1>
            <p style={styles.welcomeText}>
              Find people with similar interests and make meaningful
              connections.
            </p>
            <button style={styles.ctaSignup}>Join Now</button>
            <div style={styles.matchesList}>
              {dummyMatches.map((match, index) => (
                <div key={index} style={styles.matchCard}>
                  <img
                    src={match.imgUrl}
                    alt={match.name}
                    style={styles.matchImg}
                  />
                  <div style={styles.matchInfo}>
                    <h3 style={styles.matchName}>
                      {match.name}, {match.age}
                    </h3>
                    <div style={styles.interests}>
                      {match.interests.map((interest, i) => (
                        <span key={i} style={styles.interestTag}>
                          {interest}
                        </span>
                      ))}
                    </div>
                    <button style={styles.messageBtn}>Send Message</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  // Outer container fully transparent
  outerContainer: {
    background: "transparent",
    fontFamily: "'Roboto', sans-serif",
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "0",
  },
  // Content wrapper: Nude container with peach image background,
  // semi-transparent so the peach texture shows, with an enhanced shadow.
  contentWrapper: {
    background: "rgba(245,236,227,0.4)", // Nude overlay at 40% opacity
    backgroundImage: "url('./peach.jpg')", // Peach image background (ensure the path is correct)
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    borderRadius: "8px",
    maxWidth: "1200px",
    width: "100%",
    padding: "20px",
  },
  contentContainer: {
    display: "grid",
    gap: "20px",
    alignItems: "stretch",
  },
  column: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  navbar: {
    backgroundColor: "#C38282",
    padding: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    width: "100%",
    maxWidth: "1200px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  navItems: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
  },
  homePage: {
    textAlign: "center",
  },
  welcomeTitle: {
    marginBottom: "15px",
    color: "#5D4037",
  },
  welcomeText: {
    marginBottom: "20px",
    color: "#5D4037",
  },
  ctaSignup: {
    background: "#C38282",
    color: "white",
    padding: "10px 20px",
    width: "20%",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    transition: "background 0.3s, transform 0.3s",
  },
  matchesList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  matchCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    width: "200px",
    textAlign: "center",
  },
  matchImg: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  matchInfo: {
    textAlign: "center",
  },
  matchName: {
    margin: "5px 0",
    color: "#5D4037",
  },
  interests: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "5px",
    marginBottom: "10px",
  },
  interestTag: {
    background: "#e9ecef",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "14px",
  },
  messageBtn: {
    background: "#C38282",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    transition: "background 0.3s, transform 0.3s",
  },
  navItems: {
    display: "flex",
    gap: "20px",
  },
  navButton: {
    background: "none",
    border: "none",
    color: "white", // white text for nav links
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "color 0.3s",
    whiteSpace: "nowrap", // Prevents text wrapping
  },
};

export default HomePage;
