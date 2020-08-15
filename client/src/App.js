import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Chat from './components/Chat';
import Join from './components/Join';

const App = () => (
  <Router>
    <Route path='/' exact component={Join}></Route>
    <Route path='/chat' component={Chat}></Route>
  </Router>
)

export default App;