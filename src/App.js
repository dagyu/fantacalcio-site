import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import {RegolamentoPage} from "./pages/Regolamento"

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={RegolamentoPage}/>
      </Switch>
    </BrowserRouter>
  );
}
