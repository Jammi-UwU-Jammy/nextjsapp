// Footer.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <h1 className="home__name">Jam Clark</h1>
            <div className="home__perfil">
                <div className="home__image">
                    <img src="/profile/images/duck.jpg" alt="IMG ERROR" className="home__img"/>
                    <div className="home__shadow"></div>
                    <img src="/profile/icons/noun-flower.svg" className="home__arrow"/>
                    <img src="/profile/icons/noun-flower-4325587.svg" className="home__line"/>
                    <div className="geometric-box"></div>
                </div>
                <div className="home__social">
                <a href="https://www.linkedin.com/" className="home__social-link">
                    <i className="ri-linkedin-box-fill"></i>
                </a>
                <a href="https://github.com/" className="home__social-link">
                    <i className="ri-github-fill"></i>
                </a>
                <a href="#" className="home__social-link">
                    <i className="ri-mail-send-line"></i>
                </a>
                </div>
            </div>
            <div className="home__info">
                <p className="home__description">
                <b>Software Engineer</b>, but I simply call myself a programmer. I&apos;ve recently graduated with a Bachelor&apos;s
                degree in Computer Science, and I&apos;m searching for a career in software engineering.
                </p>
                <a href="#about" className="home__scroll">
                <div className="home__scroll-box">
                    <i className="ri-arrow-down-double-line"></i>
                </div>
                <span className="home__scroll-text">
                    Scroll down
                </span>
                </a>
            </div>
        </div>
    </section>
  );
};

export default Home;
