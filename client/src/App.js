import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoadingSpinner from "./UIElements/LoadingSpinner";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = React.lazy(() => import("./home/pages/home"));
const Challenge = React.lazy(() => import("./challenge/page/challenge"));

const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact>
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner />
            </div>
          }
        >
          <Home />
        </Suspense>
      </Route>

      <Route path="/challenges" exact>
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner />
            </div>
          }
        >
          <Challenge />
        </Suspense>
      </Route>

      <Redirect to="/" />
    </Switch>
  );
  return (
    <div className="App">
      <Router>{routes}</Router>
    </div>
  );
};

export default App;
