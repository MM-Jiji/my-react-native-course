//  I)Updating the UI is a 3 phase process:
//    -The trigger phase
//    -The render phase
//    -The commit phase

//    A)Trigger Phase:
//      This happens the moment you call a state setter function like setCount().
//      You're not updating the UI yet. So React put that component in a list of component that need
//      to be update.

//    B)Render Phase:
//      -React calls your component function again.
//      -React figures out wich parts of the UI, if any need to be updated.
//      -Re-running the function doesn't immediately change what's on screen.

//    C)Commit Phase:
//      -React takes the changes it calculated during the render phase and applies then to the DOM.

//  II)How setCount update workes:
//     lets takes this code as exemple:
import { useState } from "react";

export const SimpleCounter = () => {
    console.log("SimpleCounter component rendered!");
    
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={setCount(count + 1)}>Increment</button>
        </div>
    );
};

//      1-You call setCount(count + 1): (trigger phase).
//      2-React markes your component as needing an update(trigger phase).
//      3-React calls your component function again(render phase).
//      4-Your function returns new JSX with the updates count(render phase).
//      5-React compares this render with the previus one and figures out what chnaged(render phase).
//      6-React updates only what changed in the actual DOM (commit phase).


//  III)State as a snapshot:
//    -In React state updates are not immediate.
//    -When you call setState, you're scheduling an update for the next render.
//    -Inside your current render, the state values won't change.
//    -They're a snapshot and snapshots don't change.
//    -If you log the count inside your event handler you'll always get the same value.
//    -Think of it like taking a photo. Once you take the photo, the people in it don't move,
//     even if the real people walk away.
//    -State in a render is like that photo it's frozen at that moment in time.

//  IV)Multiple state updates in a row
//     Throughout the trigger phase, our snapshot of state is 0 and we're only queueing updates:
//       -setCount(0 + 1) will queue an update to 1.
//       -setCount(0 + 5) will queue an update to 5.
//       -setCount(0 + 10) will queue an update to 10.

//     The last update wins, and only when the render phase happens does count actually becomes 10.

//     Even if you were to add a setTimeout, the count would still be 0, because the state is still 
//     a snaphot and frozen in time.
export const SimpleCounterV2 = () => {
    const [count, setCount] = useState(0);

    console.log("Render phase: Component rendering with count = ", count);
    

    const handleClick = () => {
        setCount(count + 1);
        console.log("After setCount(count + 1), count is: ", count);
        setCount(count + 5);
        console.log("After setCount(count + 5), count is: ", count);
        setCount(count + 10);
        console.log("After setCount(count + 10), count is: ", count);
        setTimeout(() => {
            console.log("After 2 seconds, count is: ", count);
        }, 2000);
    };

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
};