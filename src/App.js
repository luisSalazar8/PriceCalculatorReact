import React from "react";
import NavBar from "./Components/NavBar";
import "./Css/App.scss";
import MarketLogo from "./Components/MarketLogo";
import ProductList from "./Pages/ProductList";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./Reducers/Index";

function App() {
  return (
    <React.Fragment>
      <MarketLogo />
      <Provider store={createStore(reducers)}>
        <NavBar />
        <ProductList />
      </Provider>
    </React.Fragment>
  );
}

export default App;
