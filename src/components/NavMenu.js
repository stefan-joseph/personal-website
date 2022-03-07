import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
import DarkModeToggle from "./DarkModeToggle";
import { VscChromeClose } from "react-icons/vsc";
import NavLink from "./NavLink";

const NavMenu = ({ menu, onShowMenu, darkMode, onDarkMode }) => {
  return (
    <Aside>
      <div
        className={menu ? "nav-menu-container show-menu" : "nav-menu-container"}
      >
        <div className="content">
          <VscChromeClose className="close" onClick={onShowMenu} />
          <div className="navigation">
            <NavLink title="home" to="profile" closeMenu={onShowMenu} />
            <NavLink title="projects" to="projects" closeMenu={onShowMenu} />
            <NavLink
              title="contact me"
              to="contact-me"
              closeMenu={onShowMenu}
            />
          </div>
          <div className="toggle-switch">
            <DarkModeToggle darkMode={darkMode} onDarkMode={onDarkMode} />{" "}
          </div>
        </div>
      </div>
    </Aside>
  );
};

export default NavMenu;

const Aside = styled.aside`
  @media (min-width: 601px) {
    display: none;
  }

  .nav-menu-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;

    .content {
      background: var(--backgroundColor);
      color: var(--textColor);
      width: 95vw;
      height: 95vh;
      border: 1px solid var(--textColor);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      font-size: 16px;

      .close {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 30px;
        cursor: pointer;
      }

      .navigation {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
    }
  }
  .show-menu {
    z-index: 99;
    opacity: 1;
    color: blue;
  }
`;
