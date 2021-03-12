import React from "react";
import "./App.css";

import RepositoriesList from "./components/RepositoriesList";

function App() {
  return (
    <div>
      <h1>Search for packages</h1>
      <RepositoriesList />
    </div>
  );
}

export default App;
