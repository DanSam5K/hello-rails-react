import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import PropTypes from 'prop-types';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';

const getGreetings = () => {
  console.log('getGreetings Actions!');
  return {
    type: GET_GREETINGS_REQUEST,
  };
};
class Greeting extends React.Component {
  render() {
    return (
      <React.Fragment>
        Message: Hello {this.props.message}
        <button
          className="getGreetingsBtn"
          onClick={() => this.props.getGreetings()}
        >
          Get Greetings
        </button>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: (state) => state.greetings,
});

const mapDispatchToProps = { getGreetings };

// Greeting.propTypes = {
//   message: PropTypes.string,
// };
export default connect(structuredSelector, mapDispatchToProps)(Greeting);
