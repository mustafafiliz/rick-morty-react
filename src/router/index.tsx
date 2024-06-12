import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import { Characters, Home } from "../pages";

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
