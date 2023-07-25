import ClassBased from "./components/demo/ClassBased";
import Counter from "./components/demo/Counter";
import UseEffect from "./components/demo/UseEffect";
import Posts from "./components/posts/Posts";
import AuthContext from "./context/authContext";

function App() {
  return (
    <div>
      <h1>App works!</h1>
      <hr />
      {/* <UseEffect /> */}
      {/* <ClassBased /> */}
      <AuthContext.Provider value={{ isLoggedIn: true }}>
        <Counter />
        {/* <Posts /> */}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
