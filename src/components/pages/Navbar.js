import React from 'react';
import taa from '../images/taa.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" style={{ color: 'blue', fontWeight: 'bold' }}>
            {/* You can add your image here */}
            <img src={taa} alt="Family of Yahweh Logo" style={{ marginRight: '10px' }} />
            Family of Yahweh
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-4 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ color: 'black' }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/events" className="nav-link" style={{ color: 'black' }}>
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/members" className="nav-link" style={{ color: 'black' }}>
                  Members
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="nav-link" style={{ color: 'black' }}>
                  Faq
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/donations" className="nav-link" style={{ color: 'black' }}>
                  Donations
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" style={{ color: 'black' }}>
                  About US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
