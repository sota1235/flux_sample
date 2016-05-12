/**
 * @description Base class for Store (on Flux).
 */

import BaseStore            from './base-store';
import { uniqueId, reject } from 'lodash';

export default class TodoStore extends BaseStore {
  /**
   * @param {EventEmitter2} dispatcher
   * @param {Object} defaultData
   */
  constructor(dispatcher, defaultData = []) {
    super(dispatcher, defaultData);

    this.dispatcher.on('ADD_TODO', this.addTodo.bind(this));
  }

  /**
   * @param {string} text
   */
  addTodo(text) {
    const id = uniqueId();
    this.data.push({ id, text });
    this.emitChangeEvent();
  }

  /**
   * @param {number} id
   */
  removeTodo(id) {
    this.data = reject(this.data, { id });
    this.emitChangeEvent();
  }
}
