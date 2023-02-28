import React from 'react';

export class Greeting extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.firstName}!</h1>
        <h3>Please give my regards to:</h3>
        <ul>{this.props.children}</ul>
      </div>
    ); 
  }
}

Greeting.defaultProps = {
  firstName: 'world',
};