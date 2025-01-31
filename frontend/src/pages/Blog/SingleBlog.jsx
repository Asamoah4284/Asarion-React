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
              src={post.featureImage} 
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
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
              className="blog-content text-3xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleBlogPost;