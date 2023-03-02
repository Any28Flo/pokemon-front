import {combineReducers} from "redux";
import pokemonReducer from "./pokemonReducers";

export default combineReducers({
    main: pokemonReducer
})
