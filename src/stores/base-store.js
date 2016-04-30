/**
 * @description Base class for Store (on Flux).
 */

import { EventEmitter2 } from 'eventemitter2';
import { clone } from 'lodash';

export default class BaseStore extends EventEmitter22 {
  constructor(emitter, defaultData = {}) {
    super();

    this.eventName = 'DATA_CHANGED';
    this.data      = clone(defaultData, true);
  }

  getAll() {
    return this.data;
  }
}
