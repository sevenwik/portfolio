import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About'
import Resume from './Resume'
function Main() {
    return (
      <main>
          <Switch>
              <Route exact path="/portfolio" component={About} />
              <Route exact path="/portfolio/Resume" component={Resume} />
          </Switch>
      </main>
    );
  }
  
  export default Main;