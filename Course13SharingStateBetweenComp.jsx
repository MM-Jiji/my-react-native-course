// We share the state between component by lifting the state in the common parent component: 
// -Put that state in the closest common parent.
// -The component with useState owns the data and controls how it changes.
// -Children receive the state as props .
// -Children request changes by calling setter functions passed down from the parent.

//Like in this exemple: 
// We shared the state of the component ShoppingCart between its twop children ProductCard and CartSummary.
//Making the parent handle all the actions like (handleAddReactCourse, clearCart...), and the chlid will update
//their component based onn their parent.

import { useState } from "react";


export const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState({
        reactCourse: 0,
        vueCourse: 0
    });

    const prices = {
        reactCourse: 49.99,
        vueCourse: 39.99,
    };

    const handleAddReactCourse = () => {
        if(cartItems.reactCourse < 5) {
            setCartItems({
                ...cartItems,
                reactCourse: cartItems.reactCourse + 1,
            });
        }
    };

    const clearCart = () => {
        setCartItems({
            reactCourse: 0,
            vueCourse: 0,
        });
    };

    const handleAddVueCourse = () => {
        setCartItems({
            ...cartItems,
            vueCourse: cartItems.vueCourse + 1,
        });
    };
    

    return (
        <div>
            <h2>Shopping cart component</h2>
            <ProductCard 
                name="React course" 
                price={prices.reactCourse} 
                quantity={cartItems.reactCourse}
                onAddToCart={handleAddReactCourse} 
            />
            <ProductCard 
                name="Vue course" 
                price={prices.vueCourse} 
                quantity={cartItems.vueCourse}
                onAddToCart={handleAddVueCourse} 
            />
            <CartSummary cartItems={cartItems} prices={prices}/>
            <button onClick={clearCart} >Clear cart</button>
        </div>
    );
};


export const ProductCard = ({ name, price, quantity, onAddToCart  }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>${price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={onAddToCart} >Add to cart</button>
        </div>
    );
};

export const CartSummary = ({ cartItems, prices }) => {
    const totalItems = cartItems.reactCourse + cartItems.vueCourse;
    const totalPrice = cartItems.reactCourse * prices.reactCourse + cartItems.vueCourse * prices.vueCourse;


    return (
        <div>
            <h3>Cart summary</h3>
            <p>Total items: {totalItems}</p>
            <p>Total price: ${totalPrice.toFixed(2)}</p>
        </div>
    );
}; 