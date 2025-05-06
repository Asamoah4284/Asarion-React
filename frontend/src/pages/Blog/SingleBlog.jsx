import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../HomePage/Header';
import Footer from '../HomePage/footer';
import AdsComponent from '../../components/Ads';

const SingleBlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recentPosts, setRecentPosts] = useState([]);

  const getCategoryCount = (category) => {
    return recentPosts.filter(post => post.category === category).length;
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const [postResponse, recentResponse] = await Promise.all([
          fetch(`http://localhost:5000/api/blog/${id}`),
          fetch('http://localhost:5000/api/blog/')
        ]);
        
        const [postData, recentData] = await Promise.all([
          postResponse.json(),
          recentResponse.json()
        ]);
        
        setPost(postData);
        setRecentPosts(recentData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <div className="text-xl text-gray-600 font-medium">Loading your story...</div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
          <div className="text-center space-y-4">
            <div className="text-4xl">🤔</div>
            <div className="text-2xl font-semibold text-gray-800">Post not found</div>
            <p className="text-gray-600">The story you're looking for seems to have wandered off...</p>
          </div>
        </div>
        <Footer />
      </>
    );
    
  }

  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen">
        {/* Hero section with featured image */}
        <div className="relative w-full h-[50vh] overflow-hidden">
          <img 
            src={`http://localhost:5000/${post.featuredImage}`} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="container max-w-7xl mx-auto px-4 pb-12">
              <div className="max-w-3xl">
                <div className="text-sm font-medium text-blue-400 mb-3 uppercase tracking-wider">
                  {post.category || 'Blog'}
                </div>
                <h1 className="font-bold text-3xl md:text-5xl text-white mb-4 leading-tight">
                  {post.title}
                </h1>
                <h2 className="text-lg md:text-xl text-gray-200 max-w-2xl">
                  {post.subtitle}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content column */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-sm p-8 md:p-10">
                {/* Author info and date */}
                <div className="flex items-center mb-8 pb-8 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                    {post.author ? post.author.charAt(0) : 'A'}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{post.author || 'Anonymous'}</div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <span>
                        {new Date(post.createdAt || Date.now()).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime || '5 min read'}</span>
                    </div>
                  </div>
                  <div className="ml-auto flex space-x-3">
                    <button 
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                      onClick={() => {
                        const shareableLink = window.location.href; // Get the current URL
                        if (navigator.share) {
                          navigator.share({
                            title: post.title,
                            url: shareableLink,
                          }).catch((error) => console.error('Error sharing:', error));
                        } else {
                          // Fallback for browsers that do not support the share API
                          navigator.clipboard.writeText(shareableLink)
                            .then(() => alert('Link copied to clipboard!'))
                            .catch((error) => console.error('Error copying link:', error));
                        }
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                    <button className="text-gray-500 hover:text-red-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Main Content */}
                <div 
                  className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {['Technology', 'Design', 'Development'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author bio */}
             
            </div>

            {/* Sidebar with recent posts */}
            <div className="lg:w-1/3">
              <div className="sticky top-8">
                {/* <AdsComponent dataAdSlot={}/> */}
                {/* About section */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    About This Blog
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Explore the latest insights, tutorials, and trends in technology, design, and development. 
                    Our blog is dedicated to helping professionals stay ahead in the digital landscape.
                  </p>
                </div>

                {/* Recent posts */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    Recent Posts
                  </h3>
                  <div className="space-y-6">
                    {recentPosts
                      .filter(recentPost => recentPost._id !== id)
                      .slice(0, 4)
                      .map((recentPost) => (
                        <Link 
                          to={`/blog/${recentPost._id}`} 
                          key={recentPost._id} 
                          className="flex gap-4 group cursor-pointer"
                        >
                          <div className="w-24 h-24 rounded-lg bg-gray-200 flex-shrink-0 overflow-hidden">
                            <img 
                              src={`http://localhost:5000/${recentPost.featuredImage}`}
                              alt={recentPost.title}
                              className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-lg">
                              {recentPost.title}
                            </h4>
                            <div className="text-sm text-gray-500 mt-2">
                              {new Date(recentPost.createdAt).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Link to="/blog" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                      View all posts
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {['Marketing', 'Business', 'Technology', 'Sales'].map((category) => (
                      <div key={category} className="flex justify-between items-center group cursor-pointer">
                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{category}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {getCategoryCount(category)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

               



              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleBlogPost;