import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/modal";
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open and add padding to prevent content shift
    if (!isMenuOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
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
      <header
        className={`header fixed w-full top-0 transition-all duration-500 ease-in-out ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
        data-header
      >
        <div
          className={`container transition-all pt-10 duration-500 ease-in-out ${
            isScrolled ? "md:py-1 py-6" : ""
          } md:px-60 flex justify-center items-center`}
        >
          <a href="#" className="">

            <img src="images/as.png" alt="" className="w-[50px] md:w-[60px]"/>
            {/* <img src="/images/logo.svg" alt="" /> */}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 justify-center">
            <Link
              to="/"
              className="navbar-link hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <a
              href="#about"
              className="navbar-link hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="navbar-link hover:text-blue-600 transition-colors"
            >
              Services
            </a>
            <Link
              to="/blog"
              className="navbar-link hover:text-blue-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/team"
              className="navbar-link hover:text-blue-600 transition-colors"
            >
              Team
            </Link>
            <a
              href="#footer"
              className="navbar-link hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="nav-open-btn block md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Mobile Navigation */}
          <nav
            className={`fixed inset-0 md:hidden transition-opacity duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Overlay */}
            <div
              className={`fixed inset-0 bg-gray-800 transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? "opacity-50" : "opacity-0"
              }`}
              onClick={toggleMenu}
              aria-label="Close menu overlay"
            ></div>

            {/* Mobile Menu Content */}
            <div
              className={`fixed top-0 right-0 w-3/4 h-full bg-white transform transition-all duration-300 ease-in-out z-50 ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              } shadow-lg`}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <button
                  className="nav-close-btn p-2"
                  onClick={toggleMenu}
                  aria-label="Close the menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <ul className="p-12 flex flex-col gap-8">
                <li className="border-b border-gray-300">
                  <Link
                    to="/"
                    className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded"
                    data-nav-link
                  >
                    Home
                  </Link>
                </li>
                <li className="border-b border-gray-300">
                  <a
                    href="#about"
                    className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded"
                    data-nav-link
                  >
                    About
                  </a>
                </li>
                <li className="border-b border-gray-300">
                <Link
              to="/blog"
              className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 roundednavbar-link hover:text-blue-600 transition-colors"
            >
              Blog
            </Link>
            </li>

                {/* Pricing Dropdown Mobile */}
                <li className="relative border-b border-gray-300">
                <a
                    href="#about"
                    className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded"
                    data-nav-link
                  >Services 
                  <button
                    className="w-full flex items-center justify-between px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded"
                    onClick={toggleDropdown}
                    aria-label="Toggle services dropdown"
                  > 
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        openDropdown ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                    </a>
                  <ul
                    className={`bg-gray-50 py-2 ${
                      openDropdown ? "block" : "hidden"
                    }`}
                  > 
                    <li className="border-b border-gray-200">
                      <a
                        href="#web-development"
                        className="block px-8 py-2 hover:bg-blue-100 transition-colors duration-300 rounded"
                        data-nav-link
                      >
                        Web Development
                      </a>
                    </li>
                    <li className="border-b border-gray-200">
                      <a
                        href="#app-development"
                        className="block px-8 py-2 hover:bg-blue-100 transition-colors duration-300 rounded"
                        data-nav-link
                      >
                        App Development
                      </a>
                    </li>
                    <li className="border-b border-gray-200">
                      <a
                        href="#ui-design"
                        className="block px-8 py-2 hover:bg-blue-100 transition-colors duration-300 rounded"
                        data-nav-link
                      >
                        UI/UX Design
                      </a>
                    </li>
                    <li className="border-b border-gray-200">
                      <a
                        href="#digital-marketing"
                        className="block px-8 py-2 hover:bg-blue-100 transition-colors duration-300 rounded"
                        data-nav-link
                      >
                        Digital Marketing
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="border-b border-gray-300">
                  <Link to="/team">
                    <a
                      className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded"
                      data-nav-link
                    >
                      Team
                    </a>
                  </Link>
                </li>
                <li className="border-b border-gray-300">
                  <a
                    href="#footer"
                    className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded"
                    data-nav-link
                  >
                    Contact Us
                  </a>
                </li>
                <button
                  onClick={handleOpenModal}
                  className="inline-flex items-center w-[300px]  mt-10 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  aria-label="Open contact modal"
                >
                  Let's Talk
                </button>
              </ul>
            </div>
          </nav>

          <a href="#" className="btn-outline" onClick={handleOpenModal}>
            Let's talk
          </a>

          {/* Contact Modal */}
          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
