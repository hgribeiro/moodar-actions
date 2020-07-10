import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Agendamentos from '../pages/Agendamentos';
import Main from '../pages/Main';
import Action from '../pages/Action';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/agendamentos" component={Agendamentos} />
    <Route path="/action" component={Action} />
  </Switch>
);
export default Routes;
