import { createStore, combineReducers, compose } from 'redux';
import placesReducer from '../store/reducers/palcesReducer';

const rootReducer = combineReducers({
  placesReducer: placesReducer
});

let composeEnhancer = compose;

// if on dev mode use dev tools
// if dev tools not available use comnpose
if (__DEV__) {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancer());
};

export default configureStore;
