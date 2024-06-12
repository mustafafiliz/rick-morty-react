import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import { Home } from "../pages";

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
        path: "/detail",
        element: <></>,
      },
    ],
  },
  {
    path: "*",
    element: <MainLayout />,
    children: [
      {
        path: "*",
        // element: <NotFound />,
      },
    ],
  },
]);

export default router;
