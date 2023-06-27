import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}

const Div = styled.div`
  width: 80%;
  min-width: 200px;
  height: 200px;
  border: 2px solid black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Container(props: IProps) {
  return <Div>{props.children}</Div>;
}
