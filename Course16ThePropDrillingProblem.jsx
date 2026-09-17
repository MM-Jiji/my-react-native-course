// I)Prop drilling:
//   Sending props through layers of components just to reach the ones that actually need them leads to
//   multiple problem:
//   1-Maintenance: Every time you need to add a new property to user, update an existing one or remove one
//     you no longer need, you have to touch every simple component in the chain.
//   2-Performance: If a prop changes in a parent, every child that receives that prop re-renders, even if they
//     don't use the prop. When user updates all those middle component re-render unnecessarily.
//   3-The problem gets exponentially worse:
//     -You often end up drilling multiple unrelated data sets through the same components.
//     -The prop lists get longer, the components get more tighthy coupled to things they don't even use,
//      and the whole system becomes harder to maintain.
//     -Add a new filed? More components need edits.
//     -Remove a field? More cleanup.
//     -Move a component around? You break the data path.

//   *There has to be a better way. React gives us a built-in solution designed specifically to solve the prop
//    drilling problem it's called Context.
