import styled from "styled-components";
import Mountains from "../assets/images/mountains.jpeg";
import DarkModeToggle from "../components/DarkModeToggle";
import Availability from "../components/Availability";

const Profile = ({ darkMode, onDarkMode }) => {
  return (
    <Section>
      <div className="section-one" id="profile">
        <div className="start">
          <Availability />
        </div>
        <div className="middle">
          <p className="header-one">
            <span className="serif hello">Hello_</span>
            <span className="world">WORLD:</span>
            <span className="titles">
              Web Developer
              <br />
              UI Designer
              <br />
              Freelance
            </span>
          </p>
        </div>
        <div className="end">
          <div className="toggle-switch">
            <DarkModeToggle darkMode={darkMode} onDarkMode={onDarkMode} />{" "}
          </div>
        </div>
      </div>
      <div className="section-two">
        <div className="left">
          <div className="toggle-switch">
            <DarkModeToggle darkMode={darkMode} onDarkMode={onDarkMode} />{" "}
          </div>
        </div>
        <p>
          I am a full-stack web developer and UI designer based in Canada. In
          publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </p>
      </div>
      <div className="section-three">
        <p className="header-two">
          <span className="title-one serif">I_am_</span>
          <span className="title-two">STEFAN;</span>
        </p>
        <div className="availability">
          <Availability />
        </div>
        <div className="image">
          <img src={Mountains} alt="profile" />
        </div>
      </div>
    </Section>
  );
};

export default Profile;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 60px;
  padding-bottom: 200px;
  @media screen and (max-width: 600px) {
    padding-bottom: 300px;
  }

  > * {
    padding: 10px 0px;
  }

  .section-one {
    display: flex;

    .start {
      flex: 1.5;
      display: flex;
      align-items: flex-end;
      justify-content: center;

      > * {
        @media screen and (max-width: 600px) {
          display: none;
        }
      }
    }
    .middle {
      flex: 3;
      .header-one {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        position: relative;

        .hello {
          font-size: 6rem;
        }
        .world {
          padding-left: 80px;
          font-size: 8rem;
          letter-spacing: 0.4rem;
          @media screen and (max-width: 400px) {
            padding-left: 60px;
          }
          @media screen and (max-width: 360px) {
            padding-left: 40px;
          }
        }
        .titles {
          font-size: 1rem;
          position: absolute;
          left: 450px;
          top: 30px;
          white-space: nowrap;
          text-align: right;

          @media screen and (max-width: 900px) {
            left: auto;
            right: 30px;
          }

          @media screen and (max-width: 800px) {
            left: auto;
            right: 30px;
          }
          @media screen and (max-width: 680px) {
            top: 20px;
          }
          @media screen and (max-width: 550px) {
            font-size: 1.2rem;
          }
          @media screen and (max-width: 480px) {
            font-size: 1.3rem;
            top: 12px;
          }
        }
      }
    }
    .end {
      flex: 1;
      display: flex;
      justify-content: flex-end;

      .toggle-switch {
        display: flex;
        align-items: center;
      }
    }
    @media screen and (max-width: 1250px) {
      .end {
        flex: 1.5;
      }
    }
    @media screen and (max-width: 1100px) {
      .end {
        flex: 1;
        .toggle-switch {
          display: none;
        }
      }
    }
  }

  .section-two {
    display: flex;
    .left {
      flex: 1;
      @media screen and (max-width: 600px) {
        flex: 0;
      }
      .toggle-switch {
        display: none;
        align-items: center;
        height: 100%;
        @media screen and (max-width: 1100px) and (min-width: 601px) {
          display: flex;
        }
      }
    }
    p {
      flex: 2;
      text-transform: uppercase;
      font-size: 1.3rem;
      @media screen and (max-width: 550px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 480px) {
        font-size: 1.7rem;
      }
    }
  }

  .section-three {
    display: flex;
    position: relative;
    p {
      flex: 2;
      display: flex;
      flex-direction: column;
      padding-right: 15px;
      z-index: 2;
      white-space: nowrap;
      .title-one {
        font-size: 5.5rem;
      }
      .title-two {
        font-size: 7rem;
        letter-spacing: 0.4rem;
      }
      @media screen and (max-width: 480px) {
        .title-one {
          padding-left: 190px;
        }
        .title-two {
          padding-left: 40px;
        }
      }
      @media screen and (max-width: 360px) {
        .title-one {
          padding-left: 170px;
        }
        .title-two {
          padding-left: 30px;
        }
      }
    }
    .availability {
      flex: 0;
      @media screen and (min-width: 601px) {
        display: none;
      }

      @media screen and (max-width: 480px) {
        position: absolute;
        top: 150px;
        right: 0px;
      }
      @media screen and (max-width: 350px) {
        top: 140px;
      }
    }
    .image {
      flex: 3;
      width: 100%;
      @media screen and (max-width: 1100px) {
        position: absolute;
        right: 0px;
        width: 60%;
      }

      @media screen and (max-width: 600px) {
        position: absolute;
        top: 145px;
        width: 100%;
      }
      @media screen and (max-width: 550px) {
        top: 126px;
      }
      @media screen and (max-width: 480px) {
        top: 110px;
      }
      @media screen and (max-width: 350px) {
        top: 100px;
      }
      img {
        object-fit: cover;
        width: 100%;
        height: 240px;
        filter: var(--photoSettings);
        @media screen and (max-width: 900px) {
          height: 210px;
        }
        @media screen and (max-width: 680px) {
          height: 180px;
        }
        @media screen and (max-width: 600px) {
          height: 150px;
        }
        @media screen and (max-width: 480px) {
          height: 140px;
        }
      }
    }
  }

  .serif {
    font-family: var(--serifFont);
  }
`;
