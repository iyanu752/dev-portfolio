import "./App.css";
import Navbar from "./pageComponents/nav";
import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import AppLoader from "./pageComponents/appLoader";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import GradualBlur from "./effects/Animations/GradualBlur/GradualBlur";
import IntroSplash from "./pageComponents/introSplash";

const LandingPage = lazy(() => import("./page/landing"));
const Menu = lazy(() => import("./page/menu"));
const Contact = lazy(() => import("./page/contact"));
const About = lazy(() => import("./page/about"));
const SpeedType = lazy(() => import("./page/speedtype"));
const ExpertListing = lazy(() => import("./page/expertlisting"));
const Agromat = lazy(() => import("./page/agromat"));
const Tempo = lazy(() => import("./page/tempo"));
const EcommerceApi = lazy(() => import("./page/ecommerce"));
const Juno = lazy(() => import("./page/juno"));

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

  const router = useMemo(
    () =>
      createBrowserRouter([
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
              element: <EcommerceApi />,
            },
            {
              path: "/juno",
              element: <Juno />,
            },
          ],
        },
      ]),
    []
  );

  return (
    <>
      <Toaster position="top-right" expand={true} />
      {showIntro ? <IntroSplash onComplete={() => setShowIntro(false)} /> : null}
      <Suspense fallback={<AppLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
