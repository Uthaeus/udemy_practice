import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Site.css';
import Courses from '../Courses/Courses';
import Users from '../Users/Users';

class Site extends Component {
  
  render() {
    return(
      <div>
        <header className="Site">
          <nav>
            <ul>
              <li><NavLink
                to="/users"
                exact>Users</NavLink></li>
              <li><NavLink
                to="/courses">Courses</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route 
            path="/courses"
            component={Courses} />
          <Route
            path="/users"
            component={Users} />
          <Route
            render={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}


export default Site;