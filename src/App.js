import React from "react";
import {HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css";
import {Subscribe} from "./pages/subscribe";
import {Terms} from "./pages/terms";
import Home from './pages/index';
import About from "./pages/about";
import Contact from "./pages/contact";
import Feedback from "./pages/feedback";
import Partner from "./pages/partner";
import Privacy from "./pages/privacy";
import PhdReady from "./pages/phdready";
import MasterClass from "./pages/masterclass";
import StudyOversea from "./pages/studyoversea/index";
import {WechatFloat} from "./components/wechatfloat";
import {Login} from "./pages/login";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/partner">
            <Partner />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/subscribe">
            <Subscribe />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/phdready">
            <PhdReady />
          </Route>
          <Route path="/masterclass">
            <MasterClass />
          </Route>
          <Route path="/studyoversea">
            <StudyOversea />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
      <WechatFloat />
    </div>
  );
}

export default App;
