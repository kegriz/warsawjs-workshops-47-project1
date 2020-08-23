import React from "react";
import UsersContainer from "./users/containers/UsersContainer";
import CalculatorContainer from "./calculator/containers/CalculatorContainer";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

function Button(props) {
  // {color, text} - destrukturyzacja
  // console.log(props);
  // console.log(props.color);
  return <button onClick={clickHandler}>Click me, {props.text}</button>;
}

function clickHandler(event) {
  // synthetic event
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

      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/currencies">Currencies</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/currencies">
            <CalculatorContainer />
          </Route>
          <Route path="/users">
            <UsersContainer />
          </Route>
          {/* <Route path="/users" component={UsersContainer}></Route> */}
          <Route path="/">{/* <Home /> */}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
