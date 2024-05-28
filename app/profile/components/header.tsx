// Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <span className="nav__logo-circle">J</span>
          <span className="nav__logo-name">Jam Clark</span>
        </a>
        <div className="nav__menu" id="nav-menu">
          <span className="nav__title">Menu</span>
          <h3 className="nav__name">Rian</h3>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">Home</a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">About me</a>
            </li>
            <li className="nav__item">
              <a href="#qualification" className="nav__link">Qualification</a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">Projects</a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link nav__link-button">Contact me</a>
            </li>
          </ul>
          {/* <!--Close Button--> */}
          <div className="nav__close" id="nav-close">
            <i className="ri-close-large-line"></i>
          </div>
        </div>

        <div className="nav__buttons">
          {/* <!-- Theme button -->         */}
          <i className="ri-contrast-2-fill change-theme" id="theme-button"></i>
          {/* <!-- Toggle button --> */}
          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-5-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
