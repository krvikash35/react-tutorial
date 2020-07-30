import React, { useContext } from "react";
import { userContext } from "../../user-context";

export default function () {
  const { logout } = useContext(userContext);

  return (
    <div>
      protected route 2: Profile
      <button onClick={logout}>logout</button>
    </div>
  );
}
