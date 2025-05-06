import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const apiUrl = import.meta.env.VITE_API_URL;

const DashboardHome = () => {
  const [chartData, setChartData] = useState([
    { date: '03/14', visits: 2400 },
    { date: '03/15', visits: 1398 },
    { date: '03/16', visits: 9800 },
    { date: '03/17', visits: 3908 },
    { date: '03/18', visits: 4800 },
    { date: '03/19', visits: 3800 },
    { date: '03/20', visits: 4300 },
  ]);

  const [recentPosts, setRecentPosts] = useState([]);
  const [timeRange, setTimeRange] = useState('7');

  useEffect(() => {
    // Modify the fetch function to include timeRange
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/analytics/traffic?days=${timeRange}`);
        const newData = await response.json();
        setChartData(newData);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    // Add new function to fetch recent posts
    const fetchRecentPosts = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/blog`);
        const data = await response.json();
        setRecentPosts(data);
      } catch (error) {
        console.error('Error fetching recent posts:', error);
        // Set empty array as fallback
        setRecentPosts([]);
      }
    };

    // Fetch initial data
    fetchData();

    // Fetch initial posts data
    fetchRecentPosts();

    // Set up interval to fetch data every 5 minutes
    const chartInterval = setInterval(fetchData, 5 * 60 * 1000);
    const postsInterval = setInterval(fetchRecentPosts, 5 * 60 * 1000);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(chartInterval);
      clearInterval(postsInterval);
    };
  }, [timeRange]);

  return (
    <>
      
      <div className="p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-500 mb-4">
                    <i className="fas fa-users text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Total Users</h2>
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
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Page Views</h2>
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
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Avg. Session</h2>
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
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Traffic Analytics</h2>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                
                <select 
                  className="text-xl border rounded-md px-2 py-1 text-gray-600"
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                >
                  <option value="7">Last 7 Days</option>
                  <option value="30">Last 30 Days</option>
                  <option value="90">Last 90 Days</option>
                </select>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="visits" 
                      stroke="#4F46E5" 
                      strokeWidth={2}
                      dot={{ fill: '#4F46E5', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Recent Posts</h2>
            <div className="bg-white rounded-xl shadow-lg p-6">
              {recentPosts.slice(0, 4).map(post => (
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