const initState = {
    actualPokemon: {},
    pokemons:[{name: "raichu", id: 1}, {name: "raichu", id: 2}],
    loading:false,
    error:false

};
const pokemonReducer = (state = initState, action) => {

    switch (action.type) {

        default:
            return state;

    }
}
export default pokemonReducer;
