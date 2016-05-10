/**
 * @description Application component.
 */

import React from 'react';
import TodoAction from '../actions/todo-action';
import TodoStore from '../stores/todo-store';
import { EventEmitter2 } from 'eventemitter2';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div id="app">
        {"todo"}
      </div>
    );
  }
}
