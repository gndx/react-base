import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = ({ text }) => (
  <h1>{text}</h1>
);

ReactDOM.render(<HelloWorld text="Hello World" />, document.getElementById('app'));
