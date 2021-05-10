import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from './components/Container';
import { ConfirmList } from './components/ConfirmList';

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Container />
      </Route>
      <Route path="/confirm" exact>
        <ConfirmList />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
