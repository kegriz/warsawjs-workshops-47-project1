import React from "react";

function Button(props) { // {color, text} - destrukturyzacja
  console.log(props);
  console.log(props.color);
  return <button onClick={clickHandler}>Click me, {props.text}</button>;
}

function clickHandler(event) { // synthetic event
  // event.preventDefault();
  console.log("click", event);
}

Button.defaultProps = {
  text: "Hello!!!",
};

function App() {
  return (
    <div className="App">
      <Button color="blue" text="Hello" />
    </div>
  );
}

export default App;
