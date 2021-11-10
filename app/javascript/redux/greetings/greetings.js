// const apiEndpoint = '/api/v1/greetings';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
// const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

export const getGreetings = () => {
  console.log('getThings() Action!!');
  return {
    type: GET_GREETINGS_REQUEST,
  };
};

export function getGreetingsSuccess(json) {
  return {
    type: GET_GREETINGS_SUCCESS,
    json,
  };
}
