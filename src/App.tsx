import React from "react";
import { GlobalStyle } from "./style";
import { IconStyle } from "./assets/iconfont/iconfont";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle />
        <IconStyle />
        {renderRoutes(routes)}
      </div>
    </BrowserRouter>
  );
}

export default App;
