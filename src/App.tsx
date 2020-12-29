import { GlobalStyle } from "./style";
import { IconStyle } from "./assets/iconfont/iconfont";
// react-router-config 负责把 routes 配置转换成 Route 组件
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
