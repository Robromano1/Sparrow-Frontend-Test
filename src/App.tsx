// React imports
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Internal imports
import Root from "./Routes/Root";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Menu from "./Pages/Menu";

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
      {
        path: "/menu",
        element: <Menu />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
