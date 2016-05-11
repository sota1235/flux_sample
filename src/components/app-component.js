/**
 * @description Application component.
 */

import React from 'react';
import { EventEmitter2 } from 'eventemitter2';
import TodoAction from '../actions/todo-action';
import TodoStore from '../stores/todo-store';
import TodoListComponent from './todo-list-component';
import FormComponent from './form-component';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div id="app">
        <h1>Todo Application Sample</h1>
        <TodoListComponent todos={[]} />
        <FormComponent handleOnClick={(text) => console.log(`create todo: ${text}`)} />
      </div>
    );
  }
}
