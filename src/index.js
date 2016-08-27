import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
// import SearchClient from './components/SearchClient';
import Welcome from './components/Welcome';
// import ClientsPage from './components/ClientsPage';
// import AnimalsPage from './components/AnimalsPage';
import Main from './components/Main';

render(
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
    <IndexRoute component={Welcome}></IndexRoute>
    </Route>

  </Router>,
  document.getElementById('root')
);


// <Route path='clients' component={ClientsPage}></Route>
// <Route path='seachClient' component={SearchClient}></Route>
// <Route path='animals' component={AnimalsPage}></Route>
