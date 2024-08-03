import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import DormPage from "./pages/DormPage";
import LandingPage from "./pages/LandingPage";
import dummyData from "./dummy.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/manzanita-square",
    element: <DormPage dormName="Manzanita Square" reviewData={dummyData} />,
  },
  {
    path: "/university-park-north",
    element: (
      <DormPage dormName="University Park North" reviewData={dummyData} />
    ),
  },
  {
    path: "/towers",
    element: <DormPage dormName="Towers" reviewData={dummyData} />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
