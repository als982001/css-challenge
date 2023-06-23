import styled from "styled-components";
import Button01 from "./Buttons/Button01";

interface IProps {
  index: number;
}

const Container = styled.main`
  width: 100%;
  height: auto;
  position: relative;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  justify-items: center;
  align-items: center;
`;

export default function Buttons({ index }: IProps) {
  return (
    <Container>
      <Button01 />
    </Container>
  );
}
