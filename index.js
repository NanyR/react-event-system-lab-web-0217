import React from 'react';
import ReactDOM from 'react-dom';

const Keypad = require('./components/Keypad');
const EyesOnMe = require('./components/EyesOnMe');

ReactDOM.render(
  <div>
    <Keypad />
    <EyesOnMe />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
