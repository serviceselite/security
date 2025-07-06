import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home, User, Mail, DollarSign, IndianRupee, BookHeart, Shield, UserCog } from "lucide-react"; // Import UserCog icon
import "./Navbar.css";

const Navbar = () => {
  const role = localStorage.getItem('role'); // Get user role
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${visible ? "navbar-visible" : "navbar-hidden"}`}>
      <div className="navbar-logo">
        <img
          src="/images/logo.jpeg"
          alt="Logo"
          className="navbar-logo-img"
        />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/security">
            <Shield size={18} style={{ verticalAlign: "middle", marginRight: 6 }} />
            Security
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

