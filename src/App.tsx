import React from "react";
import { Stores } from "./database/stores";
import { Cardtext } from "./components/cardText";
import "./App.scss";

const App = () => {
  return (
    <div className="App ">
      {Stores[0].stores.map((store) => (
        <Cardtext store={store} />
      ))}
    </div>
  );
};

export default App;
