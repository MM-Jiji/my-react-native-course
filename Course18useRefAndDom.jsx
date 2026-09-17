// I)Ref and useRef:
//   *A ref is a way to store a mutable value that:
//      -Persist across render.
//      -Does not cause a re-render when it changes.

//   *React gives us refs through a hook called useRef:
//      -We can create a ref using the useRef hook.
//      -It accepts an initial value and returns an object with a singleproperty called current
//       which holds the value of the ref.
//      -We can use ref to store values like initial IDs, timeout IDs...
//exemple:

import { useState, useRef } from "react";

export const StopWatch = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <h2>Time: {time}</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};

// II)Manipulating the DOM with Ref:
//    -Refs gives you the possibility to handle the DOM.
//    -Ref are an escape hatch.
//    -We should use them sparingly.
//    -If you find yourself constantly manipulating the DOM, it usually means you're fighting
//     React instead of working with it.
//exemple:

import { useRef } from "react";

export const FocusInput = () => {
  const inputRef = useRef(null);

  const handleInputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter your name" />
      <button onClick={handleInputFocus}>Focus Input</button>
    </div>
  );
};
