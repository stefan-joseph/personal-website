import styled from "styled-components";
import moment from "moment";

const Availability = () => {
  const date = moment(new Date()).format("MMM Do");
  return (
    <Div>
      {/* <div className="asterisk">
        <p>*</p>
      </div> */}
      <p>
        <p className="asterisk">✹</p>
        <span className="date">{date}</span>
        {/* <br /> */}
        <p className="status">
          Available
          <br />
          for work
        </p>
      </p>
      <svg viewBox="0 0 500 150" preserveAspectRatio="none">
        <path
          fill="none"
          d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"
        />
      </svg>
    </Div>
  );
};

export default Availability;

const Div = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  padding: 35px 35px 35px 45px;
  @media screen and (max-width: 600px) {
    padding: 35px 10px 24px 45px;
  }

  p {
    position: relative;

    padding-top: 0px;

    /* @media screen and (max-width: 680px) {
      font-size: 1rem;
    } */

    .asterisk {
      position: absolute;
      font-size: 22px;
      top: -4px;
      left: -24px;
    }

    .date {
      white-space: nowrap;
      font-size: 16px;
      font-weight: 600;
    }
    .status {
      padding-top: 3px;
      font-size: 13px;
    }
    @media screen and (max-width: 550px) {
      .asterisk {
        font-size: 20px;
        top: -5px;
        left: -22px;
      }
      .date {
        font-size: 14px;
      }
      .status {
        font-size: 12px;
      }
    }
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
    stroke-width: 3px;
    stroke-dasharray: 0 1500;
  }
  path {
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
