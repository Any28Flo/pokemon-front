
import styled from "styled-components";
import AppRoutes from "./routes/AppRoutes";
import {Provider} from "react-redux";
import store from "./redux/store";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  font: 700 1.4rem/3rem var(--font-Base);

`;

function App() {
    return (
        <Wrapper>
            <Provider store={store}>
                <AppRoutes/>
            </Provider>

        </Wrapper>);
}

export default App;
