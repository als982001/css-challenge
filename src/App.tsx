import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import Buttons from "./Components/Buttons";

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  position: relative;
`;

const Container = styled.main`
  width: 100%;
  height: auto;
  position: relative;
`;

function App() {
  const [type, setType] = useState<string>("buttons");

  return (
    <Wrapper>
      <Header type={type} setType={setType} />
      {type === "buttons" && <Buttons />}
    </Wrapper>
  );
}

export default App;
