import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../components/modal';
// Modal
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open and add padding to prevent content shift
    if (!isMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
  };

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

  return (
    <div>
      <header className={`header fixed w-full top-0 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`} data-header>
        <div className={`container transition-all duration-500 ease-in-out ${isScrolled ? 'py-6' : 'py-6'
        } md:px-48 flex justify-between items-center`}>
          <a href="#" className=" font-roboto text-transparent text-4xl bg-clip-text bg-gradient-to-r from-red-400 to-blue-500">Asarion</a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="navbar-link hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="navbar-link hover:text-blue-600 transition-colors">About</a>
            <Link to='pricing'><a href="#Pricing" className="navbar-link hover:text-blue-600 transition-colors">Pricing</a></Link>
            <Link to='/team'><a href="#" className="navbar-link hover:text-blue-600 transition-colors">Team</a></Link>
            <a href="#footer" className="navbar-link hover:text-blue-600 transition-colors">Contact Us</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="nav-open-btn block md:hidden" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Mobile Navigation */}
          <nav className={`fixed inset-0 md:hidden transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}>
            {/* Overlay */}
            <div 
              className={`fixed inset-0 bg-gray-800 transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-50' : 'opacity-0'
              }`}
              onClick={toggleMenu}
            ></div>
            
            {/* Mobile Menu Content */}
            <div className={`fixed top-0 left-0 w-1/2 h-full bg-white transform transition-all duration-300 ease-in-out z-50 ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } shadow-lg`}>
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <a href="#" className="logo font-roboto text-blue-800">Asarion</a>
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
                
                {/* Pricing Dropdown Mobile */}
                <li className="relative">
                  <button 
                    className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-50"
                    onClick={toggleDropdown}
                  >
                    <span>Pricing</span>
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
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50" data-nav-link>Team</a>
                </li>
                <li>
                  <a href="#footer-contact" className="block px-4 py-2 hover:bg-gray-50" data-nav-link>Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>

          <a href="#" className="btn-outline hidden md:block" onClick={handleOpenModal}>Let's talk</a>

          {/* Contact Modal */}
          {isModalOpen && (
     <Modal isOpen={isModalOpen} onClose={handleCloseModal}/>
      )}
        </div>
      </header>
    </div>
  );
};

export default Header;