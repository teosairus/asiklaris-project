import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "../AboutUs";
import Accommodation from "../Accommodation";
import Contact from "../Contact";
import Directions from "../Directions";
import ErrorPage from "../ErrorPage";
import Home from "../Home";
import Layout from "../Layout";
import Location from "../Location";
import Reservations from "../Reservations";

export default function App() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "accommodation", element: <Accommodation /> },
        { path: "about-us", element: <AboutUs /> },
        { path: "contact", element: <Contact /> },
        { path: "directions", element: <Directions /> },
        { path: "reservations", element: <Reservations /> },
        { path: "location", element: <Location /> },
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ];

  const router = createBrowserRouter(routes, {
    // basename: '/agali-studios',
    future: {
      v7_relativeSplatPath: true,
    },
  });
  return <RouterProvider router={router} />;
}
