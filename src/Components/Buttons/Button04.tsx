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

export default function Button04() {
  return (
    <>
      <Container></Container>
      <Container></Container>
    </>
  );
}
