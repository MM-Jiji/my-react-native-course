// How React can take the latest state at that moment and build on top of it.
//Solution: for that, React lets you pass a function to the setter instead of a value.

import { useState } from "react";

export const PrevStateCounter = () => {
    const [count, setCount] = useState(0);

    console.log("Render phase: Component rendering with count = ", count);
    

    const handleClick = () => {
        setCount((prev) => {
            console.log("First updater fn: prev count = ", prev);
            return prev + 1;
        });

        setCount((prev) => {
            console.log("Second updater fn: prev count = ", prev);
            return prev + 5;
        });

        setCount((prev) => {
            console.log("Third updater fn: prev count = ", prev);
            return prev + 10;
        });
    };

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
};

// I)Passing function to setState:
//   In the code above setCount goes like this:
//   -setCount((prev) => prev + 1)
//    React does not run that function right away. It queues the function itself.
//   -setCount((prev) => prev + 5)
//    React queues the function.
//   -setCount((prev) => prev + 10)
//    React queues the function

//   After your event handler finishes, React goes through its list of updates(function queue):
//    1-Takes the current state value.
//      Start with prev = 0

//    2-Passes it into the updater as prev.
//      First updater: return prev + 1 ---> 1

//    3-Uses the return value of the updater function as the next state value.
//      Second updater: now prev = 1, return prev + 5 ---> 6
//      Third updater: now prev = 6, return prev + 10 ---> 16

//    Each updater uses the latest result from the previus one and not the snapshot from the event handler.

//  II)Pass Value or function ?
//     1-If your new state depends on the previous state, use an updater function.
//       setCount((prev) => prev * 2)

//     2-If you are just setting a value directly the regular syntax is fine.
//       setCount("John")

