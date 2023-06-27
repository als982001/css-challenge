import styled from "styled-components";
import Button01 from "./Buttons/Button01";
import Button02 from "./Buttons/Button02";
import Button03 from "./Buttons/Button03";
import Button04 from "./Buttons/Button04";
import Button05 from "./Buttons/Button05";

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

export default function Buttons() {
  return (
    <Container>
      <Button01 />
      <Button02 />
      <Button03 />
      <Button04 />
      <Button05 />
    </Container>
  );
}
