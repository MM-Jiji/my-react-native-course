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


//  II)Event handlers as props:
//    When we reuse a component we want the parent component to control the behaviours,
//    without writting different event in the parent button. For that we need the child component to tell its parent
//    that it was clicked, so the parent run the logic.

//exempl:
// First the child button:
export const ActionButton = ({ text, onClick }) => {
    return <button onClick={onClick}>{text}</button>;
};

// With its first parent: Contact

// import { ActionButton } from "./ActionButton" //This import serve as the Child and parent will not be in the same module
export const Contact = () => {

    const handleSendMessage = () => {
        alert("Sending your message");
    };

    return (
        <div>
            <h2>Contact us</h2>
            <ActionButton text="Send Message" onClick={handleSendMessage}/>
        </div>
    )
}

// And its second parent: Newsletter

// import { ActionButton } from "./ActionButton"
export const Newsletter = () => {

    const handleSubscribe = () => {
        alert("Thank you for subscribing!");
    }
    return (
        <div>
            <h2>Subscribe to Newletter</h2>
            <ActionButton text="Subscrib" onClick={handleSubscribe} />
        </div>
    );
};