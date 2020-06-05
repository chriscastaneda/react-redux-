import { Pokemon } from "../models/Pokemon";
import { combineReducers } from "redux";
import { ClickerReducer } from './clicker.reducer';
/**Interfaces for all states in app */



/**Combine States */
export interface IState{
    clickerState: ClickerState;
    pokeomStoreState: PokemonStoreState;
};

/**define state */
export interface ClickerState {
    clicks: number;
};

/**define state */
export interface PokemonStoreState{
    lastPurchase: Pokemon; //clikcer
    collectedPokemon: Pokemon[]; //pokedex
};

/*reducer.ts files */
export const state= combineReducers({
    ClickerReducer
});