import "./App.css";
import Post from "./components/Post";
import { useState } from "react";

function App() {
  const [inputvalue, setInputvalue] = useState("");
  const [cmtn, setCmtn] = useState([]);

  const AddComment = () => {
    setCmtn([
      ...cmtn,
      {
        id: cmtn.length,
        val: inputvalue,
      },
    ]);
    setInputvalue("");
  };
  return (
    <div className="App">
      <div className="input">
        <input
          type="text"
          placeholder="Add a comment..."
          value={inputvalue}
          onChange={(e) => setInputvalue(e.target.value)}
        />
        <div className="btn" onClick={AddComment}>
          POST
        </div>
      </div>
      {cmtn.map((el) => (
        <Post cmtn={el.val} />
      ))}
    </div>
  );
}

export default App;
