import React from 'react';
import PropTypes from 'prop-types';
class Greeting extends React.Component {
  render() {
    return <React.Fragment>Message: Hello {this.props.message}</React.Fragment>;
  }
}

Greeting.propTypes = {
  message: PropTypes.string,
};
export default Greeting;
