import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider, connect } from 'react-redux';
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home/components/HomeView';
import CounterRoute from './Counter/containers/CounterContainer';
import CodeEditor from './CodeEditor/components/CodeEditor';
import BattlePage from './BattlePage/components/Problem';

export const createRoutes = (store) => (
  <Route path="/" component={CoreLayout} >
    <Route path="code_editor" component={CodeEditor} />
    <Route path="counter" component={CounterRoute} />
    <Route path="battlePage" component={BattlePage} />
    <IndexRoute component={Home}/>
  </Route>
)

export default createRoutes
