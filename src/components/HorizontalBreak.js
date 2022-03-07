import styled from "styled-components";

const HorizontalBreak = () => {
  return (
    <Div>
      <div className="left"></div>
      <div className="center"></div>
      <div className="right"></div>
    </Div>
  );
};

export default HorizontalBreak;

const Div = styled.div`
  display: flex;

  .left {
    flex: 1;
  }

  .center {
    flex: 6;
    /* margin: 200px 0px 120px 0px; */
    border: none;
    border-top: 4px double var(--textColor);
    color: var(--textColor);
  }

  .right {
    flex: 1;
  }
`;
