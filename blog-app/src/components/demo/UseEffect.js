import { useEffect, useState } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  // Restricting the callback to execute only at the time of intial rendering of component
  //   useEffect(() => {
  //     console.log("effect works!");
  //   }, []);

  // Restricting the callback to execute Whenever mentioned dependency changes
  //   useEffect(() => {
  //     console.log("Effect works!");
  //   }, [toggle]);

  // Clean up will fire before the callback, after the initial rendering
  // Clean up will also fire just before component detech from browser
  useEffect(() => {
    console.log("Effect works for Counter");
    return () => {
      console.log("Clean up!");
    };
  }, [counter]);

  return (
    <div className="container">
      <h1>Use Effect Works!</h1>
      <button
        className="btn btn-primary mx-4"
        onClick={() => setCounter(counter + 1)}
      >
        {counter}
      </button>
      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <p>Magic Content</p>}
    </div>
  );
};

export default UseEffect;
