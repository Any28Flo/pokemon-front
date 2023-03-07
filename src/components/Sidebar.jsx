import PokeIcon from "../assets/img/pokeapi_logo.png";
import PokeDefault from "../assets/img/default_pokemon.jpeg";

import styled from "styled-components";
import PokeImage from "./PokeImage";
import {useSelector} from "react-redux";

const SidebarWrapper = styled.div`
  grid-area: sidebar;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
`;

const Sidebar = () => {
    const { actualPokemon } = useSelector(state => state.main);

    return (
        <SidebarWrapper>
            <PokeImage
                src={PokeIcon}
                alt="icon pokemon"
            />
            <PokeImage
                src={actualPokemon?.sprites?.front_default ? actualPokemon.sprites.front_default  : PokeDefault }
                alt="pokemon"
            />
        </SidebarWrapper>
    );
};

export default Sidebar;
