import styled from "styled-components";

const bgColor = "#F4AE51";
const borderColor = "#F29822";

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
  width: 130px;
  height: 46px;
  position: relative;

  & button {
    width: 100%;
    height: 100%;
    background-color: ${bgColor};
    border: 3px solid ${borderColor};
    border-radius: 10px;
    font-size: 15px;
    color: white;
  }

  & div {
    position: absolute;
    width: 30%;
    height: 50%;
  }

  & #top-left {
    top: 0;
    left: 0;
    background-color: green;

    &:hover {
      background-color: black;
      transform: translateY(-50px);
    }
  }

  & #top-right {
    top: 0;
    right: 0;
    background-color: blue;
  }

  & #bottom-left {
    left: 0;
    bottom: 0;
    background-color: yellow;
  }

  & #bottom-right {
    right: 0;
    bottom: 0;
    background-color: red;
  }
`;

const SampleButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "bt-1 bt-2 bt-3"
    "bt-4 bt-5 bt-6";
  position: relative;
  perspective: 800;
  padding: 0;
  width: 135px;
  height: 47px;
  transition: all 0.3s ease-in-out;

  &:active {
    transform: scale(0.95);
  }

  & .hover {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 200;
  }

  & .bt-1 {
    grid-area: bt-1;
  }
  & .bt-2 {
    grid-area: bt-2;
  }
  & .bt-3 {
    grid-area: bt-3;
  }
  & .bt-4 {
    grid-area: bt-4;
  }
  & .bt-5 {
    grid-area: bt-5;
  }
  & .bt-6 {
    grid-area: bt-6;
  }

  & .bt-1:hover ~ button {
    transform: rotateX(15deg) rotateY(-15deg) rotateZ(0deg);
    box-shadow: -2px -2px #18181888;
  }
  & .bt-1:hover ~ button::after {
    animation: shake 0.5s ease-in-out 0.3s;
    text-shadow: -2px -2px #18181888;
  }
  & .bt-3:hover ~ button {
    transform: rotateX(15deg) rotateY(15deg) rotateZ(0deg);
    box-shadow: 2px -2px #18181888;
  }
  & .bt-3:hover ~ button::after {
    animation: shake 0.5s ease-in-out 0.3s;
    text-shadow: 2px -2px #18181888;
  }
  & .bt-4:hover ~ button {
    transform: rotateX(-15deg) rotateY(-15deg) rotateZ(0deg);
    box-shadow: -2px 2px #18181888;
  }
  & .bt-4:hover ~ button::after {
    animation: shake 0.5s ease-in-out 0.3s;
    text-shadow: -2px 2px #18181888;
  }
  & .bt-6:hover ~ button {
    transform: rotateX(-15deg) rotateY(15deg) rotateZ(0deg);
    box-shadow: 2px 2px #18181888;
  }
  & .bt-6:hover ~ button::after {
    animation: shake 0.5s ease-in-out 0.3s;
    text-shadow: 2px 2px #18181888;
  }

  & .hover:hover ~ button::before {
    background: transparent;
  }

  & .hover:hover ~ button::after {
    content: "Click";
    top: -150%;
    transform: translate(-50%, 0);
    font-size: 34px;
    color: #f192cb;
  }

  & button {
    position: absolute;
    padding: 0;
    width: 135px;
    height: 47px;
    background: transparent;
    font-size: 17px;
    font-weight: 900;
    border: 3px solid #f39923;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
  }

  & button::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 135px;
    height: 47px;
    background-color: #f5ae51;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
    z-index: -1;
  }

  & button::after {
    content: "Hover";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 135px;
    height: 47px;
    background-color: transparent;
    font-size: 17px;
    font-weight: 900;
    line-height: 47px;
    color: #ffffff;
    border: none;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
    z-index: 2;
  }

  @keyframes shake {
    0% {
      left: 45%;
    }

    25% {
      left: 54%;
    }

    50% {
      left: 48%;
    }

    75% {
      left: 52%;
    }

    100% {
      left: 50%;
    }
  }
`;

export default function Button02() {
  return (
    <>
      <Container>
        <MyButton>
          <div id="top-left" />
          <div id="top-right" />
          <div id="bottom-left" />
          <div id="bottom-right" />
          <button>Hover</button>
        </MyButton>
      </Container>
      <Container>
        <SampleButton className="container-button">
          <div className="hover bt-1"></div>
          <div className="hover bt-2"></div>
          <div className="hover bt-3"></div>
          <div className="hover bt-4"></div>
          <div className="hover bt-5"></div>
          <div className="hover bt-6"></div>
          <button></button>
        </SampleButton>
      </Container>
    </>
  );
}
