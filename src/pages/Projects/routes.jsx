import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
} from 'react-router-dom';

import ProjectItem from '../../components/ProjectItem';

const Routes = () => {
  const {path} = useRouteMatch();
  console.log('path: ', path)
  return (
    <Switch>
      <Route exact path={`${path}`}>
        <Redirect to={`${path}/Trybe`}/>
      </Route>
      <Route path={`${path}/:course`}>
        <ProjectItem />
      </Route>
    </Switch>
  );
}

export default Routes;