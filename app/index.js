var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css'); // Ensures css gets bundled along with everthing else.

var App = require('./components/App');

ReactDOM.render(
    <App />,
    document.getElementById('app')
);