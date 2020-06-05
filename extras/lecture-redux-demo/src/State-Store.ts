import { compose, applyMiddleware, createStore, Store } from "redux";
import reduxThunk from 'redux-thunk';
import { state } from "./redux/reducers"; 
/**Setup State Store */



const a: any = window;

/**Check if redux dev tools interaction are active on browser */
const composeEnhancers = a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**Add Enhancments Middlware  to interact with Redux*/
const enhancer = composeEnhancers(
    applyMiddleware(reduxThunk)
);

//apply state through reducers(structure of state store data). 
export const store: Store<any> = createStore(
    state,
    enhancer
);