import { Dispatch } from "react";
import { Action } from "redux";
/**All User interaction functionalities */



/**Used by Reducer & Disptacher to evaluate called actions and process it*/
export const clickerActionTypes = {
    ADD_CLICKS: 'ADD_CLICKS', //const strings
    REMOVE_CLICKS: 'REMOVE_CLICKS'
};

//Define payload
export interface ClickerActionPayload {
    payload: {
        clicks: number; //counter 
    }
}

/**Dispatchers: bind to components for actions. */
export const addClicks = (clicks: number)=> (dispatch: Dispatch<ClickerActionPayload & Action>) => {
    dispatch({ //dispatch action
        type: clickerActionTypes.ADD_CLICKS, //action type defined
        payload: { //payload attached decribing action
            clicks: clicks
        }

    });
};

export const removeClicks = (clicks: number)=> (dispatch: Dispatch<ClickerActionPayload & Action>) => {
    dispatch({
        type: clickerActionTypes.REMOVE_CLICKS,
        payload: {
            clicks: clicks
        }

    });
};