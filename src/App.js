import "./styles.css";
import Home from "./components/Config/home";
import React, { useState } from "react";
export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticate, setIsAuthenicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username} Password: ${password}`);
    if (username === "Sandy@1999" && password === "98765") {
      setIsAuthenicate(true);
    }
  };

  return !isAuthenticate ? (
    <div className="app">
      <form onSubmit={handleSubmit} className="form">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png"
          alt=""
          className="twitter-logo"
        />

        <h1 className="h1-tag">Twitter..</h1>
        <div className="form-group">
          <input
            className="in-txt"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="in-pass"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="log-btn">
          Log In
        </button>
      </form>
    </div>
  ) : (
    <div className="App">
      <Home />
    </div>
  );
}
