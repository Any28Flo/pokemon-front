import React from 'react';
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: row;
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
