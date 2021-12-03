import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { HomePage, TablePage } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
