import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StepOne from '../Components/StepOne/brain'
import StepTwo from '../Components/StepTwo/brain'
const RouterApp = () => {
  return(
    <Router>
      <Switch>
        {/* <Route path="/">
          <StepOne />
        </Route> */}
        <Route path="/">
          <StepTwo />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouterApp