import { createBrowserRouter, RouterProvider, Navigate, ScrollRestoration } from 'react-router-dom'
import { useEffect } from 'react'

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
import SingleBlogPost from './pages/Blog/SingleBlog'
import Website from './pages/Website-development/Website'
import ScrollToTop from './ScrollTop'
import Voiceover from './pages/Voiceover/Voiceover'
import GraphicDesign from './pages/Graphic/Graphic-design'
import Dropshipping from './pages/Dropshipping/Dropshipping'

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  
  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />
  }
  
  return children
}

// Create a layout component that properly positions the page at the top
const PageLayout = ({ Component }) => {
  // This effect runs once when the component mounts
  useEffect(() => {
    // Set the scroll position to top immediately
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // Use 'auto' instead of 'smooth' to avoid animation
    });
    
    // Ensure CSS isn't interfering with scroll position
    document.body.style.scrollBehavior = 'auto';
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Clean up
    return () => {
      document.body.style.scrollBehavior = '';
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
  
  return (
    <>
      <Component />
      <ScrollRestoration />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout Component={Home} />,
  },
  // {
  //   path: "about",
  //   element: <About />,
  // },
  {
    path: "/team",
    element: <PageLayout Component={Team} />,
  },

  {
    path: "/pricing",
    element: <PageLayout Component={Pricing} />,
  },
  {
    path: "/blog",
    element: <PageLayout Component={Blog} />,
  },
  {
    path: "/website-development",
    element: <PageLayout Component={Website} />,
  },
 
  {
    path: "/voiceover",
    element: <PageLayout Component={Voiceover} />,
  },
 
  {
    path: "/graphic-design",
    element: <PageLayout Component={GraphicDesign} />,
  },
  {
    path: "/dropshipping",
    element: <PageLayout Component={Dropshipping} />,
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
    element: <PageLayout Component={SingleBlogPost} />,
  },
], {
  // Disable any automatic scroll behavior at the router level
  scrollBehavior: 'auto'
})

function App() {
  return <RouterProvider router={router} />
}

export default App
