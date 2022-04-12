import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const up = (x) => {
    setCounter(counter + x);
  };

  const down = (x) => {
    setCounter(counter - x);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="counter">
      <h2>
        {" "}
        Counter: <span>{counter}</span>
      </h2>

      <div className="btns">
        <button onClick={() => up(1)} className="btnup">
          +1
        </button>
        <button onClick={() => up(2)} className="btnup">
          +2
        </button>
        <button onClick={() => up(3)} className="btnup">
          +3
        </button>
        <button onClick={reset} className="btnr">
          Reset
        </button>
        <button onClick={() => down(1)} className="btnd">
          -1
        </button>
        <button onClick={() => down(2)} className="btnd">
          -2
        </button>
        <button onClick={() => down(3)} className="btnd">
          -3
        </button>
      </div>
    </div>
  );
}

export default Counter;
