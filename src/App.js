import React, { Component } from "react";
import UseStateExample from "./UseStateExample";
import UseEffectExample from "./UseEffectExample";
import WindowSize from "./WindowSize";
import BookList from "./Props";
import StateEx from "./StateEx";
import LifeCycle from "./LifeCycle";
import Forms from "./Forms";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <UseStateExample />
        <UseEffectExample />
        <WindowSize />
        <BookList />
        <StateEx />
        <LifeCycle />
        <Forms />
      </React.Fragment>
    );
  }
}
setInterval(App, 1000);

export default App;
