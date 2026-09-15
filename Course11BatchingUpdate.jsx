// I)Batching in React:
// -Waits until your event handler finishes.
// -Gather all your state updates.
// -Applies them in one render.

// An analogies to make it more clear: Waiter in the restaurant
//   -Doesn't run to the kitchen every time you name a dish.
//   -They wait until you're entire table is done ordering.
//   -Takes the entire order to the kitchen at once.

// II)State update cycle
//    -Triggering updates.
//    -The snapshot behaviour.
//    -Using updater function for dependent updates
//    -How React optimizes everything with batching.