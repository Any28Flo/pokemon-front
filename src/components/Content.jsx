import styled from "styled-components";
import {Outlet} from "react-router-dom";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`;
const Content = () => {
    return (
        <ContentWrapper>
            <Outlet />
        </ContentWrapper>
    );
};

export default Content;
