import React from 'react';

const Projects: React.FC = () => {
  return (
    <section className="projects section" id="projects">
        <h2 className="section__title-1">
          <span>Projects.</span>
          <img src="/profile/icons/noun-lily-of-the-valley-1677779.svg" alt="" className="projects__title-deco"/>
        </h2>
        <div className="projects__container container grid">

          <article className="projects__card">
            <div className="projects__image">
              <img src="/profile/images/duck.jpg" alt="" className="projects__img"/>
              <a href="#" className="projects__button button">
                <i className="ri-corner-up-left-fill"></i>
              </a>
            </div>

            <div className="projects__content">
              <h3 className="projects__subtitle">Website</h3>
              <h2 className="projects__title">Portfolio website.</h2>
              <p className="projects__description">
                I created this website using two different frameworks: Django
                for the backend (database, data models, APIs) and NodeJs for
                the frontend (UI layout).
              </p>
            </div>
            <div className="projects__buttons">
              <a href="" target="_blank" className="projects__link">
                <i className="ri-github-fill"></i> View
              </a>
              <a href="" target="_blank" className="projects__link">
                <i className="ri-github-line"></i> View
              </a>
            </div>
          </article>

          <article className="projects__card">
            <div className="projects__image">
              <img src="/profile/images/duck.jpg" alt="" className="projects__img"/>
              <a href="#" className="projects__button button">
                <i className="ri-corner-up-left-fill"></i>
              </a>
            </div>

            <div className="projects__content">
              <h3 className="projects__subtitle">Android App</h3>
              <h2 className="projects__title">Jetpack Compose App.</h2>
              <p className="projects__description">
                A simple Android reading app that I&apos;ve made to learn the
                Jetpack Compose. It is a new technology that Google has recently
                released to replace Kotlin Basics.
              </p>
            </div>

            <div className="projects__buttons">
              <a href="" target="_blank" className="projects__link">
                <i className="ri-github-fill"></i> View
              </a>
              <a href="" target="_blank" className="projects__link">
                <i className="ri-github-line"></i> View
              </a>
            </div>
          </article>

          <article className="projects__card">
            <div className="projects__image">
              <img src="/profile/images/duck.jpg" alt="" className="projects__img"/>
              <a href="#" className="projects__button button">
                <i className="ri-corner-up-left-fill"></i>
              </a>
            </div>

            <div className="projects__content">
              <h3 className="projects__subtitle">Desktop App</h3>
              <h2 className="projects__title">AVR Assembly IDE.</h2>
              <p className="projects__description">
                A research project that I worked in a team, under a professor&apos;s guide.
                It is a development environment that supports syntax highlight/code uploading
                to hardware for AVR Assembly.
              </p>
            </div>

            <div className="projects__buttons">
              <a href="" target="_blank" className="projects__link">
                <i className="ri-github-fill"></i> View
              </a>
              <a href="" target="_blank" className="projects__link">
                <i className="ri-github-line"></i> View
              </a>
            </div>
          </article>

        </div>
      </section>
  );
};

export default Projects;