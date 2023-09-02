import React from 'react';
import Header from './Header'; // Import the Header component
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Include the Header component */}
      <Header />

      <div className="main-content">
        <h1>Welcome to the Home Page!</h1>
        {/* Add your content here */}
      </div>
    </div>
  );
}

export default Home;
