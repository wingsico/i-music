import React from 'react';
import { renderRoutes, RouteConfigComponentProps,  } from 'react-router-config';

// 使用 Route 信息需要继承 RouteConfigComponentProps
interface Props extends RouteConfigComponentProps {}

/**
 * 
 * 嵌套路由需要在嵌套的组件内使用 renderRoutes 去渲染子路由
 */
function Home(props: Props) {
  const { route }  = props;
  return (
    <>
    <div>Home</div>
    <div>
      { renderRoutes(route?.routes)}
    </div>
    </>
  )
}

export default React.memo(Home);