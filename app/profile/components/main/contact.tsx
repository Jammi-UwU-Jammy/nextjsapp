import React from 'react';
import Image from 'next/image';


const Home: React.FC = () => {
  return (
    <section className="contact section" id="contact">
        <div className="contact__container grid">
          <div className="contact__data">
            <h2 className="section__title-2">
              <span>Contact Me.</span>
            </h2>
            <p className="contact__description-1">
              You can contact me through this form. I always read my emails.
            </p>
            <p className="contact__description-2">
              Send me a <b>message</b>. I will reply shortly. Else, you can
              message me via LinkedIn.
            </p>
            <div className="geometric-box"></div>
          </div>
          <div className="contact__mail">
            <h2 className="contact__title">
              Send me a message.
            </h2>
            <form action="" className="contact__form" id="contact-form">
              <div className="contact__group">

                <div className="contact__box">
                  <input type="text" name="user_name" className="contact__input" id="name" required placeholder="First name"/>
                  <label htmlFor="name" className="contact__label">First Name</label>
                </div>

                <div className="contact__box">
                  <input type="email" name="user_email" className="contact__input" id="email" required placeholder="Email"/>
                  <label htmlFor="email" className="contact__label">Email address</label>
                </div>
              </div>

              <div className="contact__box">
                <input type="text" name="user_subject" className="contact__input" id="name" required placeholder="Subject"/>
                <label htmlFor="subject" className="contact__label">Subject</label>
              </div>
              <div className="contact__box contact__area">
                <textarea name="user_message" id="message" className="contact__input" required placeholder="Message"></textarea>
                <label htmlFor="message" className="contact__label">Message</label>
              </div>

              <p className="contact__message" id="contact-message"></p>

              <button className="contact__button button">
                <i className="ri-send-plane-fill"></i>Send message.
              </button>

            </form>
          </div>
          <div className="contact__social">
            <Image src="" alt="" className="contact__social-arrow"/>
            <div className="contact__social-data">
              <div>
                <p className="contact__social-description-1">
                  You can also find me on social networks!
                </p>
                {/* <!-- <p className="contact__social-description-2"> */}
                  Write me on my social networks
                {/* </p> --> */}
                <Image src="/profile/icons/noun-lily-of-the-valley-900860.svg" width={200} height={200} alt="" className="contact__line"/>
              </div>

              <div className="contact__social-links">
                <a href="" className="contact__social-link">
                  <i className="ri-linkedin-box-fill"></i>
                </a>
                <a href="" className="contact__social-link">
                  <i className="ri-instagram-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Home;