import styled from "styled-components";
import {Outlet} from "react-router-dom";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  grid-area: main;
  padding: 3rem;
  @media (min-width: 995px) {
    padding: 10rem;
  }
`;
const Content = () => {
    return (
        <ContentWrapper>
            <Outlet />
        </ContentWrapper>
    );
};

export default Content;
