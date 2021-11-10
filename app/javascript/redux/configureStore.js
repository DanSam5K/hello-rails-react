import { createStore, applyMiddleware } from 'redux';
import rootReducer from './greetings/greetReducer';
import thunk from 'redux-thunk';

const initialState = {
  greetings: [{ message: '' }],
};

// const rootReducer = (state, action) => {
//   console.log(action.type);
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

const configureStore = () => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
};

export default configureStore;
