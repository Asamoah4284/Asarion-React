import React from 'react';

const DashboardHome = () => {
  const recentPosts = [
    { id: 1, title: 'Getting Started with React', date: '2024-03-20', views: 234 },
    { id: 2, title: 'Modern CSS Techniques', date: '2024-03-18', views: 186 }, 
    { id: 3, title: 'JavaScript Best Practices', date: '2024-03-15', views: 342 },
  ];

  return (
    <>
      
      <div className="p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-500 mb-4">
                    <i className="fas fa-users text-3xl"></i>
                </div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Total Users</h2>
                <p className="text-gray-600 mb-6">1,234 active users this month</p>
                <button className="text-blue-500 hover:text-blue-600 font-medium flex items-center gap-2">
                    View Details
                    <i className="fas fa-arrow-right text-sm"></i>
                </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-green-500 mb-4">
                    <i className="fas fa-chart-line text-3xl"></i>
                </div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Page Views</h2>
                <p className="text-gray-600 mb-6">45.2K views in the last 30 days</p>
                <button className="text-green-500 hover:text-green-600 font-medium flex items-center gap-2">
                    View Details
                    <i className="fas fa-arrow-right text-sm"></i>
                </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-purple-500 mb-4">
                    <i className="fas fa-clock text-3xl"></i>
                </div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Avg. Session</h2>
                <p className="text-gray-600 mb-6">4.2 minutes per user session</p>
                <button className="text-purple-500 hover:text-purple-600 font-medium flex items-center gap-2">
                    View Details
                    <i className="fas fa-arrow-right text-sm"></i>
                </button>
            </div>
          </div>

          {/* Recent Posts Section */}
         

          {/* Analytics Graph Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Traffic Analytics</h2>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                
                <select className="text-sm border rounded-md px-2 py-1 text-gray-600">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                </select>
              </div>
              <div className="h-[250px] w-full">
                {/* This div will be your chart container */}
                {/* You can integrate your preferred charting library here (e.g., Chart.js, Recharts, etc.) */}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Posts</h2>
            <div className="bg-white rounded-xl shadow-lg p-6">
              {recentPosts.map(post => (
                <div key={post.id} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                  <div>
                    <h3 className="font-medium text-gray-800">{post.title}</h3>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600">{post.views} views</span>
                    <button className="text-blue-500 hover:text-blue-600">
                      <i className="fas fa-edit"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
  );
};

export default DashboardHome;