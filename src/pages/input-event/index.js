import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  memo,
  useCallback,
} from "react";

const readme = (
  <div>
    <h2>Input, Events and ref</h2>
    <ul>
      <li>how to handle userinput?</li>
      <li>
        user input are generated with event and we need to define event handler
        to process those event?
      </li>
    </ul>
  </div>
);

const sampleApiCall = () => {
  console.log("called");
};

const SampleComp = (props) => {
  console.log("rendering");
  return <div>sampel compo</div>;
};

const SampleCompMemo = memo(SampleComp);

function UserRegisterationForm() {
  const [name, setName] = useState("");
  const [isMarried, setIsMarried] = useState("");
  const nameInputRef = useRef();
  const resultContainertRef = useRef();

  const onSubmit = () => {
    const result = { name, isMarried };
    console.log("form submitted", result);
    resultContainertRef.current.textContent = JSON.stringify(result);
  };

  const onSubmitCB = useCallback(onSubmit, []);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  sampleApiCall();
  return (
    <div>
      <h4>User Registration form</h4>
      <div>
        <span>Name:</span>
        <input
          ref={nameInputRef}
          type="text"
          value={name}
          onChange={(e) => {
            console.log("cahnge", e.target.value);
            setName(e.target.value);
          }}
        />
      </div>

      <div>
        <span>Married:</span>
        <input
          type="checkbox"
          checked={isMarried}
          onChange={(e) => setIsMarried(e.target.checked)}
        />
      </div>

      <div>
        <button onClick={onSubmit}>Submit</button>
      </div>

      {name === "vik" ? (
        <div>this is vikash</div>
      ) : (
        <div>this is not vikash</div>
      )}
      <div ref={resultContainertRef}></div>

      <SampleCompMemo name={name} onSubmit={onSubmitCB} />
    </div>
  );
}

export default function () {
  return (
    <div>
      {readme}
      <UserRegisterationForm />
    </div>
  );
}
