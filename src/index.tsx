import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import DormPage from "./pages/DormPage";
import LandingPage from "./pages/LandingPage";
import dummyData from "./dummy.json";
import SignInPage from "./pages/SignInPage";
import WriteReview from "./pages/WriteReview";
import AboutUs from "./pages/AboutUs";

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
        dormName="Village At Centennial Square"
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
  {
    path: "/write-review/manzanita-square",
    element: <WriteReview dormName="Manzanita Square" />,
  },
  {
    path: "/write-review/mary-park-hall",
    element: <WriteReview dormName="Mary Park Hall" />,
  },
  {
    path: "/write-review/mary-ward-hall",
    element: <WriteReview dormName="Mary Ward Hall" />,
  },
  {
    path: "/write-review/towers-at-centennial-square",
    element: <WriteReview dormName="Towers At Centennial Square" />,
  },
  {
    path: "/write-review/university-park-south",
    element: <WriteReview dormName="University Park South" />,
  },
  {
    path: "/write-review/university-park-north",
    element: <WriteReview dormName="University Park North" />,
  },
  {
    path: "/write-review/west-grove-common",
    element: <WriteReview dormName="West Grove Common" />,
  },
  {
    path: "/write-review/towers-at-junior-suites",
    element: <WriteReview dormName="Towers At Junior Suites" />,
  },
  {
    path: "/write-review/village-at-centennial-square",
    element: <WriteReview dormName="Village At Centennial Square" />,
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
