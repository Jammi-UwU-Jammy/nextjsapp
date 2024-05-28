import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section className="about section" id="about">
        <div className="about__container container grid">
          <h2 className="section__title-1">
            About Me.
          </h2>
          <div className="about__perfil">
            <div className="about__image">
              <Image src="/profile/images/duck.jpg" alt="" width={400} height={500} className="home__img"/>
              <div className="about__shadow"></div>
              <div className="geometric-box"></div>
              <Image src="/profile/icons/noun-lilies-of-the-valley.svg" width={400} height={500} alt="" className="about__line"/>
              <div className="about__box"></div>
            </div>
          </div>

          <div className="about__info">
            <p className="about__description">
              Passionate about<b> building software.</b>
              I&apos;m seeking internships and entry-level positions in software engineering
              to gain hands-on experience and deepen my knowledge of various technologies.
              I am eager to apply my skills to real-world projects, collaborate with
              experienced professionals, and contribute to the success and innovation of the company.
            </p>
            <ul className="about__list">
              <li className="about__item">
                <b>Technical languages & skills:</b> C, C++, Python, Kotlin, Java, JavaScript, HTML/CSS,
                SQL. Django, NodeJs, React. Check out my <a href="#projects">projects</a>.
              </li>
            </ul>
            <div className="about__buttons">
              <a href="#contact" className="button">
                <i className="ri-send-plane-line"></i> Contact me
              </a>
              <a href="" className="button__ghost">
                <i className="ri-linkedin-box-line"></i>
              </a>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;
