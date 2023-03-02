import './App.css';

import styled from "styled-components";
import AppRoutes from "./routes/AppRoutes";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
function App() {
  return (
      <Wrapper>
        <AppRoutes/>
      </Wrapper>  );
}

export default App;
