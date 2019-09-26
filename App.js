import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./components/timer";
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

let store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}
