import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getGreetings } from '../redux/greetings/greetings';

class Greeting extends React.Component {
  render() {
    const { greetings } = this.props;
    const greetMessage = greetings.map((greeting) => {
      return <li>{greeting.message}</li>;
    });
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
        <ul>{greetMessage}</ul>
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
