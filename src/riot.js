/**
 * @description Main file for riot.js sample.
 */

import riot  from 'riot';
import todos from './tags/todos.tag';

riot.mount('div#app-mount', todos);
