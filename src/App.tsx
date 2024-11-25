// React imports
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Internal imports
import Root from "./Routes/Root";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import { CartProvider } from "./Pages/Cart/CartProvider";

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
        element: (
          <CartProvider>
            <Root />{" "}
          </CartProvider>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/menu",
        element: (
          <CartProvider>
            <Menu />
          </CartProvider>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
