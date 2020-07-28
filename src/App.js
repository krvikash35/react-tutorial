import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import HelloWorldPage from "./pages/hello-world";
import PropsStatePage from "./pages/props-state";
import ContextPage from "./pages/context";
import InputEventPage from "./pages/input-event";
import LifecyclePage from "./pages/lifycycle";
import RoutingPage from "./pages/routing";

function SideBar() {
  return (
    <div className="sidebar">
      <Link to="/hello-world"> Hello World </Link>
      <Link to="/props-state"> Props and State </Link>
      <Link to="/lifecycle">Component Lifycycle </Link>
      <Link to="/input-event">Input and Event</Link>
      <Link to="/context">Context</Link>
      <Link to="/routing">Routing</Link>
    </div>
  );
}

function Content() {
  return (
    <div className="content">
      <Switch>
        <Route path="/hello-world">
          <HelloWorldPage />
        </Route>

        <Route path="/props-state">
          <PropsStatePage />
        </Route>

        <Route path="/input-event">
          <InputEventPage />
        </Route>

        <Route path="/context">
          <ContextPage />
        </Route>

        <Route path="/lifecycle">
          <LifecyclePage />
        </Route>

        <Route path="/routing">
          <RoutingPage />
        </Route>
      </Switch>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
