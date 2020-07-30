import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { userContext } from "../../user-context";

function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  const { login } = useContext(userContext);

  let { from } = location.state || { from: { pathname: "/" } };
  let onlogin = () => {
    // history.replace(from);
    login();
    history.push(from);
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={onlogin}>Log in</button>
    </div>
  );
}

export default LoginPage;
