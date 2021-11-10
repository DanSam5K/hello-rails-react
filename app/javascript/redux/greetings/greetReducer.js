import * as actions from './greetingAction';
// const initialState = {
//   greetings: [{ message: 'GoodMorning' }],
// };

const rootReducer = (state, action) => {
  // console.log(action.type);
  switch (action.type) {
    case actions.GET_GREETINGS_SUCCESS:
      return { greetings: payload };
  }
  return state;
};

export default rootReducer;
