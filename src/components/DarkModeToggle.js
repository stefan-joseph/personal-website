import styled from "styled-components";
import { MdWbSunny } from "react-icons/md";
import { BsMoonFill, BsFillCloudFill } from "react-icons/bs";
import { WiStars } from "react-icons/wi";
import { HiCloud } from "react-icons/hi";

const DarkToggle = ({ darkMode, onDarkMode }) => {
  return (
    <Styles dark={darkMode}>
      DARK
      <div className="switch-container" onClick={onDarkMode}>
        <div className="switch">
          {darkMode ? (
            <BsMoonFill className="moon" />
          ) : (
            <MdWbSunny className="sun" />
          )}
        </div>
        <WiStars className="stars" />
        <HiCloud className="cloud-one" />
        <BsFillCloudFill className="cloud-two" />
      </div>
      LIGHT
    </Styles>
  );
};

export default DarkToggle;

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  * {
    box-sizing: border-box;
  }

  .switch-container {
    background-color: var(--backgroundColor);
    border: 1px solid var(--textColor);
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    padding: 5px;
    border-radius: 50px;
    height: 29px;
    width: 58px;
    position: relative;
    cursor: pointer;
    transition: all 0.2s linear;
  }

  .switch {
    /* position: absolute; */
    /* background-color: var(--textColor); */
    /* border-radius: 50%; */
    height: 20px;
    width: 20px;
    top: 4.2px;
    left: 4px;
    transform: ${(props) => !props.dark && "translateX(28px)"};
    transition: all 0.2s linear;

    .moon {
      position: absolute;
      font-size: 19px;
    }
    .sun {
      position: absolute;
      font-size: 24px;
      top: -2px;
      left: -3px;
    }
  }
  .stars {
    position: absolute;
    top: -1px;
    left: 23px;
    font-size: 30px;
    opacity: ${(props) => (props.dark ? "1" : "0")};
    transition: all 0.2s linear;
  }
  .cloud-one,
  .cloud-two {
    position: absolute;
    opacity: ${(props) => (props.dark ? "0" : "1")};
    transition: all 0.2s linear;
    font-size: 11px;
  }
  .cloud-one {
    /* position: absolute; */
    top: 3px;
    left: 16px;
  }
  .cloud-two {
    /* position: absolute; */
    top: 10px;
    left: 6px;
  }
`;
