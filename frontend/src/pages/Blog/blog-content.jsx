import React from 'react'
import { Link} from 'react-router-dom';


const BlogContent = () => {
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
          {/* Post 1 - Marketing Strategy */}
          <article className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 text-lg font-semibold text-white bg-blue-600 rounded-full">
                Marketing
              </span>
            </div>
            <div className="relative aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2370&auto=format&fit=crop"
                alt="Person working on digital course content" 
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 transition-colors duration-200 group-hover:text-blue-600">
                <a href="marketing/digital-course-pitfalls.html">
                  Learn from My Mistakes: 7 Digital Course Pitfalls to Skip
                </a>
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                Discover the common mistakes to avoid when creating your first digital course and learn from experienced course creators...
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                    <img src="/authors/amy-porterfield.jpg" alt="Amy Porterfield" className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Amy Porterfield</p>
                    <time className="text-xs text-gray-500">Dec 2, 2024</time>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a href="marketing/digital-course-pitfalls.html" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                    Read More
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Post 2 - AI & Technology */}
          <article className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 text-lg font-semibold text-white bg-purple-600 rounded-full">
                AI & Tech
              </span>
            </div>
            <div className="relative aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2370&auto=format&fit=crop"
                alt="AI and social media concept" 
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 transition-colors duration-200 group-hover:text-blue-600">
                <a href="marketing/ai-social-media-strategy.html">
                  How to Use AI For a More Effective Social Media Strategy
                </a>
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                Leverage artificial intelligence to optimize your social media presence and engage with your audience more effectively...
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                    <img src="/authors/ross-simmonds.jpg" alt="Ross Simmonds" className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Ross Simmonds</p>
                    <time className="text-xs text-gray-500">Nov 20, 2024</time>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a href="marketing/ai-social-media-strategy.html" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                    Read More
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Post 3 - DEI in Marketing */}
          <article className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 text-lg font-semibold text-white bg-green-600 rounded-full">
                DEI
              </span>
            </div>
            <div className="relative aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2374&auto=format&fit=crop"
                alt="Diverse marketing team collaborating" 
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 transition-colors duration-200 group-hover:text-blue-600">
                <a href="marketing/representation-in-marketing.html">
                  How To Do Representation in Marketing the Right Way
                </a>
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                Learn how to create authentic, inclusive marketing campaigns that resonate with diverse audiences and drive meaningful engagement...
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                    <img src="/authors/sonia-thompson.jpg" alt="Sonia Thompson" className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Sonia Thompson</p>
                    <time className="text-xs text-gray-500">Oct 7, 2024</time>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a href="marketing/representation-in-marketing.html" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                    Read More
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Post 4 - Content Strategy */}
          <article className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 text-lg font-semibold text-white bg-red-600 rounded-full">
                Content
              </span>
            </div>
            <div className="relative aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2374&auto=format&fit=crop"
                alt="Person creating short-form video content" 
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 transition-colors duration-200 group-hover:text-blue-600">
                <Link to="/singleBlog">
                  The Psychology of Short-Form Content
                </Link>
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                Understanding why short-form videos captivate audiences and how to leverage this format for maximum engagement...
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                    <img src="/authors/erica-santiago.jpg" alt="Erica Santiago" className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Erica Santiago</p>
                    <time className="text-xs text-gray-500">Sep 13, 2024</time>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                    Read More
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Post 5 - SEO */}
          <article className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 text-lg font-semibold text-white bg-yellow-600 rounded-full">
                SEO
              </span>
            </div>
            <div className="relative aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2370&auto=format&fit=crop"
                alt="SEO performance dashboard" 
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 transition-colors duration-200 group-hover:text-blue-600">
                <a href="website/seo-web-design.html">
                  SEO Web Design: How to Optimize Your Design to Rank Better
                </a>
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                Learn the essential principles of SEO-friendly web design and how to create websites that both users and search engines love...
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                    <img src="/authors/erin-pennings.jpg" alt="Erin Pennings" className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Erin Pennings</p>
                    <time className="text-xs text-gray-500">Dec 16, 2024</time>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a href="website/seo-web-design.html" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                    Read More
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default BlogContent