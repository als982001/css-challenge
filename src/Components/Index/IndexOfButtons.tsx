import styled from "styled-components";

interface IProps {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Select = styled.select`
  width: 100px;
  height: 30px;
  margin: 0 10px;
`;

export default function IndexOfButtons({ index, setIndex }: IProps) {
  return (
    <Select
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
        setIndex((prev) => +event.target.value)
      }
    >
      <option value={0}>0</option>
      <option value={1}>1</option>
      <option value={2}>2</option>
    </Select>
  );
}
