import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const BlogContent = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts();
    const intervalId = setInterval(fetchBlogPosts, 5000); // Fetch blog posts every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/blog'); // Replace with your actual API endpoint
      const data = await response.json();
      console.log('Fetched blog posts:', blogPosts); // Log the fetched data
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
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-20 sm:py-48">
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
                <a href="marketing/hubspot-blog-marketing-industry-trends-report.html">The 2024 State of Marketing &amp; Trends Report: Data from 1400+ Global Marketers</a>
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
              {/* Featured post items */}
              <div className="group pb-6 border-b border-gray-200">
                <h3 className="font-medium hover:text-blue-600">
                  <a href="marketing/top-types-of-ai-generated-content-in-marketing.html">The Top Types of AI-Generated Content in Marketing [New Data, Examples &amp; Tips]</a>
                </h3>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <p className="mr-4">Tristen Taylor</p>
                  <time>7/23/24</time>
                </div>
              </div>
              <div className="group pb-6 border-b border-gray-200">
                <h3 className="font-medium hover:text-blue-600">
                  <a href="sales/ultimate-guide-creating-sales-plan.html">What is Sales Planning? How to Create a Sales Plan</a>
                </h3>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <p className="mr-4">Jay Fuchs</p>
                  <time>9/25/24</time>
                </div>
              </div>
              <div className="group pb-6 border-b border-gray-200">
                <h3 className="font-medium hover:text-blue-600">
                  <a href="marketing/marketing-plan-template-generator.html">6 Steps to Create an Outstanding Marketing Plan [Free Templates]</a>
                </h3>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <p className="mr-4">Rebecca Riserbato</p>
                  <time>7/23/24</time>
                </div>
              </div>
              <div className="group pb-6 border-b border-gray-200">
                <h3 className="font-medium hover:text-blue-600">
                  <a href="service/customer-journey-map.html">Customer Journey Maps: How to Create Really Good Ones [Examples + Template]</a>
                </h3>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <p className="mr-4">Aaron Agius</p>
                  <time>11/20/24</time>
                </div>
              </div>
              <div className="group pb-6 border-b border-gray-200">
                <h3 className="font-medium hover:text-blue-600">
                  <a href="website/seo-web-design.html">SEO Web Design: How to Optimize Your Design to Rank Better</a>
                </h3>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <p className="mr-4">Erin Pennings</p>
                  <time>12/16/24</time>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post._id} className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 text-lg font-semibold text-white bg-blue-600 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="relative aspect-w-16 aspect-h-9 h-64">
                {console.log('Image URL:', `http://localhost:5000/${post.featuredImage}`)}
                <img 
                  src={`http://localhost:5000/${post.featuredImage}`}
                  alt={post.title} 
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-bold mb-3 transition-colors duration-200 group-hover:text-blue-600">
                  <Link to={`/blog/${post._id}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                      {/* <img 
                        src={post.author?.avatar || '/default-avatar.png'}
                        alt={post.author?.name || 'Unknown Author'}
                        className="w-full h-full object-cover"
                      /> */}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{post.author?.name || 'Unknown Author'}</p>
                      <time className="text-xs text-gray-500">{formatDate(post.publishDate)}</time>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Link to={`/blog/${post._id}`} className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                      Read More
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
      </section>
    </div>
  )
}

export default BlogContent