import { createStore } from 'redux';
// import thunk from 'redux-thunk';

const initialState = {
  greetings: [{ message: 'GoodMorning' }],
};

const rootReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    default:
      return state;
  }
};

export default function configureStore() {
  const store = createStore(rootReducer, initialState);
  return store;
}
