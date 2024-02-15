import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/series">Series</a>
        </li>
        <li>
          <a href="/movies">Movies</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;