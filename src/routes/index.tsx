import { Redirect } from "react-router-dom";
import { RouteConfig } from "react-router-config";
import Home from "../pages/Home";
import Recommend from "../pages/Recommend";
import Singers from "../pages/Singers";
import Rank from "../pages/Rank";

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (<Redirect to={"/recommend"} />)
      },
      {
        path: "/recommend",
        component: Recommend,
      },
      {
        path: "/singers",
        component: Singers,
      },
      {
        path: "/rank",
        component: Rank,
      }
    ],
  },
];


export default routes;