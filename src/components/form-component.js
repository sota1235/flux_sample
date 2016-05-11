/**
 * @description Form for creating new todo.
 */

import React from 'react';

export default class FormComponent extends React.Component {

  render() {
    return (
      <div id="form-component">
        <input type="text" placeholder="Enter todo description" />
        <button onClick={this.props.handleOnClick}>Add new todo</button>
      </div>
    );
  }
}
