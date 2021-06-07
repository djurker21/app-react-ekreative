import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Videos } from "./pages/Videos";
import { Login } from "./pages/Login";
import { SingleVideo } from "./pages/SingleVideo";
import { Home } from "./pages/Home";
import { PrivateRoute } from "./pages/PrivateRoute";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/video/:videoId" children={<SingleVideo />} />
          <Route path="/videos">
            <Videos />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
