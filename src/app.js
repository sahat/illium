// todo: search symbol or company name with auto-completion
// todo: sidebar + main content
// todo: set notifications for price change
// todo: offline support with previous data
// todo: d3.js zoomable stock charts
// todo: little icon indicator with stock price (green/red) in taskbar
// todo: horizontal full-width stock ticker
// todo: react-sparkline


import React from 'react'
import Router from 'react-router';
import debug from 'debug';
import AppContainer from './components/AppContainer';
import routes from './routes'
import './app.css'

Router.run(routes, function(Handler) {
  debug('Router.run', Handler);
  React.render(<Handler />, document.getElementById('react-root'))
});
