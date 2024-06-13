import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Rick & Morty App</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
