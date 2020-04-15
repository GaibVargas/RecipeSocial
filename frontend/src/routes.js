import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Recipe from './pages/Recipe';
import New from './pages/New';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/home' component={Home} />
        <Route path='/profile/:id' component={Profile} />
        <Route path='/recipe/:id' component={Recipe} />
        <Route path='/new' component={New} />
      </Switch>
    </BrowserRouter>
  );
}
