import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/HomePage/Home'
import Services from './pages/Services'
import Contact from './pages/contact'

import { useState } from 'react'

import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },

])

function App() {
  return <RouterProvider router={router} />
}

export default App
