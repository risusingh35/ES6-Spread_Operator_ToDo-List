import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(Event) {
    const newValue = Event.target.value;
    setInputText(newValue);
  }
  function additems() {
    setItems((prevValue) => {
      return [inputText, ...prevValue];
    });
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={additems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((finalItem) => (
            <li>{finalItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
