import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-button">Search</button>
      </div>
    </header>
  );
}

export default Header;
