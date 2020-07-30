import React, { createContext, useState, useContext } from "react";
import css from "./index.module.css";
import componentImg from "./react-comp-heiarchy.png";

const readme = (
  <div>
    <h2>React Context: component communication without props drilling</h2>
    <ul>
      <li>
        <code>Props drilling</code> is anti-pattern in which ancessetor
        component has pass props through all of its descendent component even if
        it is not required. i.e C1 need to pass some data to C4, it has to first
        pass to C2 and then C2 will pass to C4 which is unnecessary.
      </li>
      <li>
        <img src={componentImg} />
      </li>
      <li>
        this kind of problem can be solved with central state management, where
        one component directly subscribe to other component for any changes.
        redux or react-context api can be used to solved this.
      </li>
    </ul>
  </div>
);

const userContext = createContext();

const UserContextProvider = (props) => {
  const [name, setName] = useState("vikash");

  const reverseName = () => {
    const newName = name.split("").reverse().join("");
    setName(newName);
  };
  return (
    <userContext.Provider value={{ name, reverseName }}>
      {props.children}
    </userContext.Provider>
  );
};

const C4 = () => {
  const { reverseName } = useContext(userContext);
  return (
    <div className="comp">
      c4
      <button onClick={reverseName}>reverse name</button>
    </div>
  );
};

const C3 = () => {
  const { name } = useContext(userContext);
  const a = useContext(userContext);
  console.log("a", a);
  return (
    <div className="comp">
      c3
      <div>name: {name}</div>
    </div>
  );
};

const C2 = () => {
  return (
    <div className="comp">
      <div>c2</div>
      <C4 />
    </div>
  );
};

const C1 = () => {
  return (
    <div className="comp">
      <div>c1</div>
      <div className="c1">
        <C2 />
        <C3 />
      </div>
    </div>
  );
};

function ContextPage() {
  return (
    <UserContextProvider>
      <div>
        {readme}
        <C1 />
      </div>
    </UserContextProvider>
  );
}

export default ContextPage;
