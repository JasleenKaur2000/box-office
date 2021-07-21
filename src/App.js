import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is homepage.
      </Route>
      <Route exact path="/starred">
        This is starred.
      </Route>
      <Route>ERROR : This is 404 page.</Route>
    </Switch>
  );
}

export default App;