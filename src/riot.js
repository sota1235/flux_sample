/**
 * @description Main file for riot.js sample.
 */

var riot  = require('riot');
var todos = require('./tags/todos.tag');

riot.mount('div#app-mount', todos);
