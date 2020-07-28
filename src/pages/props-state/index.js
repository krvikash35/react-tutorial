import React from "react";
import { Example1Container } from "./exampl1";

const readme = (
  <div>
    <h3>Props and State</h3>
    <ul>
      <li>
        note a difference between jsx element and component, the way the are
        used
      </li>
      <li>
        mount, update(rerender when some state of that component changes),
        unmount
      </li>
      <li>this is read1</li>
    </ul>
  </div>
);

function PropsStatePage() {
  return (
    <div>
      {readme}
      <Example1Container />
    </div>
  );
}

export default PropsStatePage;
