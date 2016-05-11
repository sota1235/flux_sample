/**
 * @description Todo list component.
 */

import React from 'react';
import TodoComponent from './todo-component';

export default class TodoListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: this.props.todos,
    };
  }

  render() {
    return (
      <ul>
        {this.state.todos.map(todo =>
          <TodoComponent
            id={todo.id}
            text={todo.text}
          />
        )}
      </ul>
    );
  }
}
