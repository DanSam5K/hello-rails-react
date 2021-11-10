import * as actions from './greetingAction';

const initialState = {
  message: '',
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_GREETINGS_REQUEST:
      return action.payload;
    default:
      return state;
  }
};

export default rootReducer;
