import React from "react";
import NavBar from "./Components/NavBar";
import "./Css/App.scss";
import MarketLogo from "./Components/MarketLogo";
import ProductList from "./Pages/ProductList";
import ShoppingCart from "./Pages/ShoppingCart";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./Reducers";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <MarketLogo />
      <Provider store={createStore(reducers)}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<ProductList />} />
            <Route path="/ShoppingCart" exact element={<ShoppingCart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
