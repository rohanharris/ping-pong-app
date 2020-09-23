import { createStore, composer} from 'redux';
import persistState from 'redux-localstorage';

// this allows local storage without an API
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    initialState,
    composeEnhancers(persistState()),

);

export default store;