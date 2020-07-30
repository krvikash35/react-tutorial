import React, { useContext } from "react";

import "./App.css";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import HelloWorldPage from "./pages/hello-world";
import PropsStatePage from "./pages/props-state";
import ContextPage from "./pages/context";
import InputEventPage from "./pages/input-event";
import LifecyclePage from "./pages/lifycycle";
import ReduxPage from "./pages/redux";
import DashboardPage from "./pages/protected-routing-1";
import ProfilePage from "./pages/protected-routing-2";
import LoginPage from "./pages/login";
import { UserContextProvider, userContext } from "./user-context";

function SideBar() {
  return (
    <div className="sidebar">
      <Link to="/hello-world"> Hello World </Link>
      <Link to="/props-state"> Props and State </Link>
      <Link to="/lifecycle">Component Lifycycle </Link>
      <Link to="/input-event">Input and Event</Link>
      <Link to="/context">Context</Link>
      <Link to="/redux">Redux</Link>
      <Link to="/dashboard">Protected Route 1: dashboard</Link>
      <Link to="/profile">Protected Route 2: profile</Link>
    </div>
  );
}

const PrivateRoute = (props) => {
  const { children, ...rest } = props;
  const { isLoggedin } = useContext(userContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

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

        <Route path="/redux">
          <ReduxPage />
        </Route>

        <PrivateRoute path="/dashboard">
          <DashboardPage />
        </PrivateRoute>

        <PrivateRoute path="/profile">
          <ProfilePage />
        </PrivateRoute>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route>Not found</Route>
      </Switch>
    </div>
  );
}

function App() {
  return (
    <UserContextProvider>
      <div className="app">
        <SideBar />
        <Content />
      </div>
    </UserContextProvider>
  );
}

export default App;
