// I)useState hooks:
//   When we call setCount:
//    1-React updates the state value.
//    2-React re-renders the component.
//    3-useState gives us the new value.
//    4-Our UI shows the updates count.
//   And that's how we update the UI:
import { useState } from "react";

export const Counter = () => {
    //[currentValue, setterFunction] = useState(initialValue)
    const [count, setCount] = useState(0);

    console.log("Counter component rendered with count:", count);

    const handleClick = () => {
        setCount(count + 1);
    };

    return <button onClick={handleClick}>Count: {count}</button>;
};

//  And this how we resolved the issue:
//  The state persist between renders, and updating it triggers new rendering.

// A-Lazy initialization:
//   An interesting feature of useState() is when you pass a function as argument, that is rendered only in first load, it useful 
//   when we have any expensive computation we need to do to calculate the initial state like:
//    -Rendering from local storage.
//    -Fetching data from an API.
//    -Doing any other heavy computation.

// II)Rules of hooks:
//    Rule1: Only call hooks at the top level of your function. (Top level means directly in the function body, before
//           any is statements, loops, or early returns).
//    Rule2: Only call hooks from React functions.

// III)Why Rules of hooks exists ?
//     -The answer is PREDICTABILITY.
//     -React needs to know that every time your component renders, it will call the exact same hooks in the exact same order.
//     -This lets React:
//        -Keep track of state between renders.
//        -Know which useState call corresponds to which piece of state.
//        -Optimize performance.
//        -Provide helpful error messages.
