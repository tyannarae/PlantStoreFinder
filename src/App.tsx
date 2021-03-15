import React from "react";
import { Stores } from "./database/stores";
import { CardText } from "./components/cardText";
import "./App.scss";

//CardText will be to the page level once that is merged into master

const App = () => {
  return (
    <div className="App ">
      {Stores[0].stores.map((store) => (
        <CardText store={store} />
      ))}
    </div>
  );
};

export default App;
