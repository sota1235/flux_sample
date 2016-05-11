/**
 * @description Form for creating new todo.
 */

import React from 'react';

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    const todoText = this.refs.todoText.value.trim();
    this.refs.todoText.value = '';
    this.props.handleOnClick(todoText);
  }

  render() {
    return (
      <div id="form-component">
        <input type="text" placeholder="Enter todo description" ref="todoText" />
        <button onClick={this.handleOnClick}>Add new todo</button>
      </div>
    );
  }
}
