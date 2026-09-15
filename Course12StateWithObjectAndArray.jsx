//  I)setState with Object:
//    -Always use the setter function to updates state as changing the object directly won't
//     trigger a re-render.
//    -Calling setState with an object replaces the entire object.
//    -To keep existing fields, always spread the old object first.
//    -For nested objects, spread both the outer object and the nested one.

import { useState } from "react";

export const UserProfile = () => {
    const [user, setUser] = useState({
        name: "Bruce Wayne",
        age: 30,
        email: "batman@justiceleague.com",
        adress: {
            city: "Gotham City",
            country: "USA",
        },
    });

    console.log("Component rendering, user:", user);

    const updateName = () => {
        setUser({
            ...user,
            name: "Clark Kent",
        });
    };

    const updateMultiple = () => {
        setUser({
            ...user,
            name: "Clark Kent",
            age: 31,
        });
    };

    const updateCity = () => {
        setUser({
            ...user,
            adress: {
                ...user.adress,
                city: "Metropolis",
            },
        });
    };

    return (
        <div>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>City: {user.adress.city}</p>
            <button onClick={updateName}>Change name to Clark Kent</button>
            <button onClick={updateMultiple}>Update name and age</button>
            <button onClick={updateCity}>Move to Metropolis</button>
        </div>
    );
};


//  II)setState with arrays:
//     -Always use the setter function to update state as changing the array directly won't trigger a re-render.
//     -Spread operator or concat add items.
//     -Filter to remove items.
//     -Map to update items.

import { useState } from "react";

export const TodoList = () => {
    const [items, setItems] = useState([
        { id: 1, text: "Learn React", done: false },
        { id: 2, text: "Build an app", done: false },
    ]);

    console.log("Rendering with items:", items);

    const addItems = () => {
        const newItems = {
            id: Date.now(),
            text: "Deploy to production",
            done: false,
        };
        // setItems([...items, newItems]);
        setItems(items.concat(newItems));
    };

    const removeItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const toggleDone = (id) => {
        setItems(
            items.map((item) => {
                if(item.id === id) {
                    return { ...item, done: !item.done };
                }
                return item;
            })
        );
    };

    return (
        <div>
            <ul>
                {items.map((item) => {
                    return (
                        <li key={item.id}>
                            <span
                                style={{ textDecoration: item.done ? "line-through" : "none" }} 
                            >
                                {item.text}
                            </span>
                            <button onClick={() => toggleDone(item.id)} >
                                {item.done ? "Undo" : "Done"}
                            </button>
                            <button onClick={() => removeItem(item.id)}>Delete</button>
                        </li>
                    );
                })}
            </ul>
            <button onClick={addItems}>Add item</button>
        </div>
    );
};