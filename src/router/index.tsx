import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import { CharacterDetail, Characters, Home, NotFound } from "../pages";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/characters",
        element: <Characters />,
      },
      {
        path: "/character/:id",
        element: <CharacterDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <MainLayout />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
