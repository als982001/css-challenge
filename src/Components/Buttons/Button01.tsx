import styled from "styled-components";

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

const MyButton = styled.button`
  width: 160px;
  height: 60px;
  background-color: #212121;
  color: white;
  border-radius: 5px;
  border: none;
  box-shadow: 4px 0 0 #139cea inset, -4px 0 0 #139cea inset;
  transition: all 1s linear;

  &:hover {
    box-shadow: 4px 0 0 #139cea inset, -4px 0 0 #139cea inset,
      0 4px 0 #139cea inset, 0 -4px 0 #139cea inset, 4px 0 0 #139cea inset,
      -4px 0 0 #139cea inset, 10px 10px 100px #139cea inset,
      -10px -10px 100px #139cea inset;
  }
`;

const SampleButton = styled.button`
  width: 10em;
  height: 3.5em;
  background-color: transparent;
  color: white;
  border: 3px ridge #149cea;
  position: relative;
  outline: none;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  font-weight: bold;

  &::after {
    content: "";
    width: 95%;
    height: 40%;
    position: absolute;
    top: -10px;
    left: 3%;
    background-color: #212121;
    transition: 0.5s;
    transform-origin: center;
  }

  &::before {
    content: "";
    width: 95%;
    height: 40%;
    transform-origin: center;
    position: absolute;
    top: 80%;
    left: 3%;
    background-color: #212121;
    transition: 0.5s;
  }

  &:hover::before,
  &:hover::after {
    transform: scale(0);
  }

  &:hover {
    box-shadow: inset 0px 0px 25px #1479ea;
  }
`;

export default function Button01() {
  return (
    <>
      <Container>
        <MyButton>Hover me</MyButton>
      </Container>
      <Container>
        <SampleButton>Hover me</SampleButton>
      </Container>
    </>
  );
}
