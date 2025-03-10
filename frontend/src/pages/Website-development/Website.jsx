import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaMobile, FaShoppingCart } from 'react-icons/fa';
import Footer from '../HomePage/footer';
import Header from '../HomePage/Header';
import Hero from '../HomePage/Hero';
import Testimonials from '../HomePage/testimonials';
import Call from '../HomePage/call';

const Website = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Textcomsms with payment integration',
      image: '/images/Mac.png',
      category: 'E-Commerce',
      subtitle: 'Transform Your Business Communication TextCom provides powerful messaging solutions that transform how businesses connect with their audience.'
    },
    {
      title: 'Corporate Website',
      description: 'Modern corporate website with CMS',
      image: '/images/pm.png',
      category: 'Business',
      subtitle: 'At Asarion, we help your business reach a larger audeience. Our expert team combines creative strategy, From brand development to digital marketing'
    },
    {
      title: 'Mobile App',
      description: 'Bankist Web application',
      image: '/images/bank.png',
      category: 'Mobile',
      subtitle: 'When banking meets minimalist A simpler banking experience for a simpler life.'
    },
   
  
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: 2500,
      features: [
        'Responsive Design',
        '5 Pages',
        'Contact Form',
        'Basic SEO',
        '1 Month Support',
      ],
    },
    {
      name: 'Professional',
      price: 3500,
      features: [
        'Everything in Basic',
        'Custom Design',
        '10 Pages',
        'CMS Integration',
        'Advanced SEO',
        '3 Months Support',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 5000,
      features: [
        'Everything in Professional',
        'E-Commerce Integration',
        'Unlimited Pages',
        'Custom Features',
        'Priority Support',
        '12 Months Support',
      ],
    },
  ];

  return (
    <>
      <Header/>
     {/* Website development page */}
     <div className="bg-gradient-to-r from-gray-50 to-blue-50 pb-28 pt-48 md:pt-60 overflow-hidden">
       <div className="container mx-auto px-4">
         <div className="flex flex-col md:flex-row items-center">
           {/* Left side - Text content */}
           <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-10 md:mb-0">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
             >
               <h1 className="text-4xl  md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 md:leading-relaxed">
                 Transform Your <span className="text-blue-600 ">Digital Presence</span> With Custom Websites
               </h1>
               <p className="text-lg text-gray-600 mb-8">
                 We craft beautiful, responsive websites that drive results. From stunning designs to powerful functionality, we build digital experiences that help your business grow.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                 <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                   <a href="#call">Get Started</a>
                 </button>
                 <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                   View Our Work
                 </button>
               </div>
               <div className="mt-10 flex items-center">
                 <div className="flex -space-x-2">
                   {[1, 2, 3, 4].map((i) => (
                     <img 
                       key={i}
                       src={`/images/avatar-${i}.png`} 
                       alt="Client" 
                       className="w-10 h-10 rounded-full border-2 border-white"
                       onError={(e) => {e.target.src = `https://ui-avatars.com/api/?name=Client+${i}&background=random`}}
                     />
                   ))}
                 </div>
                 <div className="ml-4">
                   <div className="flex items-center">
                     {[1, 2, 3, 4, 5].map((star) => (
                       <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                       </svg>
                     ))}
                   </div>
                   <p className="text-gray-600 text-sm">Trusted by <span className="font-bold">500+</span> clients</p>
                 </div>
               </div>
             </motion.div>
           </div>
           
           {/* Right side - Image */}
           <div className="w-full md:w-1/2 relative">
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative z-99999"
             >
               <img 
                 src="/images/web-image.jpg" 
                 alt="Web Development" 
                 className="w-full h-auto rounded-lg shadow-2xl"
                 onError={(e) => {e.target.src = "https://placehold.co/600x400/e2e8f0/475569?text=Web+Development"}}
               />
             </motion.div>
             
             {/* Decorative elements */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full filter blur-3xl opacity-50"></div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-200 rounded-full filter blur-3xl opacity-50"></div>
             
             {/* Floating elements */}
             <motion.div 
               className="absolute top-10 -left-16 bg-white p-4 rounded-lg shadow-lg z-99999"
               animate={{ 
                 y: [0, -10, 0],
               }}
              
             >
               <div className="flex items-center">
                 <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                   <FaCode className="text-green-600" />
                 </div>
                 <div>
                   <p className="font-bold text-gray-800">Clean Code</p>
                   <p className="text-xs text-gray-500">Optimized Performance</p>
                 </div>
               </div>
             </motion.div>
             
             <motion.div 
               className="absolute bottom-10 -right-10 bg-white p-4 rounded-lg shadow-lg z-99999"
               animate={{ 
                 y: [0, 10, 0],
               }}
              
             >
               <div className="flex items-center">
                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                   <FaRocket className="text-blue-600" />
                 </div>
                 <div>
                   <p className="font-bold text-gray-800">Fast Delivery</p>
                   <p className="text-xs text-gray-500">Quick Turnaround</p>
                 </div>
               </div>
             </motion.div>
           </div>
         </div>
       </div>
     </div>
     {/* carousel */}

   
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mt-16 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Web Development Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Service Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6 transition-all"
          >
            <div className="flex justify-center mb-6">
              <FaCode className="text-5xl text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Custom Web Development</h3>
            <p className="text-gray-600 text-center">
              Tailored solutions built with cutting-edge technologies to meet your specific needs.
            </p>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6 transition-all"
          >
            <div className="flex justify-center mb-6">
              <FaShoppingCart className="text-5xl text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">E-Commerce Solutions</h3>
            <p className="text-gray-600 text-center">
              Powerful online stores with secure payment gateways and inventory management.
            </p>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6 transition-all"
          >
            <div className="flex justify-center mb-6">
              <FaMobile className="text-5xl text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Responsive Design</h3>
            <p className="text-gray-600 text-center">
              Mobile-first websites that look and perform beautifully across all devices.
            </p>
          </motion.div>
        </div>

        {/* Projects Showcase */}
        <div className="my-48">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full"
                />
                <div className='ml-10'>

                <h3 className='text-2xl  font-bold pt-6 transition-colors duration-200 group-hover:text-blue-600'>{project.description}</h3>
                <p className='text-gray-700 text-xl mt-2 line-clamp-2'>{project.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>

  
{/* pricing */}
<section className="py-20 relative overflow-hidden">
  {/* Background decoration */}
  <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0">
    <div className="absolute inset-0 opacity-30">
      <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-200 rounded-full filter blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl"></div>
    </div>
  </div>

  <div className="container mx-auto px-4 relative z-999999">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Choose Your Perfect Plan
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Select the perfect package that suits your needs. Get started with our competitive pricing options.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1400px] mx-auto ">
      {pricingPlans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className={`relative rounded-3xl p-10 ${
            plan.highlighted
              ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white'
              : 'bg-white'
          } shadow-2xl border border-gray-100 min-w-[350px]`}
        >
          {plan.highlighted && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-white text-sm font-semibold px-6 py-4 rounded-full">
                Most Popular
              </span>
            </div>
          )}

          <div className="relative">
            <h3 className={`text-2xl font-bold mb-2 ${
              plan.highlighted ? 'text-white' : 'text-gray-800'
            }`}>
              {plan.name}
            </h3>
            <p className={`text-sm mb-6 ${
              plan.highlighted ? 'text-blue-100' : 'text-gray-500'
            }`}>
              Perfect for {plan.name.toLowerCase()} projects
            </p>

            <div className="mb-8">
              <span className={`text-5xl font-extrabold ${
                plan.highlighted ? 'text-white' : 'text-gray-800'
              }`}>
                 GH₵{plan.price.toLocaleString()}
              </span>
              <span className={`text-lg ${
                plan.highlighted ? 'text-blue-100' : 'text-gray-500'
              }`}>
                /project
              </span>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center"
                >
                  <div className={`mr-3 p-1 rounded-full ${
                    plan.highlighted ? 'bg-blue-500' : 'bg-blue-100'
                  }`}>
                    <svg
                      className={`w-4 h-4 ${
                        plan.highlighted ? 'text-white' : 'text-blue-600'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className={`${
                    plan.highlighted ? 'text-blue-50' : 'text-gray-600'
                  }`}>
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>

            <button
              className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] ${
                plan.highlighted
                  ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
              }`}
            >
              <a href="#call">Get Started Now
              </a>
            </button>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Additional Info */}
    <div className="mt-12 text-center">
      <p className="text-gray-500 text-sm">
        All plans include 24/7 support and free consultations
      </p>
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          <span className="text-gray-600">Money-back Guarantee</span>
        </div>
        <div className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          <span className="text-gray-600">Secure Payments</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <Testimonials/> */}
<Call/>
{/* Footer */}
      <Footer/>
    </>
  );
};

export default Website;
