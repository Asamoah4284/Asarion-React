import React, { useState, useEffect } from 'react';

const AllBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${apiUrl}api/blog`);
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await fetch(`http://localhost:5000/api/blog/${postId}`, {
        method: 'DELETE',
      });
      setPosts(posts.filter(post => post._id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">All Blog Posts</h2>
      <div className="bg-white rounded-2xl shadow-xl p-8">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No blog posts found</p>
            <p className="text-gray-500 mt-2">Create your first blog post to get started</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <div 
                key={post._id} 
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-3xl">
                    {post.content}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-2xl text-gray-500 font-medium">
                      {new Date(post.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <div className="space-x-3">
                      <button className="px-3 py-1.5 text-2xl font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition duration-150">
                        Edit
                      </button>
                      <button 
                        className="px-3 py-1.5 text-2xl font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition duration-150"
                        onClick={() => handleDelete(post._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBlog;