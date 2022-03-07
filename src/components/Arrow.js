import { useLayoutEffect, useState } from "react";

import styled from "styled-components";

import { Link, animateScroll as scroll } from "react-scroll";

const Arrow = () => {
  const [rotate, handleRotate] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    if (window.scrollY > 100) {
      handleRotate(true);
      // console.log("rotate");
    }
    if (window.scrollY < 100) {
      handleRotate(false);
      // console.log("rotate back");
    }
  };

  return (
    <Div rotate={rotate}>
      <div className="arrow">
        <Link to="profile" smooth={true} offset={-70} duration={1000}>
          ⥉
        </Link>
      </div>
      <p>
        <Link to="profile" smooth={true} offset={-70} duration={1000}>
          TOP
        </Link>
      </p>
    </Div>
  );
};

export default Arrow;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  .arrow {
    position: fixed;
    bottom: 5%;
    font-size: 6rem;
    transform: rotate(${({ rotate }) => (rotate ? "0deg" : "180deg")});
    transition: transform 0.3s ease-in;
    transform-origin: 50% 72%;
    cursor: ${({ rotate }) => (rotate ? "pointer" : "null")};
  }
  p {
    opacity: ${({ rotate }) => (rotate ? "1" : "0")};
    transition: opacity 0.3s ease-in;
    position: fixed;
    bottom: 20px;
    flex: 2;
    margin-top: auto;
    cursor: ${({ rotate }) => (rotate ? "pointer" : "null")};
    @media screen and (max-width: 680px) {
      display: none;
    }
  }
  @media screen and (max-width: 1250px) {
    .arrow {
      font-size: 5rem;
    }
  }
  @media screen and (max-width: 1100px) {
    .arrow {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 900px) {
    .arrow {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 680px) {
    .arrow {
      display: none;
    }
  }
`;
