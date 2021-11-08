import React from "react";

import Routes from "./Routes";
import GlobalStyle from "./styles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
}

export default App;
