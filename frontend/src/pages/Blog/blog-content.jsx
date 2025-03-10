import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const BlogContent = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Number of posts to display per page

  useEffect(() => {
    fetchBlogPosts();
    const intervalId = setInterval(fetchBlogPosts, 5000); // Fetch blog posts every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/blog'); // Replace with your actual API endpoint
      const data = await response.json();
      console.log('Fetched blog posts:', data); // Fixed to log the fetched data, not the state
      setBlogPosts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      setLoading(false);
    }
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Calculate pagination values
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-40 sm:py-48">
      <section className="max-w-[1080px] mx-auto px-4">
        {/* Featured Article Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Main Featured Article */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                alt="Marketing analytics dashboard showing growth trends" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3 hover:text-blue-600">
                The 2024 State of Marketing &amp; Trends Report: Data from 1400+ Global Marketers
              </h2>
              <p className="text-gray-600 mb-4">Discover the digital marketing industry trends, winning opportunities and challenges brands face thi...</p>
              <div className="flex items-center text-sm text-gray-500">
                <p className="mr-4">Maxwell Iskiev</p>
                <time>6/26/24</time>
              </div>
            </div>
          </div>

          {/* Featured Posts Sidebar */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-red-500">
              Featured Posts
            </h2>
            <div className="space-y-6">
              {blogPosts.slice(0, 5).map((post) => (
                <div key={post._id} className="group pb-6 border-b border-gray-200">
                  <h3 className="font-medium hover:text-blue-600">
                    <Link to={`/blog/${post._id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mt-2">
                    <p className="mr-4">{post.author?.name || 'Asamoah Richard'}</p>
                    <time>{formatDate(post.createdAt)}</time>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <article key={post._id} className="group relative rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 text-lg font-semibold text-white bg-[#f9004d] rounded-md">
                  {post.subCategory}
                </span>
              </div>
              <div className="relative aspect-w-16 aspect-h-9 h-64">
                {console.log('Image URL:', `http://localhost:5000/${post.featuredImage}`)}
                <img 
                  src={`http://localhost:5000/${post.featuredImage}`}
                  alt={post.title} 
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
                    <div className='flex items-center space-x-2 p-2 text-xl'>
                      <p className="font-bold text-gray-500">{post.author?.name || 'Asamoah Richard' }</p>
                      <time className="text-gray-600">on {formatDate(post.createdAt)}</time>
                    </div>
                    

              <div className="p-2">
                <h3 className="text-2xl font-bold mb-3 transition-colors duration-200 group-hover:text-blue-600">
                  <Link to={`/blog/${post._id}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-700 text-xl mb-4 line-clamp-2">
                  {post.subtitle}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {/* <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                      <img 
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2HgtSR9K1d9wwedv8NyqSRXxOuOxWhUryJBFCVmBKJNAa7D8L8VFJrQqA7qnw8aQDD-8&usqp=CAU'
                        className="w-full h-full object-cover"
                      />
                    </div> */}
                    <div>
                     
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Link to={`/blog/${post._id}`} className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700">
                      READ MORE
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
                    
                  
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              {/* Previous button */}
              <button
                onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-3 py-2 rounded-l-md border ${
                  currentPage === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-white text-gray-500 hover:bg-gray-50'
                } text-sm font-medium`}
              >
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Page numbers */}
              {[...Array(totalPages).keys()].map(number => (
                <button
                  key={number + 1}
                  onClick={() => paginate(number + 1)}
                  className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                    currentPage === number + 1
                      ? 'z-10 bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {number + 1}
                </button>
              ))}
              
              {/* Next button */}
              <button
                onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                disabled={currentPage === totalPages}
                className={`relative inline-flex items-center px-3 py-2 rounded-r-md border ${
                  currentPage === totalPages 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-white text-gray-500 hover:bg-gray-50'
                } text-sm font-medium`}
              >
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </nav>
          </div>
        )}
      </section>
    </div>
  )
}

export default BlogContent