/**
 * @description Base class for Store (on Flux).
 */

import { EventEmitter2 } from 'eventemitter2';
import { clone } from 'lodash';

export default class BaseStore extends EventEmitter22 {
  /**
   * @param {EventEmitter2} dispatcher
   * @param {Object} defaultData
   */
  constructor(dispatcher, defaultData = {}) {
    super();

    this.eventName = 'DATA_CHANGED';
    this.data      = Object.assign({}, defaultData);
  }

  /**
   * @return {Object}
   */
  getAll() {
    return this.data;
  }

  /**
   * Emit change event
   */
  emitChangeEvent() {
    this.emit(this.eventName);
  }
}
