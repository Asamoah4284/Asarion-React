import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/HomePage/Home'
import Team from './pages/TeamPage/Team'
import Pricing from './pages/Pricing/pricing'




import './App.css'
import Blog from './pages/Blog/blog'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,


  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/team",
    element: <Team />,
  },

  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },

])

function App() {
  return <RouterProvider router={router} />
}

export default App
