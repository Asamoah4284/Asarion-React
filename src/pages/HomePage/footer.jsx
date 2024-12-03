import React from 'react'

const Footer = () => {
  return <div>
    <footer className="footer">

<div className="footer-top section">
  <div className="container md:px-40">

    <div className="footer-brand">

      <a href="#" className="logo">Asarion</a>

      <p className="footer-text">
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

        <button type="submit" className="form-btn">
          <ion-icon name="paper-plane" aria-hidden="true"></ion-icon>
        </button>
      </form>

    </div>

    <ul className="footer-list">

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
        <a href="#" className="footer-link">Digital Merketing</a>
      </li>

      <li>
        <a href="#" className="footer-link">App Design</a>
      </li>

      <li>
        <a href="#" className="footer-link">App Development</a>
      </li>

    </ul>

    <ul className="footer-list">

      <li>
        <p className="footer-list-title">Company</p>
      </li>

      <li>
        <a href="#" className="footer-link">About Company</a>
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

    <ul className="footer-list">

      <li>
        <p className="footer-list-title">Contact Us</p>
      </li>

      <li className="footer-item">
        <ion-icon name="location" aria-hidden="true"></ion-icon>

        <address className="contact-link address">
          univercity of Cape Coast (UCC)
        </address>
      </li>

      <li className="footer-item">
        <ion-icon name="call" aria-hidden="true"></ion-icon>

        <a href="tel:+7894631546876" className="contact-link">+233542343069</a>
      </li>

      <li className="footer-item">
        <ion-icon name="mail" aria-hidden="true"></ion-icon>

        <a href="mailto:info@Asarion.com" className="contact-link">info@Asarion.com</a>
      </li>

      <li className="footer-item">
        <ul className="social-list">

          <li>
            <a href="#" className="social-link">
              <i className="fab fa-facebook-f"></i>
              <ion-icon name="logo-facebook" className="hidden"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
              <ion-icon name="logo-twitter" className="hidden"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
              <ion-icon name="logo-instagram" className="hidden"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <i className="fab fa-pinterest-p"></i>
              <ion-icon name="logo-pinterest" className="hidden"></ion-icon>
            </a>
          </li>

        </ul>
      </li>

    </ul>

  </div>
</div>

<div className="footer-bottom">
  <div className="container">

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