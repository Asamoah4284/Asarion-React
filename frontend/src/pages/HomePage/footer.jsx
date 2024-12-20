import React from 'react'

const Footer = () => {
  return <div>
    <footer className="footer" id="footer">

<div className="footer-top section">
  <div className="container md:px-40">

    <div className="footer-brand">

    <a href="#" className=" font-roboto text-transparent text-4xl bg-clip-text bg-gradient-to-r from-red-400 to-blue-500">Asarion</a>
      <p className="footer-text header-paragraph">
         We're passionate about creating meaningful experiences that connect businesses with their audience. Let's stay stylish together.
      </p>

      <form action="#" className="newsletter-form">
        <input 
          type="email" 
          name="email_address" 
          placeholder="Enter your email" 
          required 
          className="email-field"
        />

        <button type="submit" className="form-btn" aria-label="Submit newsletter">
          <ion-icon name="paper-plane" aria-hidden="true"></ion-icon>
        </button>
      </form>

    </div>

    <ul className="footer-list header-paragraph">

      <li>
        <p className="footer-list-title">Our Services</p>
      </li>

      <li>
        <a href="#" className="footer-link">Strategy & Research</a>
      </li>

      <li>
        <a href="#" className="footer-link">Web Development</a>
      </li>

      <li>
        <a href="#" className="footer-link">Web Solution</a>
      </li>

      <li>
        <a href="#" className="footer-link">Digital Marketing</a>
      </li>

      <li>
        <a href="#" className="footer-link">App Design</a>
      </li>

      <li>
        <a href="#" className="footer-link">App Development</a>
      </li>

    </ul>

    <ul className="footer-list header-paragraph">

      <li>
        <p className="footer-list-title">Company</p>
      </li>

      <li>
        <a href="#" className="footer-link">About Us</a>
      </li>

      <li>
        <a href="#" className="footer-link">Our Services</a>
      </li>

      <li>
        <a href="#" className="footer-link">Our Portfolio</a>
      </li>

      <li>
        <a href="#" className="footer-link">Our Blog</a>
      </li>

      <li>
        <a href="#" className="footer-link">Latest News</a>
      </li>

      <li>
        <a href="#" className="footer-link">Contact Us</a>
      </li>

    </ul>

    <ul className="footer-list header-paragraph">

      <li>
        <p className="footer-list-title">Contact Us</p>
      </li>

      <li className="footer-item">
        <ion-icon name="location" aria-hidden="true"></ion-icon>

        <address className="contact-link address header-paragraph">
          university of Cape Coast (UCC)
        </address>
      </li>

      <li className="footer-item">
        <ion-icon name="call" aria-hidden="true"></ion-icon>

        <a href="tel:+7894631546876" className="contact-link">Call Us: +233542343069</a>
      </li>

      <li className="footer-item">
        <ion-icon name="mail" aria-hidden="true"></ion-icon>

        <a href="mailto:richardasamoah284@gmail.com" className="contact-link">Email Us: info@Asarion.com</a>
      </li>

      <li className="footer-item">
        <ul className="social-list">

          <li>
            <a href="#" className="social-link" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link" aria-label="Pinterest">
              <i className="fab fa-pinterest-p"></i>
              <ion-icon name="logo-pinterest"></ion-icon>
            </a>
          </li>

        </ul>
      </li>

    </ul>

  </div>
</div>

<div className="footer-bottom">
  <div className="container header-paragraph">

    <p className="copyright">
      &copy; 2025 Asarion | All Rights Reserved by <a href="#" className="copyright-link">Asarion Inc.</a>
    </p>

    <ul className="footer-bottom-list">

      <li>
        <a href="#" className="footer-bottom-link">Privacy Policy</a>
      </li>

      <li>
        <a href="#" className="footer-bottom-link">Terms of Use</a>
      </li>

    </ul>

  </div>
</div>

</footer>

  </div>;
};

export default Footer;