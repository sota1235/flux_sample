/**
 * @description Todo list item component.
 */

import React from 'react';

export default class TodoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
    };
  }

  render() {
    return (
      <li>{this.state.text}</li>
    );
  }
}
