// I)UI never changes:
//   An important point about React, that it doesn't know it needs to update the screen. So when we 
//   change a regular variable, it has no idea that anything happend. And that leads to:
//      -Changing variables doesen't make React update the screen (no re-renders).
//      -Variables reset every time the component renders (no persistance).

//Exemple: 
//Here when we invoke the compoenent in my App. When we click on the button the value of count increases and
//and we see the messages display in the console, but here is the catch nothing changes in the UI. React doesn't know 
//that it's need to update it.
export const Counter = () => {

    let count = 0;
    console.log("Counter component rendered");

    const handleClick = () => {
        count = count + 1;
        console.log(count);
    };

    return <button onClick={handleClick}>Count: {count}</button>;
};

//  II)The solution: State
//     State is a componenet's memory, it is special data that:
//      -Triggers a re-rendwer when it changes (solving our screen update problem).
//      -Persists between renders(solving our reset problem).
//     Some exemples of interactif features we use:
//      -Shopping carts that show how many items you're added.
//      -Forms that display what you're typing.
//      -Modals that open and close.

//  III)What is State:
//     -State is like the components personal memory.
//     -It belongs to the component and the component can change it.
//     -State is what makes React component truly interactive.
//     -Without state, we're basically just creating fancy HTML templates.
//     -With state, we can build real apps.

//  IV)When do you need state?
//     We can ask ourself some question to find out:
//        -Does this data need to change over time?
//        -Should the UI update when this data changes?
//        -Does the component need to "REMEMBER" this between renders.
//     If the answer is yes, you need state.

//  V)Hooks:
//    -React makes adding state to components super easy with something called hooks.
//    -Hooks are special functions that let you "hook into" React features.
//    -The most important hook for managing state is called useState.
