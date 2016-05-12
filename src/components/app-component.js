/**
 * @description Application component.
 */

import React from 'react';
import { EventEmitter2 } from 'eventemitter2';
import TodoAction from '../actions/todo-action';
import TodoStore from '../stores/todo-store';
import TodoListComponent from './todo-list-component';
import FormComponent from './form-component';

const dispatcher = new EventEmitter2;
const action     = new TodoAction(dispatcher);
const store      = new TodoStore(dispatcher);

export default class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: store.getAll(),
    };
  }

  render() {
    return (
      <div id="app">
        <h1>Todo Application Sample</h1>
        <TodoListComponent todos={this.state.todos} />
        <FormComponent handleOnClick={text => action.addTodo(text)} />
      </div>
    );
  }
}
