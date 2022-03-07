import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const NavLink = ({ title, to, closeMenu }) => {
  return (
    <Div>
      <div onClick={closeMenu}>
        <Link
          to={to}
          smooth={true}
          offset={-70}
          duration={1000}
          ignoreCancelEvents={false}
          onClick={closeMenu}
        >
          {title}
        </Link>
      </div>
      <svg viewBox="0 0 500 150" preserveAspectRatio="none">
        <path
          fill="none"
          d="M325,33C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,34.7"
        />
      </svg>
    </Div>
  );
};

export default NavLink;

const Div = styled.div`
  position: relative;
  display: inline-block;
  padding: 10px;
  text-transform: uppercase;

  a {
    cursor: pointer;
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  path {
    stroke: var(--animationColor);
    stroke-width: 8px;
    stroke-dasharray: 0 1500;
  }
  :hover path {
    animation: draw 0.8s forwards;
  }
  @keyframes draw {
    from {
      stroke-dasharray: 0 1500;
    }

    to {
      stroke-dasharray: 1500 1500;
    }
  }
`;
