import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import routes from '../routes';

const Landing = lazy(() => import("../views/Home"));

function WaitingComponent(Component) {
  return () => (
    <Suspense fallback="">
      <Component />
    </Suspense>
  );
}

function RootRouter() {
  return (
    <Switch>
      <Route path={routes.home} exact component={WaitingComponent(Landing)} />
    </Switch>
  );
}
export default RootRouter;