import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

const App = (props) => {
  return (
    <div>
      <h1>{props.contadorInicial}</h1>
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
