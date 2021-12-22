import React from "react";
import NavBar from "./Components/NavBar";
import "./Css/App.scss";
import MarketLogo from "./Components/MarketLogo";

function App() {
  return (
    <React.Fragment>
      <MarketLogo />
      <NavBar />
      <p className="navBarElement">prueba</p>
    </React.Fragment>
  );
}

export default App;
