import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/layouts/Home.jsx';
import Employees from './components/content/Employees.jsx';

const componentRoutes = {
  component: Home,
  path: '/',
  indexRoute: { component: Employees },
  childRoutes: [
    {
        path: 'employees',
        getComponent(location, cb) {
            System.import('./components/content/Employees.jsx')
                .then(module => cb(null, module.default));
        }
    },
    {
      path: 'departments',
      getComponent(location, cb) {
        System.import('./components/content/Departments.jsx')
          .then(module => cb(null, module.default));
      }
    }
  ]
};

const Routes = () => {
  return (
    <Router history={hashHistory} routes={componentRoutes} />
  );
};

export default Routes;
