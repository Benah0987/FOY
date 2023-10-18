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
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  id="membersDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ color: 'black' }}
                >
                  Members
                </a>
                <div className="dropdown-menu" aria-labelledby="membersDropdown">
                  <Link to="/members/men" className="dropdown-item">
                    Men
                  </Link>
                  <Link to="/members/women" className="dropdown-item">
                    Women
                  </Link>
                  <Link to="/members/youth" className="dropdown-item">
                    Youth
                  </Link>
                  <Link to="/members/children" className="dropdown-item">
                    Children
                  </Link>
                </div>
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
