import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ThreadPage from './pages/ThreadPage';
import MessagePage from './pages/MessagePage';

const App = () => (
  <Router>
    <>
      <Route exact path="/" component={ThreadPage} />
      <Route path="/:id" component={MessagePage} />
    </>
  </Router>
);

export default App;
