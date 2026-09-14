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