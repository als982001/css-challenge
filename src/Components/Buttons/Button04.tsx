import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  min-width: 200px;
  height: 200px;
  border: 2px solid black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const MyButton = styled.button`
  margin-top: 10px;
  width: 180px;
  height: 60px;
  background-color: black;
  color: white;
  font-size: 22px;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0px 0px 10px blue;
  transition: all 1s;
  -webkit-box-reflect: below 20px
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 7));

  &:hover {
    background: linear-gradient(90deg, skyblue, gray);
    color: black;
  }
`;

const SampleButton = styled.button`
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: rgb(14, 14, 26);
  color: rgb(234, 234, 234);
  font-weight: 700;
  transition: 0.6s;
  box-shadow: 0px 0px 60px #1f4c65;
  -webkit-box-reflect: below 10px
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));

  &:active {
    scale: 0.92;
  }

  &:hover {
    background: rgb(2, 29, 78);
    background: linear-gradient(
      270deg,
      rgba(2, 29, 78, 0.681) 0%,
      rgba(31, 215, 232, 0.873) 60%
    );
    color: rgb(4, 4, 38);
  }
`;

export default function Button04() {
  return (
    <>
      <Container>
        <MyButton>WATCH</MyButton>
      </Container>
      <Container>
        <SampleButton>Watch</SampleButton>
      </Container>
    </>
  );
}
