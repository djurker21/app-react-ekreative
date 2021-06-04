import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Videos } from "./pages/Videos";
import { Login } from "./pages/Login";
import {Video} from "./pages/Video";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/video/:videoId" children={<Video />} />
          <Route path="/videos">
            <Videos />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
