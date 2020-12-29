import React from 'react';
import { renderRoutes, RouteConfigComponentProps,  } from 'react-router-config';

// 使用 Route 信息需要继承 RouteConfigComponentProps
interface Props extends RouteConfigComponentProps {}

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