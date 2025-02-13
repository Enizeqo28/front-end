import { Link } from "react-router-dom";

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

export default function HomePage() {
  return (
    <div className="main">
      <div className="navbar">
        <h1 className="logo">Connectify</h1>
        <div className="nav-right">
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/AboutUS">About Us</Link>
          </li>
        </ul>
        </div>
        
      </div>
      <div className="home-page">
        <h1>Welcome to Connectify</h1>
        <p>
          Find people with similar interests and make meaningful connections.
        </p>
    
          <button className="cta-signup">Join Now</button>
       
        <div className="matches-list">
          {dummyMatches.map((match, index) => (
            <div key={index} className="match-card">
              <img src={match.imgUrl} alt={match.name} className="match-img" />
              <div className="match-info">
                <h3>
                  {match.name}, {match.age}
                </h3>
                <div className="interests">
                  {match.interests.map((interest, i) => (
                    <span key={i} className="interest-tag">
                      {interest}
                    </span>
                  ))}
                </div>
                <button className="message-btn">Send Message</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
