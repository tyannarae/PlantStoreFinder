import React from "react";
import Map from "./components/map";
import { StoreMedia } from "./components/storeMedia";
import { Stores } from "./database/stores";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Map />
        {Stores[0].stores.map((store) => (
          <StoreMedia store={store} key={store.id} />
        ))}
      </header>
    </div>
  );
}

export default App;
