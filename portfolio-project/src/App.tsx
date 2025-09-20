import "./App.css";
import Navbar from "./pageComponents/nav";
import LandingPage from "./page/landing";
import Menu from "./page/menu";
import Contact from "./page/contact";
import About from "./page/about";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SpeedType from "./page/speedtype";
import Estaterun from "./page/estaterun";
import Agromat from "./page/agromat";
import { Toaster } from "sonner";

function Layout() {
  return (
    <div className="bg-black">
      <Navbar />
      <Outlet />
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/speedtype",
          element: <SpeedType />,
        },
        {
          path: "/estaterun",
          element: <Estaterun />,
        },
        {
          path: "/agromat",
          element: <Agromat />,
        },
      ],
    },
  ]);

  return (
    <>
      <Toaster position="top-right" expand={true}/>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
