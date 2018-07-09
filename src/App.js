import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { toggleUserLogin } from "./actions"; // Pull in your exported action.

const App = props => {
  console.log("PROPS in APP, ", props);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={props.toggleUserLogin}>
        {props.userLoggedIn ? "Log out" : "Log in"}
      </button>
      {props.userLoggedIn
        ? props.friends.map(friend => <div key={friend}>{friend}</div>)
        : null}
    </div>
  );
};

// mapStateToProps takes whats in our REDUX store, and passes it to our component as props.
const mapStateToProps = state => {
  console.log("State in Redux Store", state);
  return {
    friends: state.friends,
    userLoggedIn: state.userLoggedIn
  };
};

export default connect(mapStateToProps, { toggleUserLogin })(App);
// wire up our component, with the redux store.
// It achieves this through the provider component.
// pass in actions to the 2nd arg for connect.
