// I) What is JSX:
//  JSX is a syntax extension for JS that lets us write markup that looks similar to HTML, but with the full power of JS.
//  It is a syntaxic sugar that comes to make React code easier to write and read. So when I file is saved the JSX is transpiler to creatElement() function.
// example:

// React without JSX:
import React from "react";

function ButtonWithoutJsx() {
   return  React.createElement(
    "button", 
    {
        className: "btn",
        onClick: () => {},
    },
    "Click me"
   );
}

// React JSX:
const Button = () => {
    const btnClick = () => {}
    return (
        <button className="btn" onClick={btnClick}>
            "Click me"
        </button>
    );
}


// II) JSX Rules:
//    Rule 1:
//     -Every component must return a single root element, that means we have to wrap our components if we want to group them in a div 
//      or wrapper element like <React.Fragment> some element </React.Fragment>. Or by replacing the wrapper element with an empty tag.
//      example: 
// With wrapper element:
export const Card = () => {
    return (
        // Here you can replace the bellow tag with div tag
        <React.Fragment>        
            <h2>Welcome</h2>
            <p>
                This is a <span id="highlight">paragraph</span> with text
            </p>
            <button>Click me</button>
        </React.Fragment>
    );
}

// With <> ... </> element:
export const Card2 = () => {
    return (
        <>        
            <h2>Welcome</h2>
            <p>
                This is a <span id="highlight">paragraph</span> with text
            </p>
            <button>Click me</button>
        </>
    );
}


//   Rule 2:
//    -Every single tag must be properly closed, even if the html tag didn't need to be closed.

export const ContactForm = () => {
    return(
        <form>
            <input type="text" placeholder="Your name" />
            <br />
            <input type="text" placeholder="Your email" />
        </form>
    );
}

//    Rule 3:
//     -Attribute names must be written in CamelCase, since those attributes become keys of JS object, they need to be valid JS varialble name

export const StyledForm = () => {
    return(
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" className="form-input" />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="form-input" tabIndex="1" />
        </form>
    );
}

//    Rule 4:
//     -We can embed JS expression directly in the JSX code.

export const CandidateProfile = () => {
    const name = "Peter Parker";
    const role = "Web Developer";
    const yearsOfExperience = 5;


    return(
        <>
            <h2>{name}</h2>
            <p>
                {role} with {yearsOfExperience} years of experience.
            </p>
        </>
    );
}
