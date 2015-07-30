import React from 'react'
import { Route, DefaultRoute } from 'react-router'
import AppContainer from './components/AppContainer'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'


export default (
  <Route path='/' handler={AppContainer}>
    <DefaultRoute name='home' handler={HomePage} />
    <Route name='about' handler={AboutPage} />
  </Route>
);