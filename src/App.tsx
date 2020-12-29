import { GlobalStyle } from "./style";
import { IconStyle } from "./assets/iconfont/iconfont";
// react-router-config 负责把 routes 配置转换成 Route 组件
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <GlobalStyle />
          <IconStyle />
          {renderRoutes(routes)}
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
