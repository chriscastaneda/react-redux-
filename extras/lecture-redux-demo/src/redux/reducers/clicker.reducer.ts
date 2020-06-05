import { ClickerState, state } from ".";
import { ClickerActionPayload, clickerActionTypes } from "../actions/clicker.actions";
import { Action } from "redux";
/**Modifying state from action & Define state for any Categories*/


//Clicker Initial State
const initialState: ClickerState = {
    clicks: 0
};

/**Reducer: except action, make changes */
export const ClickerReducer = (state: ClickerState =initialState, action: ClickerActionPayload & Action)=> {
    //React & define on actions
    switch(action.type) {
        case clickerActionTypes.ADD_CLICKS: {
            return {
                ...state,
                clicks: state.clicks + action.payload.clicks
            };
        };
        case clickerActionTypes.REMOVE_CLICKS: {
            return {
                ...state,
                clicks: state.clicks - action.payload.clicks
            };
        };
        default: return state;
    };
};