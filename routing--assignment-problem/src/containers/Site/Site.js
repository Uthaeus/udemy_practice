import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class Site extends Component {
  render() {
    return(
      <div>
        <header>
          <nav>
            <ul>
              <li><NavLink>Users</NavLink></li>
              <li><NavLink>Courses</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route />
          <Route />
        </Switch>
      </div>
    );
  }
}


export default Site;