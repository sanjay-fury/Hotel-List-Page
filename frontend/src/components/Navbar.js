import React from "react";
import { Link } from "react-router-dom";

function Navbar({role,setRole}) {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <span className="nav-logo">W</span>
        <div>
          <h2>WayNest</h2>
          <small>Every Journey Deserves a Great Stay</small>
        </div>
      </Link>

      <div className="nav-right">
        <Link to="/" className="nav-home">Home</Link>
        <label className="role-control">Role
          <select value={role} onChange={event => setRole(event.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;