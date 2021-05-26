import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { useAppContext } from "./libs/contextLibs";
import Home from "./Components/Home/Home";
import Staking from "./Components/Staking/Staking";
import Mining from "./Components/Mining/Mining";
import Help from "./Components/Help/Help";
import NotFound from "./Components/NotFound/Notfound";
import Layout from "./Components/Layout";
import Login from "./Components/login/Login";
export default function Routes() {
  const { isAuthenticated } = useAppContext();
  console.log(isAuthenticated);
  return (
    <Router>
      <Route
        render={(props) => {
          if (isAuthenticated === true) {
            return (
              <Layout {...props}>
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/home" component={Home}></Route>
                  <Route path="/staking" exact component={Staking}></Route>
                  <Route path="/mining" component={Mining}></Route>
                  <Route path="/help" component={Help}></Route>

                  {/* Finally, catch all unmatched routes */}
                  <Route>
                    <NotFound />
                  </Route>
                </Switch>
              </Layout>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route path="/login" component={Login} />
    </Router>
  );
}
