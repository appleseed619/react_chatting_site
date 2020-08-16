import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Chat from './components/Chatting/Chat';
import Join from './components/Chatting/Join';
import Gallary from './components/PhotoGallary';
import LandingPage from './components/LandingPage';

const App = () => (
  <Router>
    <Route path='/' exact component={LandingPage} ></Route>
    <Route path='/gallary' exact component={Gallary}></Route>
    <Route path='/join' exact component={Join}></Route>
    <Route path='/chat' component={Chat}></Route>
  </Router>
)

export default App;