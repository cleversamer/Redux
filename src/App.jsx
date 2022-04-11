import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import BugsList from "./components/BugsList";
import "./css/app.css";

const store = configureStore();

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <BugsList />
      </Provider>
    </div>
  );
};

export default App;
