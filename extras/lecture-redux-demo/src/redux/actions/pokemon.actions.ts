import { Pokemon } from "../models/Pokemon";
import { Dispatch } from "react";
import { Action } from "redux";

/**Used by Reducer & Disptacher to evaluate called actions and process it*/
export const PokemonActionTypes = {
    BUY_POKEMON: 'BUY_POKEMON' //update purchase/history values
};

//Define payload
export interface PokemonActionPayload{
    payload: {
        pokemon: Pokemon
    }
}
/**Dispatchers: bind to components for actions. */

export const buyPokemon = (pokemon: Pokemon)=> (dispatch: Dispatch<PokemonActionPayload & Action>)=> {
    dispatch({//dispatch action
        type: PokemonActionTypes.BUY_POKEMON, //action type defined
        payload: { //payload attached decribing action
            pokemon
        }
    });
};