import React from 'react';

export default function AboutPage() {
  return (
    <div className="about_us_container">
      <div className="about_us">
        <div className="section">
          <h1>About Us</h1>
          <p className="intro">
            Welcome to Connectify! Connectify is a user-friendly web application designed to help individuals build meaningful connections based on shared interests. Our platform allows users to create personalized profiles, discover like-minded people through interest-based matching, and connect with others both online and in person. Whether you're looking for new friends, networking opportunities, or local meetups, Connectify makes it easier to find and engage with people who share your passions.
          </p>
        </div>
        <div className="section">
          <h2>Meet the Team</h2>
            <div className="team">
                <div className="team-member">
                    <img src="https://media-yyz1-1.cdn.whatsapp.net/v/t61.24694-24/473396367_1678596543064566_7931647013761059272_n.jpg?ccb=11-4&oh=01_Q5AaIHlw6XbOsbi1tZW96sqy3vthPFNtmTIOptdyzGb3aQ9J&oe=67B14781&_nc_sid=5e03e0&_nc_cat=104" alt="Team Member" />
                    <h3>Shailendra</h3>
                    <p>Frontend</p>
                </div>
                <div className="team-member">
                    <img src="https://media-yyz1-1.cdn.whatsapp.net/v/t61.24694-24/473396411_613803474517207_7371020398974454938_n.jpg?ccb=11-4&oh=01_Q5AaIMt7CF2EmiO5X6FLL9yvk_VQrWrPNgBHDHlIiJzE2OCN&oe=67B121F1&_nc_sid=5e03e0&_nc_cat=106" alt="Team Member" />
                    <h3>Eni Zeqo</h3>
                    <p>Frontend</p>
                </div>
                <div className="team-member">
                    <img src="https://media-yyz1-1.cdn.whatsapp.net/v/t61.24694-24/471647999_1330364294624497_2124070232912017468_n.jpg?ccb=11-4&oh=01_Q5AaIOE_kdK7KB5IB0ZDoU_ljWEj3w7PJPPouLYb-1yJQIQA&oe=67BA8546&_nc_sid=5e03e0&_nc_cat=107" alt="Team Member" />
                    <h3>Zahrah</h3>
                    <p>Frontend</p>
                </div>
                <div className="team-member">
                    <img src="https://media-yyz1-1.cdn.whatsapp.net/v/t61.24694-24/421924633_1087240256101484_8615319572908836399_n.jpg?ccb=11-4&oh=01_Q5AaIBUpgjHqEMl81XeEcYtc4JfchwrP_5OJmhIEIWCBegAJ&oe=67BAB33D&_nc_sid=5e03e0&_nc_cat=106" alt="Team Member" />
                    <h3>Behzad</h3>
                    <p>Backend</p>
                </div>
                <div className="team-member">
                    <img src="https://th.bing.com/th/id/OIP.fs5iov9r7FUsMLsO3OOGQAHaHU?w=190&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Team Member" />
                    <h3>Jiyun Guo</h3>
                    <p>Backend</p>
                </div>
                <div className="team-member">
                    <img src="https://media-yyz1-1.cdn.whatsapp.net/v/t61.24694-24/436887954_3792826047673392_2520651519346363110_n.jpg?ccb=11-4&oh=01_Q5AaIPG5GjrIB0QAHBjn8DTs_KOAXZ8X4J8xHqOex4Amk-zU&oe=67BAA1C4&_nc_sid=5e03e0&_nc_cat=111" alt="Team Member" />
                    <h3>John</h3>
                    <p>SRE</p>
                </div>
            </div>
        </div>
        <div className="section">
          <h2>Contact Us</h2>
          <p>
            We would love to hear from you! If you have any questions, feedback, or just want to say hello, please reach out to us at:
          </p>
          <ul>
            <li>Email: <a href="mailto:support@connectify.com">John@connectify.com</a></li>
            <li>Phone: <a href="tel:+1234567890">(123) 456-7890</a></li>
            <li>Address: 1750 Finch Ave E, North York ON M2J2X5</li>
          </ul>
        </div>
      </div>
    </div>
  );
}