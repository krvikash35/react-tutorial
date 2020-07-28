import React, { useState, useEffect } from "react";

const readme = (
  <div>
    <h2>Component Lifecycle</h2>
    <ul>
      <li>mainly 3 phase: mount -> update-> unmount</li>
      <li>
        earlier only class based component supported these lifecycle method
      </li>
      <li>
        now with hooks <code>useEffect</code>, function based component also
        support lifecycle method
      </li>
      <li>
        infact we should try writting funtion based component only and use hooks
        to bring statefullness of class based component
      </li>
    </ul>
  </div>
);

function UserProfileFunctional() {
  const [name, setName] = useState("vikash");

  const onReverse = () => {
    const newName = name.split("").reverse().join("");
    console.log("nae", newName);
    setName(newName);
  };

  useEffect(() => {
    console.log("UserProfileFunctional mounted");
    return () => {
      console.log("UserProfileFunctional unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("UserProfileFunctional updated");
  }, [name]);

  return (
    <div>
      <h3>function based component</h3>
      <div>Name: {name}</div>
      <button onClick={onReverse}>Reverse Name</button>
    </div>
  );
}

class UserProfileClass extends React.Component {
  constructor() {
    super();
    this.state = { name: "vikash" };
    this.onReverse = this.onReverse.bind(this);
  }

  componentDidMount() {
    console.log("UserProfileClass mounted");
  }

  componentDidUpdate() {
    console.log("UserProfileClass updated");
  }

  componentWillUnmount() {
    console.log("UserProfileClass unmmounted");
  }

  onReverse() {
    const newName = this.state.name.split("").reverse().join("");
    this.setState({ name: newName });
  }

  render() {
    return (
      <div>
        <h3>class based component</h3>
        <div>Name: {this.state.name}</div>
        <button onClick={this.onReverse}>Reverse Name</button>
      </div>
    );
  }
}

export default function () {
  return (
    <div>
      {readme}
      <UserProfileFunctional />
      <UserProfileClass />
    </div>
  );
}
