import React from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { NavLink } from "react-router-dom";
import { Tab, TabItem, Top } from "./style";

// 使用 Route 信息需要继承 RouteConfigComponentProps
interface Props extends RouteConfigComponentProps {}

/**
 *
 * 嵌套路由需要在嵌套的组件内使用 renderRoutes 去渲染子路由
 */
function Home(props: Props) {
  const { route } = props;
  return (
    <>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>

      <Tab>
        <NavLink to="/recommend" activeClassName="selected">
          <TabItem>
            <span>推荐</span>
          </TabItem>
        </NavLink>
        <NavLink to="/singers" activeClassName="selected">
          <TabItem>
            <span>歌手</span>
          </TabItem>
        </NavLink>
        <NavLink to="/rank" activeClassName="selected">
          <TabItem>
            <span>排行榜</span>
          </TabItem>
        </NavLink>
      </Tab>
      <div>{renderRoutes(route?.routes)}</div>
    </>
  );
}

export default React.memo(Home);
