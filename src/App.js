import React from "react";


import styled from "styled-components";
import Square from "./components/Square";
function App() {
  return (
    <Container>
      <Board>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
      </Board>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Board = styled.div`
  background: lightgray;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  max-width: 250px;
  margin: auto;
`;
export default App;
