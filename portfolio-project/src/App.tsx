import "./App.css";
import Navbar from "./pageComponents/nav";
import LandingPage from "./page/landing";
import Menu from "./page/menu";
import Contact from "./page/contact";
import About from "./page/about";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SpeedType from "./page/speedtype";
import ExpertListing from "./page/expertlisting";
import Agromat from "./page/agromat";
import { Toaster } from "sonner";
import GradualBlur from "./effects/Animations/GradualBlur/GradualBlur";
import { useEffect, useState } from "react";
import Tempo from "./page/tempo";
import EcommerceApi from "./page/ecommerce";
import JunogPage from "./pageComponents/junopage";
function Layout() {
    const [showBlur, setShowBlur] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableDiv = document.querySelector("#scrollable-content");
      if (!scrollableDiv) return;

      const { scrollTop, scrollHeight, clientHeight } = scrollableDiv;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 50;
      setShowBlur(!isAtBottom);
    };

    const scrollableDiv = document.querySelector("#scrollable-content");
    scrollableDiv?.addEventListener("scroll", handleScroll);
    return () => scrollableDiv?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="tech-shell"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#050806",
      }}
    >
      {/* Scrollable content */}
      <div
        id="scrollable-content"
        style={{
          height: "100%",
          overflowY: "auto",
          position: "relative",
        }}
      >
        <Navbar />
        <Outlet />
      </div>
      {showBlur && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            pointerEvents: "none",
          }}
        >
          <GradualBlur
            target="parent"
            position="bottom"
            height="6rem"
            strength={2}
            divCount={5}
            curve="bezier"
            exponential={true}
            opacity={1}
          />
        </div>
      )}
    </section>
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
          path: "/tempo",
          element: <Tempo />,
        },
        {
          path: "/expertlisting",
          element: <ExpertListing />,
        },
        {
          path: "/agromat",
          element: <Agromat />,
        },
        {
          path: "/ecommerceapi",
          element: <EcommerceApi/>
        },
        {
          path: "/juno",
          element: <JunogPage/>
        }
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
