import { Pokemon } from "../models/Pokemon";
import { combineReducers } from "redux";
import { ClickerReducer } from './clicker.reducer';
import { pokemonReducer } from "./pokemon.reducer";
/**Interfaces for all states in app */



/**Combine States */
export interface IState{
    clickerState: ClickerState;
    pokemonStoreState: PokemonStoreState;
};

/**define state */
export interface ClickerState {
    clicks: number;
};

/**define state */
export interface PokemonStoreState{
    lastPurchase: Pokemon | undefined; //clikcer page
    collectedPokemon: Pokemon[]; //pokedex page
};

/*reducer.ts files */
export const state = combineReducers({
    clickerState: ClickerReducer,
    pokemonStoreState: pokemonReducer
});