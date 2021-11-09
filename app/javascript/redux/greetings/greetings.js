const apiEndpoint = '/api/v1/greetings';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

const getGreetings = () => {
  console.log('getGreetings Actions!');
  return (dispatch) => {
    dispatch({ type: GET_GREETINGS_REQUEST });
    return fetch(`{apiEndpoint}`)
      .then((response) => response.json())
      .then((json) => dispatch(getGreetingsSuccess(json)))
      .catch((error) => console.log(error));
  };
};

export function getGreetingsSuccess(json) {
  return {
    type: GET_GREETINGS_SUCCESS,
    json,
  };
}
