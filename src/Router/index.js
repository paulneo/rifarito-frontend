import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StepOne from '../Components/StepOne/brain'
import StepTwo from '../Components/StepTwo/brain'
import SuccessfulRegistration from '../Components/SuccessfulRegistration/brain'
import MyTickets from '../Components/MyTickets/'
import Ticket from '../Components/Ticket'
import Layout from './Layout'
const RouterApp = () => {
  return(
    <Router>
      <Layout>
        <Switch>
          <Route path="/registerTickets">
            <StepTwo />
          </Route>
          <Route path="/successful">
            <SuccessfulRegistration />
          </Route>
          <Route path="/Ticket">
            <Ticket />
          </Route>
          <Route path="/checkTickets">
            <MyTickets />
          </Route>
          <Route path="/">
            <StepOne />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default RouterApp