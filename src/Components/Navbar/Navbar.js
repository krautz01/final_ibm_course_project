import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    localStorage.removeItem("doctorData");

    // Clear reviewFormData from localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("reviewFormData_")) {
        localStorage.removeItem(key);
      }
    }

    setIsLoggedIn(false);
    setEmail('');
    setName('');
    navigate("/login"); // Redirect to login page instead of reloading the page
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const profileEdit = () => {
    navigate("/profile-update");
  };

  const reportsPage = () => {
    navigate("/reports");
  };

  useEffect(() => {
    const storedName = sessionStorage.getItem("name");
    const storedEmail = sessionStorage.getItem("email");

    if (storedEmail) {
      setIsLoggedIn(true);
      setEmail(storedEmail);
    }

    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">
          StayHealthy <i style={{ color: '#2190FF' }} className="fa fa-user-md"></i>
        </Link>
        <span>.</span>
      </div>
      <div className="nav__icon" onClick={handleClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={click ? 'nav__links active' : 'nav__links'}>
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/search/doctors">Appointments</Link>
        </li>
        <li className="link">
          <Link to="/healthblog">Health Blog</Link>
        </li>
        <li className="link">
          <Link to="/reviews">Reviews</Link>
        </li>
        <li className="link">
          <Link to="/InstantConsultation">Instant Consultation</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li className="link">
              <button className="dropdown-button" onClick={handleDropdown}>
                <p>Welcome, {name}!</p>
              </button>
              {showDropdown && (
                <div className="dropdown-content">
                  <button onClick={profileEdit}>Profile</button>
                  <button onClick={reportsPage}>Reports</button>
                </div>
              )}
            </li>
            <li className="link">
              <button className="btn2" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="link">
              <Link to="/Sign_Up">
                <button className="navBtn">Sign Up</button>
              </Link>
            </li>
            <li className="link">
              <Link to="/login">
                <button className="navBtn">Login</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
