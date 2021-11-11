import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './greetings/greetReducer';

const reducer = combineReducers({
  greeting: rootReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
