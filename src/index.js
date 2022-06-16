import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

const App = (props) => {
  let contador = 0;

  setInterval(() => {
    contador++;
  }, 1000);

  return (
    <div>
      <h1>{contador}</h1>
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
