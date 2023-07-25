const { createStore } = require("redux"); // CommonJS Module Pattern - Default in Node

const initialState = {
  counter: 0,
};
// Reducer
function rootReducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    // return state.counter++;         // MUTATE THE STATE -> NEVER DO THAT
    return { counter: state.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { counter: state.counter - 1 };
  } else if (action.type === "ADD_COUNTER") {
    return { counter: state.counter + action.payload };
  }
  return state;
}
// Store
const store = createStore(rootReducer);

console.log("STATE : ", store.getState());

// ACTION
store.dispatch({ type: "INCREMENT" });
console.log("AFTER INCREMENT STATE : ", store.getState());

store.dispatch({ type: "DECREMENT" });
console.log("AFTER DECREMENT STATE : ", store.getState());

store.dispatch({ type: "ADD_COUNTER", payload: 10 });
console.log("AFTER ADD COUNTER STATE : ", store.getState());
