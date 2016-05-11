/**
 * @description Todo list item component.
 */

import React from 'react';

export default class TodoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      text: this.props.text,
    };
  }

  render() {
    return (
      <li key={this.state.id}>
        {this.state.text}
      </li>
    );
  }
}
