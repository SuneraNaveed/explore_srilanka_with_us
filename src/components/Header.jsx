import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button"; // Import Button component
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Explore Sri Lanka"
              className="logo-image"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about-sri-lanka" className="nav-link">
            About Sri Lanka
          </Link>
          <Link to="/destinations" className="nav-link">
            Destinations
          </Link>
          <Link to="/tour-itineraries" className="nav-link">
            Tour Itineraries
          </Link>
          <Link to="/driver-service" className="nav-link">
            Driver Service
          </Link>
          <Link to="/about-us" className="nav-link">
            About Us
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className="desktop-cta">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              style={{ borderRadius: "50px", padding: "10px 24px" }}
            >
              Plan My Trip
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
