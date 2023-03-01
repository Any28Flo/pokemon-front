import './App.css';
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
function App() {
  return (
      <Wrapper>
        <Sidebar/>
        <Content/>
      </Wrapper>  );
}

export default App;
