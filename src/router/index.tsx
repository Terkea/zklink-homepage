import React, {lazy, Suspense} from 'react'
import {Router, Switch, Route} from "react-router-dom";
import history from './history'
import ScrollToTop from "./ScrollToTop";
import PrivateRoute from "./private";
// import LoadingPanel from './../components/LoadingPanel'
// import NotFound from "../components/NotFound";

import Index from "../views/Index";

export default (
  <Router history={history}>
    {/*<ScrollToTop/>*/}
    <Suspense fallback={null}>
      <Switch>
        <PrivateRoute path="/" component={Index}/>
        {/*<Route path="*" component={NotFound}/>*/}
      </Switch>
    </Suspense>
  </Router>
)