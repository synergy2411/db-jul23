import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/counter/counter.slice";

const Counter = () => {
  const dispatch = useDispatch();

  const ctr = useSelector((store) => {
    console.log("STORE : ", store);
    return store.ctr.counter;
  });

  return (
    <div className="container">
      <p className="display-4">Counter : {ctr} </p>
      <hr />
      <button
        className="btn btn-primary mx-3"
        onClick={() => dispatch(increment())}
      >
        Increase
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch(decrement())}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
