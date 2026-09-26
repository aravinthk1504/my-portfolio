import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Startup", href: "#startup" },
  { name: "Training", href: "#training" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo / Name */}
        <a href="#home" className="logo">
          <span>Aravinth Kanagaraj</span>
        </a>

        {/* Navigation */}
        <nav className={`nav-links ${open ? "active" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <a href="#resume" className="nav-resume">
            Resume
          </a>
        </nav>

        {/* Mobile Menu */}
        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;