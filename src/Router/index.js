import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StepOne from '../Components/StepOne/brain'
import StepTwo from '../Components/StepTwo/brain'
import SuccessfulRegistration from '../Components/SuccessfulRegistration/brain'
const RouterApp = () => {
  return(
    <Router>
      <Switch>
        {/* <Route path="/">
          <StepOne />
        </Route>
        <Route path="/stepTwo">
          <StepTwo />
        </Route> */}
        <Route path="/">
          <SuccessfulRegistration />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouterApp