import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const Navbar1 = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav " >
          <Link className="nav-link" to="/" style={{ color: 'white' }}>Home</Link>
            <Link className="nav-link active" aria-current="page" to="/CustomerRegistration" style={{ color: 'white' }} >Customer Registration</Link>
            <Link className="nav-link" to="/AdminRegistration" style={{ color: 'white' }}>Admin Registration</Link>
            <Link className="nav-link" to="/AdminLogin" style={{ color: 'white' }}>Admin Login</Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
