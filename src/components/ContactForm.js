import styled from "styled-components";

import { GrSend as Send } from "react-icons/gr";
const ContactForm = () => {
  return (
    <Section>
      <article>
        <p>Get in touch!</p>
        <form action="https://formspree.io/f/xknyrklv" method="POST">
          <input type="text" name="name" placeholder="NAME" />
          <input type="email" name="email" placeholder="EMAIL" />
          <textarea name="message" rows="8" placeholder="MESSAGE"></textarea>

          <button type="submit">
            SEND
            {/* SEND <Send /> */}
          </button>
        </form>
      </article>
    </Section>
  );
};

export default ContactForm;

const Section = styled.section`
  article {
    display: flex;
    flex-direction: column;
    p {
      text-align: center;
      font-size: 2rem;
      font-family: var(--serifFont);
      padding-bottom: 15px;
      @media screen and (max-width: 900px) {
        font-size: 3rem;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      > * {
        margin: 10px;
        padding: 5px;
        @media screen and (max-width: 680px) {
          font-size: 1.3rem;
        }
        @media screen and (max-width: 480px) {
          font-size: 1.5rem;
        }
      }
      button {
        /* border: none; */
        /* width: fit-content; */
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--backgroundColor);
        background-color: var(--textColor);
        @media screen and (max-width: 600px) {
          font-size: 1.5rem;
        }
        @media screen and (max-width: 480px) {
          font-size: 1.7rem;
        }
      }
    }
  }
`;
