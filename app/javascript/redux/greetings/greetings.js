import * as actions from './greetingAction';
const apiEndpoint = '/api/v1/greetings';
export const getGreetings = () => async (dispatch) => {
  const resMessage = await fetch(apiEndpoint, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const payload = await resMessage.json();
  dispatch({ type: actions.GET_GREETINGS_REQUEST, payload });
};
