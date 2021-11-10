import * as actions from './greetingAction';
const apiEndpoint = '/api/v1/greetings';

export const getGreetings = () => {
  // console.log('getGreetings() Action!!');
  return (dispatch) => {
    dispatch({ type: actions.GET_GREETINGS_REQUEST });
    return fetch(apiEndpoint)
      .then((response) => response.json())
      .then((json) => dispatch(getGreetingSuccess(json)));
  };
};

const getGreetingSuccess = (json) => {
  return {
    type: actions.GET_GREETINGS_SUCCESS,
    json,
  };
};
