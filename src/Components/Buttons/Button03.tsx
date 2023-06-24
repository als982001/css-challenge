import styled from "styled-components";

const bgColor = "#0071E1";
const shadowColor = "#0D5DAB";

const Container = styled.div`
  width: 80%;
  min-width: 200px;
  height: 200px;
  border: 2px solid black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyButton = styled.div`
  width: 180px;
  height: 60px;
  background-color: ${bgColor};
  border-radius: 15px;
  box-shadow: 0px 7px 1px ${shadowColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:active {
    box-shadow: none;
    transform: translateY(7px);
  }
`;

const Texts = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;

  @keyframes dropAlp {
    from {
      transform: translateY(-50px);
    }
    to {
      transform: translateY(0px);
    }
  }

  &:hover {
    & .alp-1 {
      animation: dropAlp 0.1s linear;
    }

    & .alp-2 {
      animation: dropAlp 0.2s linear;
    }

    & .alp-3 {
      animation: dropAlp 0.3s linear;
    }

    & .alp-4 {
      animation: dropAlp 0.4s linear;
    }

    & .alp-5 {
      animation: dropAlp 0.5s linear;
    }
  }

  &:active {
    & span {
    }
  }
`;

const SampleButton = styled.button<{ alt: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  position: relative;
  padding: 0 20px;
  font-size: 18px;
  text-transform: uppercase;
  border: 0;
  box-shadow: hsl(210deg 87% 36%) 0px 7px 0px 0px;
  background-color: hsl(210deg 100% 44%);
  border-radius: 12px;
  overflow: hidden;
  transition: 31ms cubic-bezier(0.5, 0.7, 0.4, 1);

  &:before {
    content: attr(alt);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset: 0;
    font-size: 15px;
    font-weight: bold;
    color: white;
    letter-spacing: 4px;
    opacity: 1;
  }

  &:active {
    box-shadow: none;
    transform: translateY(100%);
    opacity: 0;
  }

  &:hover:before {
    transition: all 0s;
    transform: translateY(100%);
    opacity: 0;
  }

  & i {
    color: red;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 4px;
    font-style: normal;
    transition: all 2s ease;
    transform: translateY(-20px);
    opacity: 0;
  }

  &:hover i {
    transition: all 0.2s ease;
    transform: translateY(0px);
    opacity: 1;
  }

  &:hover i:nth-child(1) {
    transition-delay: 0.045s;
  }

  &:hover i:nth-child(2) {
    transition-delay: calc(0.045s * 3);
  }

  &:hover i:nth-child(3) {
    transition-delay: calc(0.045s * 4);
  }

  &:hover i:nth-child(4) {
    transition-delay: calc(0.045s * 5);
  }

  &:hover i:nth-child(6) {
    transition-delay: calc(0.045s * 6);
  }

  &:hover i:nth-child(7) {
    transition-delay: calc(0.045s * 7);
  }

  &:hover i:nth-child(8) {
    transition-delay: calc(0.045s * 8);
  }

  &:hover i:nth-child(9) {
    transition-delay: calc(0.045s * 9);
  }

  &:hover i:nth-child(10) {
    transition-delay: calc(0.045s * 10);
  }
`;

export default function Button03() {
  return (
    <>
      <Container>
        <MyButton>
          <Texts>
            <span className="alp-1">H</span>
            <span className="alp-2">O</span>
            <span className="alp-3">V</span>
            <span className="alp-4">E</span>
            <span className="alp-5">R</span>
          </Texts>
        </MyButton>
      </Container>
      <Container>
        <SampleButton alt="tony stark">
          <i>t</i>
          <i>o</i>
          <i>n</i>
          <i>y</i>
          <i>&nbsp;</i>
          <i>s</i>
          <i>t</i>
          <i>a</i>
          <i>r</i>
          <i>k</i>
        </SampleButton>
      </Container>
    </>
  );
}
