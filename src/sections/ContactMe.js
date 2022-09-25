import styled from "styled-components";

import ContactForm from "../components/ContactForm";

import { AiOutlineMail as Email } from "react-icons/ai";
import { AiFillGithub as Github } from "react-icons/ai";

const ContactMe = () => {
  return (
    <Section>
      <div className="section-one" id="contact-me">
        <div className="start"></div>
        <p className="heading">
          <span className="serif">Contact_</span>
          <span className="mono">ME;</span>
        </p>
        <div className="end"></div>
      </div>
      <div className="section-two">
        <div className="contact">
          <div className="email">
            <p>E-mail:</p>
            <a
              href="mailto:stefanjoseph.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Email /> stefanjoseph.dev@gmail.com
            </a>
          </div>
          <div className="github">
            <p>Github:</p>
            <a
              href="https://github.com/stefan-joseph"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github /> stefan-joseph
            </a>
          </div>
        </div>
        <div className="contact-form">
          <div className="left"></div>
          <div className="center">
            <ContactForm />
          </div>
          <div className="right"></div>
        </div>
      </div>
    </Section>
  );
};

export default ContactMe;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding-top: 15%;
  padding-bottom: 10%;

  .section-one {
    display: flex;
    padding-bottom: 10%;

    .start {
      flex: 2;
    }
    .heading {
      display: flex;
      flex-direction: column;
      flex: 2;

      .serif {
        font-size: var(--serifFontSize);
        font-family: var(--serifFont);
      }
      .mono {
        font-size: var(--monoFontSize);
        padding-left: 70%;
      }
    }
    .end {
      flex: 4;
    }
  }
  .section-two {
    display: flex;
    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
    width: 100%;
    .contact {
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 900px) {
        flex-direction: row;
        justify-content: space-around;
        padding-bottom: 50px;
      }
      @media screen and (max-width: 600px) {
        flex-direction: column;
        padding-left: 10%;
      }
      flex: 1;
      > * {
        padding: 25px 10px;
        white-space: nowrap;
      }
      p {
        font-size: 2rem;
        font-family: var(--serifFont);
      }
      a {
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 5px 10px;
      }
      @media screen and (max-width: 550px) {
        p {
          font-size: 2.4rem;
        }
        a {
          font-size: 1.7rem;
        }
      }
      @media screen and (max-width: 480px) {
        p {
          font-size: 2.7rem;
        }
        a {
          font-size: 1.9rem;
        }
      }
    }
    .contact-form {
      flex: 2;
      display: flex;
      .left {
        flex: 1;
      }
      .center {
        flex: 4;
      }
      .right {
        flex: 1;
      }
      @media screen and (max-width: 1150px) {
        .left {
          flex: 0.5;
        }
        .right {
          flex: 0.5;
        }
      }
      @media screen and (max-width: 600px) {
        .left {
          flex: 0;
        }
        .right {
          flex: 0;
        }
      }
    }
  }
`;
