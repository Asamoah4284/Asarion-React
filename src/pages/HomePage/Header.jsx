import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div>
      <header className="header" data-header>
        <div className="container py-6 md: md:px-48 ">
          <a href="#" className="logo">Asarion</a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="navbar-link hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="navbar-link hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="navbar-link hover:text-blue-600 transition-colors">Services</a>
            <a href="#features" className="navbar-link hover:text-blue-600 transition-colors">Features</a>
            <a href="#" className="navbar-link hover:text-blue-600 transition-colors">Blog</a>
            <a href="#" className="navbar-link hover:text-blue-600 transition-colors">Contact Us</a>
          </nav>

          {/* Mobile Navigation */}
          <nav className="mobile-navbar md:hidden" data-navbar>
            {/* Overlay */}
            <div 
              className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 ${isMenuOpen ? 'block' : 'hidden'}`}
              onClick={toggleMenu}
            ></div>
            
            {/* Mobile Menu Content */}
            <div className={`fixed top-0 right-0 w-64 h-full bg-white z-50 transform transition-all duration-300 ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } shadow-lg`}>
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <a href="#" className="logo">Asarion</a>
                <button className="nav-close-btn p-2" onClick={toggleMenu}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <ul className="py-4">
                <li>
                  <a href="#home" className="block px-4 py-2 hover:bg-gray-50" data-nav-link>Home</a>
                </li>
                <li>
                  <a href="#about" className="block px-4 py-2 hover:bg-gray-50" data-nav-link>About</a>
                </li>
                
                {/* Services Dropdown Mobile */}
                <li className="relative">
                  <button 
                    className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-50"
                    onClick={toggleDropdown}
                  >
                    <span>Services</span>
                    <svg className={`w-4 h-4 transition-transform ${openDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <ul className={`bg-gray-50 py-2 ${openDropdown ? 'block' : 'hidden'}`}>
                    <li>
                      <a href="#web-development" className="block px-8 py-2 hover:bg-gray-100" data-nav-link>Web Development</a>
                    </li>
                    <li>
                      <a href="#app-development" className="block px-8 py-2 hover:bg-gray-100" data-nav-link>App Development</a>
                    </li>
                    <li>
                      <a href="#ui-design" className="block px-8 py-2 hover:bg-gray-100" data-nav-link>UI/UX Design</a>
                    </li>
                    <li>
                      <a href="#digital-marketing" className="block px-8 py-2 hover:bg-gray-100" data-nav-link>Digital Marketing</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#features" className="block px-4 py-2 hover:bg-gray-50" data-nav-link>Features</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50" data-nav-link>Blog</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50" data-nav-link>Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="nav-open-btn md:hidden" 
            onClick={toggleMenu}
          >
            <svg className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <a href="#" className="btn-outline hidden md:block">Let's talk</a>
        </div>
      </header>
    </div>
  );
};

export default Header;