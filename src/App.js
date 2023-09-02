import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Header'; // Import the Header component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Include the Header component */}
        <Header />

        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
