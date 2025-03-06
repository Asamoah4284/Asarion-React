import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/HomePage/Home'
import Team from './pages/TeamPage/Team'
import Pricing from './pages/Pricing/pricing'




import './App.css'
import Blog from './pages/Blog/blog'
import Admin from './pages/Admin/Admin'
import Dashboard from './pages/Admin/Dashboard'
import AddBlog from './pages/Admin/AddBlog'
import AllBlog from './pages/Admin/AllBlog'
import DashboardHome from './pages/Admin/DashboardHome'
import EditBlog from './pages/Admin/EditBlog'
import SingleBlogPost from './pages/Blog/singleBlog'
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  
  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />
  }
  
  return children
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,


  },
  // {
  //   path: "about",
  //   element: <About />,
  // },
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
 
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="overview" replace />,
      },
      {
        path: "overview",
        element: <DashboardHome />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
      {
        path: "all-blog",
        element: <AllBlog />,
      },
    
    ]
  },
  {
    path: "/blog/:id",
    element: <SingleBlogPost />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
