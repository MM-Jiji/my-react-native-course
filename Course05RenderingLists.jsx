// I)Rendering lists:
//   To render a list of items in React, we need to take our data and put it in an array, 
//   then transform that array into HTML we need.
export const ProductList = () => {

    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 999,
        },
        {
            id: 2,
            name: "Phone",
            price: 699,
        },
        {
            id: 3,
            name: "Tablet",
            price: 499,
        },
    ];
    
    return (
        <div>
            <h2>Our Products</h2>
            {products.map(product => {
                return (
                    <div>
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                    </div>
                );
            })}
        </div>
    );
};

// II)Lists and Keys:
//  An important point when we use lists to render items in React is to add an identifier for the rendered object making it easy 
//  to render the element more efficiently. And to do so, we use the id element form our list or any unique value within our elements.

// III)Why does React need keys ?
//  -Keys are used by React to track the items in the list.
//  -They are crucial for React to efficiently update the UI.

// IV)Rules of key:
//  -The key prop goes on the outermost repeated element.
//  -Key is a special prop that React uses internally.

return (
        // Not adding the key prop will result in an error in the browser console
        // telling you that: Each child in a list should have a unique "key" prop.
        <div key={product.id}> 
                <h2>Our Products</h2>
                {products.map(product => {
                    return (
                        <div>
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>
                        </div>
                    );
                })}
        </div>
    );


//  V)Index as Key Anti-Pattern:
//    The problem with using index as key, is that index represents the possition of the item and not the item itself.
//    That can be lead to subtle and confusing bugs when the order of items changes in the list.

//  VI)When is it safe to use index as key ?
//    1-Your item don't have a unique ID.
//    2-The list is completely static, you never add or remove items.
//    3-The list is never reordered or filtered.
export const NameList = () => {
    const names = ["Bruce", "Clark", "Diana", "Bruce"];

    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);

    return <div>{nameList}</div>;
};