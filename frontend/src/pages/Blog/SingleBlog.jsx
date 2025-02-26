import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../HomePage/Header';
import Footer from '../HomePage/footer';

const SingleBlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blog/${id}`);
        const data = await response.json();
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog post:', error);
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
      <div className="container max-w-5xl mx-auto py-20">
        <div className="mx-0 sm:mx-6">
          <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal">
            {/* Feature Image */}
            <img 
               src={`http://localhost:5000/${post.featuredImage}`} 
              alt={post.title}
              className="w-full h-[450px] object-cover rounded-lg mb-8"
            />
            
            {/* Title */}
            <h1 className="font-bold text-4xl mb-4">
              {post.title}
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl text-gray-600 mb-8">
              {post.subtitle}
            </h2>

            {/* Main Content Paragraphs */}
            <div 
              className="blog-content text-3xl custom-font"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Read Next Section */}
            <div className="mt-12">
              <h3 className="text-3xl font-bold mb-4">Read Next</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                  <h4 className="font-semibold">Next Post Title 1</h4>
                  <p className="text-gray-600">Brief description of the next post.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                  <h4 className="font-semibold">Next Post Title 2</h4>
                  <p className="text-gray-600">Brief description of the next post.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                  <h4 className="font-semibold">Next Post Title 3</h4>
                  <p className="text-gray-600">Brief description of the next post.</p>
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