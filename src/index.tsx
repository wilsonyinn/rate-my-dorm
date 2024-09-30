import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import DormPage from "./pages/DormPage";
import LandingPage from "./pages/LandingPage";
import dummyData from "./dummy.json";
import SignInPage from "./pages/SignInPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
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
    path: "/towers-at-centennial-square",
    element: (
      <DormPage dormName="Towers At Centennial Square" reviewData={dummyData} />
    ),
  },
  {
    path: "/university-park-south",
    element: (
      <DormPage dormName="University Park South" reviewData={dummyData} />
    ),
  },
  {
    path: "/village-at-centennial-square",
    element: (
      <DormPage
        dormName="Village At Centennial Ssquare"
        reviewData={dummyData}
      />
    ),
  },
  {
    path: "/towers-at-junior-suites",
    element: (
      <DormPage dormName="Towers At Junior Suites" reviewData={dummyData} />
    ),
  },
  {
    path: "/mary-ward-hall",
    element: <DormPage dormName="Mary Ward Hall" reviewData={dummyData} />,
  },
  {
    path: "/mary-park-hall",
    element: <DormPage dormName="Mary Park Hall" reviewData={dummyData} />,
  },
  {
    path: "/west-grove-common",
    element: <DormPage dormName="West Grove Common" reviewData={dummyData} />,
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
