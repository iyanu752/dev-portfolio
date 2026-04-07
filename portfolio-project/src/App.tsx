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
import Juno from "./page/juno";
import IntroSplash from "./pageComponents/introSplash";

const INTRO_STORAGE_KEY = "jacx-intro-played";

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
  const [showIntro, setShowIntro] = useState(() => {
    if (window.location.pathname !== "/") return false;

    const navEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    const wasReload = navEntry?.type === "reload";
    const alreadyPlayed = sessionStorage.getItem(INTRO_STORAGE_KEY) === "true";

    return wasReload || !alreadyPlayed;
  });

  useEffect(() => {
    if (!showIntro) return;

    sessionStorage.setItem(INTRO_STORAGE_KEY, "true");

    const timer = window.setTimeout(() => {
      setShowIntro(false);
    }, 6000);

    return () => window.clearTimeout(timer);
  }, [showIntro]);

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
          element: <Juno/>
        }
      ],
    },
  ]);

  return (
    <>
      <Toaster position="top-right" expand={true}/>
      {showIntro ? <IntroSplash onComplete={() => setShowIntro(false)} /> : null}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
