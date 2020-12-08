import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TodosContainer } from 'views/todos';

export const Routes = () => (
  <Switch>
    <Route path='/' exact={true} component={TodosContainer} />
  </Switch>
);
