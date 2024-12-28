import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ExerciseDetails from "./pages/ExerciseDetails";
import Home from "./pages/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/exercise/:id",
        element: <ExerciseDetails />,
      },
    ],
  },
]);
