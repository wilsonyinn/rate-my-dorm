import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import DormPage from "./pages/DormPage";
import LandingPage from "./pages/LandingPage";
import dummyData from "./dummy.json";
import WriteReview from "./pages/WriteReview";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/manzanita-square",
    element: <DormPage dormName="Manzanita Square" />,
  },
  {
    path: "/university-park-north",
    element: <DormPage dormName="University Park North" />,
  },
  {
    path: "/towers-at-centennial-square",
    element: <DormPage dormName="Towers At Centennial Square" />,
  },
  {
    path: "/university-park-south",
    element: <DormPage dormName="University Park South" />,
  },
  {
    path: "/village-at-centennial-square",
    element: <DormPage dormName="Village At Centennial Square" />,
  },
  {
    path: "/towers-at-junior-suites",
    element: <DormPage dormName="Towers At Junior Suites" />,
  },
  {
    path: "/mary-ward-hall",
    element: <DormPage dormName="Mary Ward Hall" />,
  },
  {
    path: "/mary-park-hall",
    element: <DormPage dormName="Mary Park Hall" />,
  },
  {
    path: "/west-grove-common",
    element: <DormPage dormName="West Grove Common" />,
  },
  {
    path: "/write-review",
    element: <WriteReview />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
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
