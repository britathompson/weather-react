import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";

import "./App.css";
import "./Footer.css";

function App() {
  return (
    <div className="App">
      <div className="cointainer">
        <Weather />
        <Footer />
      </div>
    </div>
  );
}

export default App;
