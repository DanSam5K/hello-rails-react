import React from 'react';

// import PropTypes from 'prop-types';

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
        <br />
        <ul>{greetItem}</ul>
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
export default Greeting;
