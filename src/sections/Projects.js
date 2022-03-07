import styled from "styled-components";
import projects from "../utils/projects";

const Projects = () => {
  return (
    <Section>
      <div className="section-one" id="projects">
        <div className="start"></div>
        <p className="heading">
          <span className="serif">Selected_</span>
          <span className="mono">PROJECTS;</span>
        </p>
        <div className="end"></div>
      </div>
      <div className="section-two">
        {projects.map(({ id, title, text, path, img }, index, array) => {
          return (
            <>
              <Project flex={id} key={id}>
                <div className="left"></div>

                <div className="center">
                  <div className="image">
                    <a href={path} target="_blank" rel="noopener noreferrer">
                      <div className="header">
                        <div className="left"></div>
                        <div className="middle">
                          <div className="absolute">
                            <p className="number">(0{id})</p>
                            <div className="title">
                              <p className="title-one">{title.one}</p>
                              <p className="title-two"> {title.two}</p>
                            </div>
                          </div>
                        </div>
                        <div className="right"></div>
                      </div>
                      <img src={img} alt="project" />
                      <div className="text">
                        <div className="left"></div>
                        <div className="middle">
                          <div className="absolute">
                            <p className="description">{text}</p>
                          </div>
                        </div>
                        <div className="right"></div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="right"></div>
              </Project>
              {id !== array.length && <div className="breaker">⤜⤛</div>}
            </>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 11% 0%;
  @media screen and (max-width: 680px) {
    padding-top: 120px;
  }
  @media screen and (max-width: 480px) {
    padding-top: 80px;
  }

  .section-one {
    display: flex;
    padding-bottom: 130px;
    @media screen and (max-width: 680px) {
      padding-bottom: 80px;
    }
    @media screen and (max-width: 480px) {
      padding-bottom: 40px;
    }

    .start {
      flex: 10;
    }
    .heading {
      display: flex;
      flex-direction: column;
      flex: 5;
      text-align: right;
      .serif {
        font-size: var(--serifFontSize);
        font-family: var(--serifFont);
      }
      .mono {
        font-size: var(--monoFontSize);
      }
    }
    .end {
      flex: 2;
    }
  }
  .breaker {
    font-size: 300%;
    text-align: center;
  }
`;

const Project = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.flex % 2 === 0 ? "row" : "row-reverse")};
  padding: 145px 0px;
  @media screen and (max-width: 1200px) {
    padding: 120px 0px 150px 0px;
  }
  @media screen and (max-width: 550px) {
    padding: 90px 0px 130px 0px;
  }

  .left {
    flex: 1;
  }

  .center {
    display: flex;
    flex-direction: column;
    flex: 10;

    .image {
      display: flex;
      flex-direction: ${(props) =>
        props.flex % 2 === 0 ? "row-reverse" : "row"};

      a {
        width: 90%;
        @media screen and (max-width: 1000px) {
          width: 100%;
        }

        .header {
          display: flex;
          .left {
            flex: 1;
          }
          .middle {
            position: relative;
            flex: 10;
            .absolute {
              display: flex;
              position: absolute;
              bottom: -45px;
              z-index: 2;
              @media screen and (max-width: 900px) {
                bottom: -39px;
              }
              @media screen and (max-width: 800px) {
                bottom: -35px;
              }
              @media screen and (max-width: 680px) {
                bottom: -30px;
              }
              @media screen and (max-width: 550px) {
                bottom: -26px;
              }
              @media screen and (max-width: 480px) {
                bottom: -22px;
              }
              @media screen and (max-width: 350px) {
                bottom: -20px;
              }
              .number {
                align-self: flex-start;
                font-size: 4rem;
                font-stretch: semi-condensed;
                font-family: var(--serifFont);
                padding-right: 10px;
              }
              .title-one {
                font-size: 3rem;
                font-family: var(--serifFont);
              }
              .title-two {
                font-size: 4rem;
              }
            }
          }
          .right {
            flex: 1;
          }
        }
        img {
          object-fit: cover;
          // screen size adjust height
          height: 350px;
          width: 100%;
          filter: var(--photoSettings);
          @media screen and (max-width: 480px) {
            height: 250px;
          }
        }
        .text {
          display: flex;
          flex-direction: row-reverse;
          padding-top: 10px;
          .left {
            flex: 1;
            @media screen and (max-width: 480px) {
              flex: 0;
            }
          }
          .middle {
            position: relative;
            flex: 10;
            .absolute {
              position: absolute;
              top: -1px;
              .description {
                font-size: 1rem;
                font-weight: 500;
                text-transform: uppercase;
                z-index: 2;
                @media screen and (max-width: 800px) {
                  font-size: 1.1rem;
                }
                @media screen and (max-width: 680px) {
                  font-size: 1.2rem;
                }
                @media screen and (max-width: 550px) {
                  font-size: 1.3rem;
                }
                @media screen and (max-width: 480px) {
                  font-size: 1.5rem;
                }
                @media screen and (max-width: 350px) {
                  font-size: 1.6rem;
                }
              }
            }
          }
          .right {
            flex: 4;
            @media screen and (max-width: 680px) {
              flex: 1;
            }
            @media screen and (max-width: 480px) {
              flex: 0;
            }
          }
        }
      }
    }
  }
  .right {
    flex: 1;
  }
`;
