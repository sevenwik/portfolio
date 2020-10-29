import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About'
function Main() {
    return (
      <main>
          <Switch>
              <Route exact path="/portfolio" component={About} />
          </Switch>
      </main>
    );
  }
  
  export default Main;