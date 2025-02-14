import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// NavBar component – using the same style as on the Profile page
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

// ChatMatches component – displays the list of match contacts
const ChatMatches = ({ matches, selectedMatch, setSelectedMatch }) => {
  return (
    <div style={styles.matchesContainer}>
      <h2 style={styles.sectionTitle}>Matches</h2>
      {matches.map((match) => (
        <div
          key={match.id}
          style={{
            ...styles.matchCard,
            backgroundColor:
              selectedMatch && selectedMatch.id === match.id ? "#C38282" : "#fff",
            color:
              selectedMatch && selectedMatch.id === match.id ? "white" : "black",
          }}
          onClick={() => setSelectedMatch(match)}
        >
          <img
            src={match.photo}
            alt={match.name}
            style={styles.matchPhotoSmall}
          />
          <div style={styles.matchInfo}>
            <p style={styles.matchName}>{match.name}</p>
            <p style={styles.matchLastMsg}>{match.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// ChatConversation component – displays the conversation with the selected match
const ChatConversation = ({
  match,
  messages,
  sendMessage,
  messageInput,
  setMessageInput,
  toggleEmojiPanel,
  showEmojiPanel,
  addEmoji,
}) => {
  return (
    <div style={styles.conversationContainer}>
      <h2 style={styles.sectionTitle}>
        Chat with {match ? match.name : "Select a Match"}
      </h2>
      <div style={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.messageBubble,
              alignSelf: msg.sender === "me" ? "flex-end" : "flex-start",
              background: msg.sender === "me" ? "#C38282" : "#ddd",
              color: msg.sender === "me" ? "white" : "black",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      {match && (
        <div style={styles.messageInputContainer}>
          <button style={styles.emojiButton} onClick={toggleEmojiPanel}>
            😊
          </button>
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Type your message..."
            style={styles.messageInput}
          />
          <button style={styles.sendButton} onClick={sendMessage}>
            Send
          </button>
        </div>
      )}
      {showEmojiPanel && (
        <div style={styles.emojiPanel}>
          {[
            "😀", "😂", "😍", "😎", "👍", "🙏", "🔥", "💯",
            "😜", "😉", "😁", "😢", "😭", "🤔", "😇", "🥰",
            "🤩", "😡", "😴",
          ].map((emoji) => (
            <span
              key={emoji}
              style={styles.emoji}
              onClick={() => addEmoji(emoji)}
            >
              {emoji}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const ChatPage = () => {
  const navigate = useNavigate();
  // Dummy matches data – later replace with real data from your DB
  const [matches] = useState([
    {
      id: 1,
      name: "Alice",
      photo: "https://via.placeholder.com/100",
      lastMessage: "Hi there!",
    },
    {
      id: 2,
      name: "Bob",
      photo: "https://via.placeholder.com/100",
      lastMessage: "What's up?",
    },
    {
      id: 3,
      name: "Charlie",
      photo: "https://via.placeholder.com/100",
      lastMessage: "Let's catch up!",
    },
  ]);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [showEmojiPanel, setShowEmojiPanel] = useState(false);

  useEffect(() => {
    if (selectedMatch) {
      setMessages([
        { sender: "them", text: `Hello, I'm ${selectedMatch.name}!` },
        { sender: "me", text: "Hi, how are you?" },
      ]);
    } else {
      setMessages([]);
    }
  }, [selectedMatch]);

  const sendMessage = () => {
    if (messageInput.trim() === "") return;
    setMessages([...messages, { sender: "me", text: messageInput }]);
    setMessageInput("");
  };

  const toggleEmojiPanel = () => {
    setShowEmojiPanel(!showEmojiPanel);
  };

  const addEmoji = (emoji) => {
    setMessageInput(messageInput + emoji);
  };

  return (
    <div style={styles.outerContainer}>
      <NavBar navigate={navigate} />
      <div style={styles.contentWrapper}>
        <div style={styles.contentContainer}>
          {/* Left Column: Matches List */}
          <div style={styles.column}>
            <ChatMatches
              matches={matches}
              selectedMatch={selectedMatch}
              setSelectedMatch={setSelectedMatch}
            />
          </div>
          {/* Right Column: Chat Conversation */}
          <div style={styles.column}>
            <ChatConversation
              match={selectedMatch}
              messages={messages}
              sendMessage={sendMessage}
              messageInput={messageInput}
              setMessageInput={setMessageInput}
              toggleEmojiPanel={toggleEmojiPanel}
              showEmojiPanel={showEmojiPanel}
              addEmoji={addEmoji}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    background: "transparent",
    minHeight: "100vh",
    fontFamily: "'Roboto', sans-serif",
  },
  contentWrapper: {
    background: "rgba(245,236,227,0.4)", // Nude overlay at 40% opacity
    backgroundImage: "url('./peach.jpg')", // Peach image background (ensure the path is correct)
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "20px auto",
    padding: "2rem",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    borderRadius: "8px",
    maxWidth: "1200px",
  },
  contentContainer: {
    display: "flex",
    gap: "20px",
    alignItems: "stretch",
  },
  column: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  // NAV BAR styles – exactly the same as Profile page
  navbar: {
    backgroundColor: "#C38282",
    padding: "25px",
    width: "100%",
    height: "80px", // Explicit fixed height (adjust if needed)
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
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
    whiteSpace: "nowrap",
  },
  sectionTitle: {
    marginBottom: "15px",
    color: "#5D4037",
    textAlign: "center",
  },
  // Matches list styles (left column)
  matchesContainer: {
    background: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  matchCard: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  matchPhotoSmall: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "10px",
  },
  matchInfo: {
    display: "flex",
    flexDirection: "column",
  },
  matchName: {
    fontWeight: "bold",
    margin: 0,
  },
  matchLastMsg: {
    fontSize: "14px",
    margin: 0,
    color: "#555",
  },
  // Chat conversation styles
  conversationContainer: {
    background: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    height: "600px",
  },
  messagesContainer: {
    flex: 1,
    overflowY: "auto",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  messageBubble: {
    padding: "10px 15px",
    borderRadius: "20px",
    maxWidth: "70%",
  },
  messageInputContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  messageInput: {
    flex: 1,
    padding: "10px",
    borderRadius: "20px",
    border: "1px solid #ccc",
  },
  sendButton: {
    background: "#C38282",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "20px",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    transition: "background 0.3s",
  },
  emojiButton: {
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
  },
  emojiPanel: {
    display: "flex",
    gap: "10px",
    padding: "10px",
    borderRadius: "8px",
    background: "#f0f0f0",
    marginTop: "10px",
  },
  emoji: {
    cursor: "pointer",
    fontSize: "24px",
  },
};

export default ChatPage;
