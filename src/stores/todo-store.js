/**
 * @description Base class for Store (on Flux).
 */

import BaseStore            from './base-store';
import { uniqueId, reject } from 'lodash';

export default class TodoStore extends BaseStore {
  /**
   * @param {string} text
   */
  addTodo(text) {
    const id = uniqueId();
    this.data = Object.assign({}, this.data, { text, id });
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
