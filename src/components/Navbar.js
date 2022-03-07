import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
import { VscMenu } from "react-icons/vsc";
import NavLink from "./NavLink";

const Navbar = ({ onShowMenu }) => {
  return (
    <Nav>
      <div className="name-tag">
        <a>STEFAN JOSEPH</a>
      </div>
      <div className="navigation">
        <NavLink title="projects" to="projects" />
        <NavLink title="contact me" to="contact-me" />
        <div className="nav-icon">
          <VscMenu onClick={onShowMenu} />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 10;
  border-bottom: 2px solid var(--textColor);
  width: 95%;
  background-color: var(--backgroundColor);
  opacity: 0.9;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s linear;

  > * {
    white-space: nowrap;
  }

  .name-tag {
    flex: 5;
  }

  .navigation {
    display: flex;
    flex: 3;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;
    @media screen and (max-width: 680px) {
      gap: 20px;
    }

    > * {
      @media screen and (max-width: 600px) {
        display: none;
      }
    }

    .nav-icon {
      display: none;
      @media screen and (max-width: 600px) {
        display: block;
        font-size: 30px;
        align-items: center;
        padding-top: 5px;
        cursor: pointer;
      }
    }
  }
`;
