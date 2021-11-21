import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AllRobots from './AllRobots';
import AllProjects from './AllProjects';
import singleProject from './singleProject';
import singleRobot from './singleRobot';
import AddOneProject from './AddOneProject';

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
            <Route
              exact
              path="/projects/:projectId"
              component={singleProject}
            />
            <Route exact path="/robots/:robotId" component={singleRobot} />
            <Route exact path="/projects" component={AddOneProject} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Routes;
