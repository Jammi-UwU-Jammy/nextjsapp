import React from 'react';

const Qualifications: React.FC = () => {
  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title-2">
          <span>Qualifications</span>
        </h2>
        <div className="qualification__container container grid">
          
          <article className="qualification__card">
            <div className="qualification__border"></div>
            <div className="qualification__content">
              <div className="qualification__icon">
                <div className="qualification__box"></div>
                <i className="ri-building-line"></i>              </div>
              <h2 className="qualification__subtitle">
                Work
              </h2>
              <div className="qualification__description">
                <p className="work__title">Unreal Engine Developer, Intern</p>
                <span className="qualification__place">Untold Legends, Worcester MA</span>
                <span className="qualification__year">02/2024 - present</span>
              </div>
              <div className="qualification__description">
                <p className="work__title">Science College Tutor</p>
                <span className="qualification__place">Bristol Learning Commons, Fall River MA</span>
                <span className="qualification__year">11/2021 - 06/2023</span>
              </div>              
            </div>
          </article>

          <article className="qualification__card">
            <div className="qualification__border"></div>
            <div className="qualification__content">
              <div className="qualification__icon">
                <div className="qualification__box"></div>
                <i className="ri-graduation-cap-line"></i>              </div>
              <h2 className="qualification__subtitle">
                Education
              </h2>
              <div className="qualification__description">
                <p className="education__title">B.S. in Computer Science, GPA 3.96</p>
                <span className="qualification__place">Bridgewater State University, Bridgwater MA</span>
                <span className="qualification__year">08/2022 - 01/2024</span>
              </div>
              <div className="qualification__description">
                <p className="education__title">A.S. in Computer Science, GPA 3.96</p>
                <span className="qualification__place">Bristol Community College, Fall River MA</span>
                <span className="qualification__year">03/2020 - 05/2022</span>
              </div>              
            </div>
          </article>

      </div>
    </section>
  );
};

export default Qualifications;