// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <ul className="footer__links">
          <li>
            <a href="#home" className="footer__link">Home</a>
          </li>
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#contact" className="footer__link">Contact</a>
          </li>
        </ul>
        <span className="footer__copy">
          &#169; All Rights Reserved by <a href="">Jam</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
