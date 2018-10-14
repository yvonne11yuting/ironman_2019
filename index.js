import React from "react";
import ReactDOM from "react-dom";

import List from "./src/components/list";

const App = () => {
  return (
    <ul>
      <List />
    </ul>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
