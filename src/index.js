import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <div>
      <Counter />
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));
