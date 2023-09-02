import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FacebookLikeFeed.css';

function FacebookLikeFeed() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate a successful login
    if (username === 'a' && password === 'a') {
      setIsLoggedIn(true);
      // Navigate to the home page after successful login
      navigate('/home');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className={`container ${isLoggedIn ? 'logged-in' : ''}`}>
      <div className="content">
        {!isLoggedIn ? (
          <div className="login-box">
            <h1>Login</h1>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        ) : (
          // Content for the logged-in state
          <div className="feed">
            <h1>Welcome to the Facebook-like Feed!</h1>
            {/* Add your feed content */}
          </div>
        )}
      </div>
    </div>
  );
}

export default FacebookLikeFeed;
