import React from "react";
import NavBar from "./Components/NavBar";
import "./Css/App.scss";
import MarketLogo from "./Components/MarketLogo";
import ProductList from "./Pages/ProductList";
import ShoppingCart from "./Pages/ShoppingCart";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import settings from "./configureStore";

function App() {
  const {store,persistor} = settings();
  return (
    <React.Fragment>
      <MarketLogo />
      <Provider store={store} >
        <PersistGate loading={null}  persistor={persistor} >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<ProductList />} />
            <Route path="/ShoppingCart" exact element={<ShoppingCart />} />
          </Routes>
        </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
}

export default App;
