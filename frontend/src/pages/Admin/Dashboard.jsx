import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import DashboardHome from './DashboardHome';



const Dashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);



  const recentPosts = [
    { id: 1, title: 'Getting Started with React', date: '2024-03-20', views: 234 },
    { id: 2, title: 'Modern CSS Techniques', date: '2024-03-18', views: 186 }, 
    { id: 3, title: 'JavaScript Best Practices', date: '2024-03-15', views: 342 },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate('/admin');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`h-screen ${isSidebarOpen ? 'grid' : 'block'} md:grid md:grid-cols-[250px_1fr]  grid-rows-[80px_1fr]`}>
        {/* Sidebar */}
        <div className={`
          fixed md:static inset-y-0 left-0 transform 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 transition-transform duration-300 ease-in-out
          bg-blue-600 border-r border-gray-200 row-span-2 shadow-sm
          z-50 w-[250px] h-full
        `}>
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-blue-500">
              <h2 className="text-xl font-bold text-white"></h2>
          
            </div>

            {/* Sidebar Menu */}
            <ul className="py-4 space-y-4">
              <li className="px-4">
                <Link to='overview' className="flex items-center gap-3 text-white py-3 px-4 rounded-lg bg-blue-700 hover:bg-blue-800 transition-colors">
                  <ion-icon name="grid-outline" class="text-xl"></ion-icon>
                  <span className='text-3xl'>Overview</span>
                </Link>
              </li>
              <li className="px-4">
                <Link to="add-blog" className="flex items-center gap-3 text-blue-100 py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  <ion-icon name="add-circle-outline" class="text-xl"></ion-icon>
                  <span className='text-3xl'>Add Blog</span>
                  </Link> 
              </li>
              <li className="px-4">
                <Link to='all-blog' className="flex items-center gap-3 text-blue-100 py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  <ion-icon name="list-outline" class="text-xl"></ion-icon>
                  <span className='text-3xl'>All Blogs</span>
                </Link>
              </li>
            </ul>
            {/* Sidebar Footer */}
          
          </div>
        </div>

        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden text-white bg-orange-500 hover:bg-orange-600 p-2 rounded-lg transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          </div>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            <i className="fas fa-sign-out-alt mr-2"></i>
            Logout
          </button>
        </div>

        {/* Add overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
            onClick={() => setSidebarOpen(false)}
          >

          </div>
        )}
        {/* Main Content */}
        <div>

      <Outlet/>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
