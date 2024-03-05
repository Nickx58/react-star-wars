import React from "react";
import { URI } from "./uri";
import App from "../App";
import { RouteObject } from "react-router";

const Home = React.lazy(() => import('../pages/Home/ConnectedHome'));
const People = React.lazy(() => import('../pages/People/ConnectedPeople'));
const Planets = React.lazy(() => import('../pages/Planets/ConnectedPlanets'));

const CharDetail = React.lazy(() => import('../pages/CharDetail/ConnectedCharDetail'));
const PlanetDetail = React.lazy(() => import('../pages/PlanetDetail/ConnectedPlanetDetail'));

export const routesConfig: RouteObject[] = [
  {
    element: <App />,
    children: [
      {
        path: URI.home,
        element: <Home />,
      },
      {
        path: URI.people.base,
        element: <People />,
      },
      {
        path: URI.people.detail,
        element: <CharDetail />,
      },
      {
        path: URI.planets.base,
        element: <Planets />,
      },
      {
        path: URI.planets.detail,
        element: <PlanetDetail />,
      }
    ],
  },
];
