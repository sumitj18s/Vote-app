import React from "react";
import { Route, Switch } from "react-router-dom";
import Questions from "../pages/Questions";
import QuestionDetail from "../pages/QuestionDetails";

const Routing = () => (
  <Switch>
    <Route exact path="/detail" component={QuestionDetail} />
    <Route path="/" component={Questions} />
  </Switch>
);

export default Routing;
