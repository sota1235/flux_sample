/**
 * @description Action class about todo.
 */

import { EventEmitter2 } from 'eventemitter2';

export default class TodoAction {
  /**
   * @param {EventEmitter2} dispatcher
   */
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  /**
   * @description Publish creating todo action.
   * @param {string} text
   */
  addTodo(text) {
    this.dispatcher.emit('ADD_TODO', text);
  }
}
