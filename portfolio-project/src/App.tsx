import './App.css'
import Navbar from './pageComponents/nav'
import LandingPage from './page/landing'
import Menu from './page/menu'
import Contact from './page/contact'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom"

function Layout() {
  return (
    <div className="bg-black">
      <Navbar />
      <Outlet />
    </div>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />, 
      children: [
        {
          path: "/",
          element: <LandingPage />
        },
        {
          path: "/menu",
          element: <Menu />
        },
        {
          path: "/contact",
          element: <Contact/>
        },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
