import PokeIcon from "../assets/img/pokeapi_logo.png";
import PokeDefault from "../assets/img/default_pokemon.jpeg";

import styled from "styled-components";
import PokeImage from "./PokeImage";

const SidebarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
`;

const Sidebar = () => {

    return (
        <SidebarWrapper>
            <PokeImage
                src={PokeIcon}
                alt="icon pokemon"
            />
            <PokeImage
                src={PokeDefault}
                alt="pokemon"
            />
        </SidebarWrapper>
    );
};

export default Sidebar;
