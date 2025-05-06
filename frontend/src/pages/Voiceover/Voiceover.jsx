import React, { useState } from 'react';
import Header from '../HomePage/Header';
import Footer from '../HomePage/footer';

import { motion } from 'framer-motion';
import { FaPlay, FaMicrophone, FaAward, FaHeadphones, FaBullhorn, FaBriefcase, FaGraduationCap, FaFilm } from 'react-icons/fa';
import Call from '../HomePage/call';
import Testimonials from '../HomePage/testimonials';

const Voiceover = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Sample data - replace with your actual voiceover works
    const voiceoverWorks = [
        {
            id: 1,
            title: "Commercial Narration",
            client: "Asarion Inc.",
            duration: "60 seconds",
            description: "Engaging commercial voiceover for Asarion Incorporated",
            thumbnail: "/images/ke.jpeg",
            videoUrl: "/images/Net.mp4",
            category: "Commercial"
        },
        {
            id: 1,
            title: "Asarion Kelemuchies",
            client: "KeleMunchies",
            duration: "60 seconds",
            description: "Engaging commercial voiceover for KeleMunchies",
            thumbnail: "/images/kelewele.jpeg",
            videoUrl: "/images/Net.mp4",
            category: "Business"
        },
        {
            id: 2,
            title: "Documentary Narration",
            client: "Netflix Channel",
            duration: "60 seconds",
            description: "Captivating narration bringing nature's stories to life",
            thumbnail: "/images/netflix.jpeg",
            videoUrl: "/videos/documentary-demo.mp4",
            category: "Netlfix"
        },
        // Add more items as needed
    ];

    const stats = [
        { icon: <FaMicrophone className="text-4xl text-blue-500" />, number: "500+", label: "Projects Completed" },
        { icon: <FaHeadphones className="text-4xl text-blue-500" />, number: "150+", label: "Satisfied Clients" },
        { icon: <FaAward className="text-4xl text-blue-500" />, number: "15+", label: "Years Experience" },
    ];

    const services = [
        {
            title: 'Commercial & Corporate',
            icon: <FaBullhorn className="text-4xl text-blue-500 group-hover:text-white transition-colors duration-300" />,
            description: 'Compelling commercial and corporate voiceovers that drive deliver your message with impact',
            features: ['TV & Radio Spots', 'Corporate Communications', 'Digital Media', 'IVR Systems']
        },
        {
            title: 'E-Learning',
            icon: <FaGraduationCap className="text-4xl text-blue-500 group-hover:text-white transition-colors duration-300" />,
            description: 'Clear and engaging educational content delivery for maximum learning retention',
            features: ['Course Materials', 'Tutorial Videos', 'Learning Modules', 'Training Programs']
        },
        {
            title: 'Animation & Entertainment',
            icon: <FaFilm className="text-4xl text-blue-500 group-hover:text-white transition-colors duration-300" />,
            description: 'Character voicing and narrative storytelling that brings your content to life',
            features: ['Character Voices', 'Explainer Videos', 'Storytelling', 'Video Games']
        }
    ];

    return (
        <div className="min-h-screen pt-40 md:pt-60 bg-gray-50">
            <Header />
            <main className="container mx-auto px-4">
                {/* Hero Section */}
                <section className="">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                                Bringing Stories to
                             Life
                                <span className='text-blue-600 mt-2'>Through Voice</span>
                            </h1>
                            <p className="text-xl text-gray-600">
                                Professional voiceover services that elevate your content with clarity, emotion, and authenticity. From commercials to documentaries, your Brand deserves a voice that resonates.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200">
                                    <a href="#works">Listen to Demos</a>
                                </button>
                                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200">
                                    Get a Quote
                                </button>
                            </div>
                            <div className="grid grid-cols-3 gap-8 pt-8">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="text-center"
                                    >
                                        {stat.icon}
                                        <div className="mt-2 text-2xl font-bold text-gray-900">{stat.number}</div>
                                        <div className="text-sm text-gray-600">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="flex">
                                <div className="w-1/2  overflow-hidden shadow-2xl">
                                    <img
                                        src="/images/voiceover.jpeg"
                                        alt="Professional recording studio"
                                        className="w-full h-[300px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
                                </div>
                                <div className="w-1/2  overflow-hidden shadow-2xl">
                                    <img
                                        src="images/voice-art.jpeg"
                                        alt="Voice artist at work"
                                        className="w-full h-[300px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-24 bg-gray-50">
                    <div className="">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Specialized Services
                            </h2>
                            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Premium voiceover solutions tailored to elevate your project
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {services.map((service) => (
                                <motion.div 
                                    key={service.title}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    <div className="relative p-10">
                                        <div className="flex items-center justify-center h-20 mb-8">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 mb-8 group-hover:text-blue-50 transition-colors duration-300">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-3">
                                            {service.features.map((feature, index) => (
                                                <li 
                                                    key={index}
                                                    className="flex items-center text-gray-500 group-hover:text-blue-50 transition-colors duration-300"
                                                >
                                                    <FaMicrophone className="w-4 h-4 mr-2 text-blue-500 group-hover:text-white" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Portfolio Section */}
                <section className="py-24">
                    <div className="">
                        <div className="text-center mb-16">
                            <h2 id='works' className="text-4xl font-bold text-gray-900 mb-4">
                                Featured Works
                            </h2>
                            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Listen to some of my recent voiceover projects across different genres
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {voiceoverWorks.map((work) => (
                                <motion.div 
                                    key={work.id}
                                    whileHover={{ y: -8 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="relative aspect-video">
                                        <img 
                                            src={work.thumbnail} 
                                            alt={work.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                                                    onClick={() => setSelectedVideo(work.videoUrl)}
                                                >
                                                    <FaPlay className="text-2xl text-white ml-1" />
                                                </motion.button>
                                            </div>
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-2">
                                                    {work.category}
                                                </span>
                                                <p className="text-white text-sm">
                                                    {work.duration}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-xl font-bold text-gray-900">
                                                {work.title}
                                            </h3>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                className="text-blue-600 hover:text-blue-700"
                                            >
                                                <FaHeadphones className="text-xl" />
                                            </motion.button>
                                        </div>
                                        <p className="text-blue-600 font-medium mb-2">{work.client}</p>
                                        <p className="text-gray-600 line-clamp-2">{work.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="my-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Transparent Pricing
                            </h2>
                            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Professional voiceover services tailored to your project needs and budget
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Standard Package */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="absolute top-0 left-0 right-0 h-2 bg-blue-400"></div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
                                    <p className="text-gray-600 mb-6">Perfect for small projects and startups</p>
                                    <div className="flex items-end mb-6">
                                        <span className="text-5xl font-bold text-gray-900">GH₵150</span>
                                        <span className="text-gray-500 ml-2 mb-1">/ project</span>
                                    </div>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span className="text-gray-600">Up to 150 words</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span className="text-gray-600">2 revisions included</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span className="text-gray-600">48-hour delivery</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span className="text-gray-600">Commercial use rights</span>
                                        </li>
                                    </ul>
                                    <button className="w-full py-4 bg-white border-2 border-blue-500 text-blue-500 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200">
                                    <a 
                href="https://wa.me/+233542343069?text=Hi,%20I'm%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>                                    </button>
                                </div>
                            </motion.div>
                            
                            {/* Premium Package */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform md:-translate-y-4 z-0"
                            >
                                <div className="absolute top-0 left-0 right-0 h-2 bg-blue-600"></div>
                                <div className="absolute top-6 right-6">
                                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                                        Most Popular
                                    </span>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                                    <p className="text-gray-600 mb-6">Ideal for professional projects</p>
                                    <div className="flex items-end mb-6">
                                        <span className="text-5xl font-bold text-gray-900">GH₵300</span>
                                        <span className="text-gray-500 ml-2 mb-1">/ project</span>
                                    </div>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span className="text-gray-600">Up to 500 words</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span className="text-gray-600">Unlimited revisions</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span className="text-gray-600">24-hour delivery</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span className="text-gray-600">Commercial use rights</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span className="text-gray-600">Background music options</span>
                                        </li>
                                    </ul>
                                    <button className="w-full py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200">
                                    <a 
                href="https://wa.me/+233542343069?text=Hi,%20I'm%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>                                    </button>
                                </div>
                            </motion.div>
                            
                            {/* Enterprise Package */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="absolute top-0 left-0 right-0 h-2 bg-blue-800"></div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                                    <p className="text-gray-600 mb-6">Custom solutions for large projects</p>
                                    <div className="flex items-end mb-6">
                                        <span className="text-5xl font-bold text-gray-900">Custom</span>
                                    </div>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span className="text-gray-600">Unlimited word count</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span className="text-gray-600">Priority service</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span className="text-gray-600">Dedicated account manager</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span className="text-gray-600">Multiple voice options</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span className="text-gray-600">Full production support</span>
                                        </li>
                                    </ul>
                                    <button className="w-full py-4 bg-white border-2 border-blue-500 text-blue-500 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200">
                                    <a 
                href="https://wa.me/+233542343069?text=Hi,%20I'm%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started Now
              </a>                                    </button>
                                </div>
                            </motion.div>
                        </div>
                        
                        
                    </div>
                </section>

            </main>
            <Testimonials/>
            <Call/>
            <Footer />

            {selectedVideo && (
                <div 
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div className="relative w-full max-w-4xl aspect-video">
                        <button 
                            onClick={() => setSelectedVideo(null)}
                            className="absolute -top-12 right-0 text-white hover:text-blue-400 text-3xl"
                        >
                            ×
                        </button>
                        <video
                            className="w-full h-full rounded-lg"
                            controls
                            autoPlay
                            onClick={e => e.stopPropagation()}
                        >
                            <source src={selectedVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Voiceover;