import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import "./main.css";
import { StyledEngineProvider } from "@mui/material";
//@ts-ignore

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={routes} />
    </StyledEngineProvider>
  </StrictMode>
);
