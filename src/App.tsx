import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Root from "./Routes/Root";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
