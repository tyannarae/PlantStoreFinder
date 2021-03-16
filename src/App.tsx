import React from "react";
import { Stores } from "./database/stores";
import { StoreInfo } from "./components/storeInfo";
import Map from "./components/map";
import "./App.scss";

//CardText will be to the page level once that is merged into master

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Map />
        {Stores[0].stores.map((store) => (
          <StoreInfo store={store} />
        ))}
      </header>
    </div>
  );
}

export default App;
