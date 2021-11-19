import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AllRobots from './AllRobots';
import AllProjects from './AllProjects';

function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/robots">All Robots</Link>
          <Link to="/projects">All Projects</Link>
        </nav>
        <div>
          <main>
            <h1>
              Welcome to StackBot Project Management: your robot employees are
              awaiting assignments!
            </h1>
          </main>
          <Switch>
            <Route exact path="/robots" component={AllRobots} />
            <Route exact path="/projects" component={AllProjects} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Routes;
