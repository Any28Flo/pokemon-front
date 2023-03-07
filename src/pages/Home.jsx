import React from 'react';
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

const HomeWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'sidebar'
    'main';
  grid-template-rows: auto;
  @media (min-width: 995px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      'sidebar main main'
      'sidebar main main'
      'sidebar main main';
  }
`;

const Home = () => {
    return (
        <HomeWrapper>
            <Sidebar/>
            <Content/>
        </HomeWrapper>
    );
};

export default Home;
