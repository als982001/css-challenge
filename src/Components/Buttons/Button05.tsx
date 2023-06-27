import styled from "styled-components";
import Container from "../Container";

const MyButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: #41bf57;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  outline: none;
  transition: all 0.5s;

  @keyframes movingBg {
    0% {
      background: linear-gradient(
        90deg,
        purple,
        navy,
        blue,
        green,
        yellow,
        orange,
        red
      );
    }
    14% {
      background: linear-gradient(
        90deg,
        red,
        purple,
        navy,
        blue,
        green,
        yellow,
        orange
      );
    }
    28% {
      background: linear-gradient(
        90deg,
        orange,
        red,
        purple,
        navy,
        blue,
        green,
        yellow
      );
    }
    42% {
      background: linear-gradient(
        90deg,
        yellow,
        orange,
        red,
        purple,
        navy,
        blue,
        green
      );
    }
    56% {
      background: linear-gradient(
        90deg,
        green,
        yellow,
        orange,
        red,
        purple,
        navy,
        blue
      );
    }
    70% {
      background: linear-gradient(
        90deg,
        blue,
        green,
        yellow,
        orange,
        red,
        purple,
        navy
      );
    }
    84% {
      background: linear-gradient(
        90deg,
        navy,
        blue,
        green,
        yellow,
        orange,
        red,
        purple
      );
    }
    100% {
      background: linear-gradient(
        90deg,
        purple,
        navy,
        blue,
        green,
        yellow,
        orange,
        red
      );
    }
  }

  &:hover {
    scale: 1.2;
    animation: movingBg 0.5s infinite;
  }
`;

const SampleButton = styled.button`
  --width: 150px;
  --timing: 2s;
  border: 0;
  width: var(--width);
  padding-block: 1em;
  color: #fff;
  font-weight: bold;
  font-size: 1em;
  background: rgb(64, 192, 87);
  transition: all 0.2s;
  border-radius: 3px;

  @keyframes dance6123 {
    to {
      background-position: var(--width);
    }
  }

  &:hover {
    background-image: linear-gradient(
      to right,
      rgb(250, 82, 82),
      rgb(250, 82, 82) 16.65%,
      rgb(190, 75, 219) 16.65%,
      rgb(190, 75, 219) 33.3%,
      rgb(76, 110, 245) 33.3%,
      rgb(76, 110, 245) 49.95%,
      rgb(64, 192, 87) 49.95%,
      rgb(64, 192, 87) 66.6%,
      rgb(250, 176, 5) 66.6%,
      rgb(250, 176, 5) 83.25%,
      rgb(253, 126, 20) 83.25%,
      rgb(253, 126, 20) 100%,
      rgb(250, 82, 82) 100%
    );
    animation: var(--timing) linear dance6123 infinite;
    transform: scale(1.1) translateY(-1px);
  }
`;

export default function Button05() {
  return (
    <>
      <Container>
        <MyButton>Join now</MyButton>
      </Container>
      <Container>
        <SampleButton>Join now</SampleButton>
      </Container>
    </>
  );
}
