/**
 * @description Main script for app.
 */

import React from 'react';
import { render } from 'react-dom';
import AppComponent from './components/app-component';

render(
  <AppComponent />,
  document.getElementById('todo-app')
);
