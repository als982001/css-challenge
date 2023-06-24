import { useState } from "react";
import styled from "styled-components";
import IndexOfButtons from "./Index/IndexOfButtons";

interface IProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const Container = styled.header`
  width: 100%;
  height: 50px;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Select = styled.select`
  width: 100px;
  height: 30px;
  margin: 0 10px;
`;

export default function Header({ type, setType }: IProps) {
  const handleChangeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType((prev) => event.target.value);
  };

  return (
    <Container>
      <Select disabled={true} onChange={handleChangeType}>
        <option value="buttons">buttons</option>
        <option value="checkboxes">checkboxes</option>
        <option value="toggle-switches">toggle-switches</option>
        <option value="cards">cards</option>
        <option value="loaders">loaders</option>
        <option value="inputs">inputs</option>
      </Select>
    </Container>
  );
}
