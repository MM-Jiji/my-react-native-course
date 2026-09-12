// I)Event Handler
//   When we want to respond to event in React we use event handler.
//   And you do it with two steps:
//    -Defining a function that should be executed when the event occurs.
//    -Assigning the function to s special prop that start with "on".
export const CustomButton = () => {

    const handleClick = () => {
        alert("You clicked the button");
    };

    return <button onClick={handleClick}>Like</button>;
};
