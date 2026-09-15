// I) Props:
//   Props are properties (arguments) of a function, they make component dynamic and truly reusable.
//   To use them you have to add it when you invoke a component using the props object, by passing to it any JS value
//   including function, arrays, objects and JSX.
// example:

export const Welcome = (props) => {
  return <h2>Welcome, {props.name} a.k.a {props.alias}!</h2>;
}

//   If we want to use this props in a component with a lot of arguments, we can use destructuring 
//   to make it more easier to read and write.
//   So destructuring is a JS syntax that makes it possible to unpack values from arrays or properties from object
//   into distinct variables. 
// example: 

export const Welcome2 = ({ name, alias }) => {
  return <h2>Welcome, {name} a.k.a {alias}!</h2>;
}

// II) Props Pattern:
//   We have multiple patterns that can be repeated: 
//   1- Default props:
//     -The default value is only used if the props missing ot if we pass undefined.
//     -If we pass null or 0, the default value won't be used.

// In the argument bellow we can see name and message provided with a default value that will be showed if 
// the value when the component will be invoked aren't specified.
export const Greeting = ({name= "Guest", message="Hello"}) => {
    return(
        <h2>
            {message}, {name}
        </h2>
    );
};

//  2- Forwarding props with spread operator:
//    - Using spread operator another JS syntax by adding it as an argument to unfold values of any number of arguments from
//      a component inside of a new one or multiple arguments in itself.
// example: First we create our UserProfile component
export const UserInfo = ({name, age, city, email}) => {
    return(
        <div>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <p>Email: {email}</p>
        </div>
    );
}

// As you can see, the props of UserInfo will be available in UserCard
// without the need of rewritting it again and making it 
export const UserCard = ({id, ...rest}) => {
    return (
        <div>
            <h2>User {id} Details</h2>
            <UserInfo {...rest} />
        </div>
    );
}

//  3- Passing JSX as children: 
//    -In React we can nest element inside each other, we can do it by pasing the argument "children"
//     to the component structure, and when the component will be invoked nest element inside of it.
export const CardWrapper = ({title, children}) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <div className="card-content">{children}</div>
        </div>
    );
}

// When the function will be invoked in the App component:
<CardWrapper title="User Profile">
        <p>Bruce Wayne</p>
        <p>batman@jl.com</p>
        <button>Edit Profile</button>
</CardWrapper>
