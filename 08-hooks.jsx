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