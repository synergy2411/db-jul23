import { useState } from "react";

const Output = () => {
  const [toggle, setToggle] = useState(false);

  const toggleClickHandler = () => setToggle(true);

  return (
    <div>
      <h1>Output works!</h1>
      <button onClick={toggleClickHandler}>Toggle</button>

      {toggle && <p>Toggle is true</p>}
      {!toggle && <p>Toggle is false</p>}
    </div>
  );
};

export default Output;
