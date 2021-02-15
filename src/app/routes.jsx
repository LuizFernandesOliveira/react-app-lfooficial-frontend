import React from 'react';

import {
  Switch,
  Route
} from 'react-router-dom';

import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contacts from '../pages/Contacts';
import NotFound from '../pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/contacts" component={Contacts}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  );
}

export default Routes;