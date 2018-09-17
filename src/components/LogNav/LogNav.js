import React from 'react';
import { Link } from 'react-router-dom';

const LogNav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/login">
            Log In
          </Link>
        </li>
        <li>
          <Link to="/register">
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default LogNav;