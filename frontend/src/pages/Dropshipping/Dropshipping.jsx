import Call from "../HomePage/call";
import Footer from "../HomePage/footer";
import Header from "../HomePage/Header";
import { motion } from 'framer-motion';
import { FaBox, FaStore, FaChartLine, FaCheck } from 'react-icons/fa';

function Dropshipping() {
    return (
        <div className="pt-28 md:pt-44">
            <Header/>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-gradient-to-r from-blue-900/90 to-purple-900/80 py-20 md:py-28 overflow-hidden"
            >
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    {/* Left side - Text content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 mb-10 md:mb-0 md:px-8 z-0"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Transform Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">E-commerce</span> Dreams into Reality
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 my-6">
                            Launch, scale, and manage your dropshipping business with our all-in-one solution that puts you ahead of the competition.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:scale-105 transition duration-300 text-lg font-semibold shadow-lg">
                                Start Your Journey
                            </button>
                            <button className="px-8 py-4 bg-transparent border-2 border-white/70 text-white rounded-full hover:bg-white/10 transition duration-300 text-lg font-semibold">
                                Watch Demo
                            </button>
                        </div>
                    </motion.div>
                    
                    {/* Right side - Enhanced image arrangement */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:w-1/2 w-full relative"
                    >
                        <div className="relative h-[400px] md:h-[500px] w-full perspective-1000">
                            {/* Main large image */}
                            <motion.div 
                                initial={{ rotate: 5 }}
                                animate={{ rotate: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="absolute top-0 left-0 w-[70%] h-[60%] md:w-3/4 md:h-3/4 rounded-xl overflow-hidden shadow-2xl"
                                style={{ zIndex: 0 }}
                                whileHover={{ scale: 1.03, rotate: -2 }}
                            >
                                <img src="/images/d-2.jpeg" alt="Online store" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                            </motion.div>
                            
                            {/* Smaller overlapping images */}
                            <motion.div 
                                initial={{ rotate: -8, y: 20 }}
                                animate={{ rotate: -1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="absolute bottom-0 right-0 w-[70%] h-[60%] md:w-2/3 md:h-2/3 rounded-xl overflow-hidden shadow-2xl"
                                style={{ zIndex: 0 }}
                                whileHover={{ scale: 1.05, rotate: 0 }}
                            >
                                <img src="/images/d-1.jpeg" alt="Products" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
                            </motion.div>
                            
                            {/* Floating elements */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.7 }}
                                className="absolute top-1/4 right-0 bg-white p-3 md:p-4 rounded-lg shadow-xl"
                                style={{ zIndex: 0 }}
                                whileHover={{ scale: 1.1, rotate: 3 }}
                            >
                                <div className="flex items-center gap-2 md:gap-3">
                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                                        <FaChartLine className="text-sm md:text-base" />
                                    </div>
                                    <div>
                                        <p className="text-xs md:text-sm font-bold text-gray-800">Sales Growth</p>
                                        <p className="text-green-500 font-bold text-xs md:text-base">+127%</p>
                                    </div>
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.9 }}
                                className="absolute bottom-10 left-10 bg-white p-3 md:p-4 rounded-lg shadow-xl"
                                style={{ zIndex: 0 }}
                                whileHover={{ scale: 1.1, rotate: -3 }}
                            >
                                <div className="flex items-center gap-2 md:gap-3">
                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                        <FaBox className="text-sm md:text-base" />
                                    </div>
                                    <div>
                                        <p className="text-xs md:text-sm font-bold text-gray-800">Products</p>
                                        <p className="text-blue-500 font-bold text-xs md:text-base">10,000+</p>
                                    </div>
                                </div>
                            </motion.div>
                            
                            {/* Background decorative elements */}
                            <div className="absolute w-full h-full bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-3xl transform rotate-3 scale-110" style={{ zIndex: 0 }}></div>
                            <div className="absolute w-4/5 h-4/5 border-2 border-white/10 rounded-3xl transform -rotate-3 scale-105 right-0 bottom-0" style={{ zIndex: 0 }}></div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="my-32 container mx-auto px-4"
            >
                <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-8 rounded-xl bg-white shadow-xl hover:shadow-2xl transition duration-300">
                        <div className="text-5xl text-blue-500 mb-6 flex justify-center">
                            <FaBox />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Select Products</h3>
                        <p className="text-gray-600">Choose from thousands of pre-vetted products ready to sell</p>
                    </div>
                    <div className="text-center p-8 rounded-xl bg-white shadow-xl hover:shadow-2xl transition duration-300">
                        <div className="text-5xl text-blue-500 mb-6 flex justify-center">
                            <FaStore />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Set Up Store</h3>
                        <p className="text-gray-600">Create your branded store with our easy-to-use platform</p>
                    </div>
                    <div className="text-center p-8 rounded-xl bg-white shadow-xl hover:shadow-2xl transition duration-300">
                        <div className="text-5xl text-blue-500 mb-6 flex justify-center">
                            <FaChartLine />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Start Selling</h3>
                        <p className="text-gray-600">Launch your store and start generating sales</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.7 }}
                className="my-20 bg-gray-50 py-16"
            >
                <div className="container my-32 mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">Why Choose Our Platform</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <img src="/images/01.jpeg" 
                                    alt="Dropshipping product" 
                                    className="w-full h-48 object-cover rounded-lg shadow-md" />
                                <img src="/images/04.jpeg" 
                                    alt="Dropshipping store" 
                                    className="w-full h-48 object-cover rounded-lg shadow-md mt-8" />
                                <img src="/images/03.jpeg" 
                                    alt="Dropshipping analytics" 
                                    className="w-full h-48 object-cover rounded-lg shadow-md" />
                                <img src="/images/02.jpeg" 
                                    alt="Dropshipping success" 
                                    className="w-full h-48 object-cover rounded-lg shadow-md mt-8" />
                            </div>
                        </div>

                        <div>
                            <h4 className="text-2xl font-bold text-gray-800 mb-6">Scale Your E-commerce Business Effortlessly</h4>
                            <p className="text-gray-600 mb-6">
                                Our dropshipping platform provides everything you need to launch, manage, and grow your online store without the hassle of inventory management or shipping logistics.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-gray-600">
                                    <FaCheck className="h-5 w-5 mr-2 text-blue-600" />
                                    Curated Product Selection
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <FaCheck className="h-5 w-5 mr-2 text-blue-600" />
                                    Automated Order Fulfillment
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <FaCheck className="h-5 w-5 mr-2 text-blue-600" />
                                    Advanced Analytics Dashboard
                                </li>
                            </ul>
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center">
                                Start Your Free Trial
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Steps to engage in dropshipping section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.7 }}
                className="my-32 container mx-auto px-4"
            >
                <h2 className="text-4xl font-bold text-center mb-16">How Our Dropshipping Works</h2>
                
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left side - Bulleted steps */}
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">Simple 4-Step Process</h3>
                        
                        <ul className="space-y-6">
                            <motion.li 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.3, duration: 0.5 }}
                                className="flex items-start"
                            >
                                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">1</div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Customer Places an Order</h4>
                                    <p className="text-gray-600">Your customer places an order from your online store. You don't need to handle inventory or shipping.</p>
                                </div>
                            </motion.li>
                            
                            <motion.li 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.4, duration: 0.5 }}
                                className="flex items-start"
                            >
                                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">2</div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-2">We Handle Fulfillment</h4>
                                    <p className="text-gray-600">We automatically send the order to your customer through our delivery service. No work required on your end.</p>
                                </div>
                            </motion.li>
                            
                            <motion.li 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.5, duration: 0.5 }}
                                className="flex items-start"
                            >
                                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">3</div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Customer Receives Product</h4>
                                    <p className="text-gray-600">Your customer receives the product directly at their doorstep, creating a seamless shopping experience.</p>
                                </div>
                            </motion.li>
                            
                            <motion.li 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.6, duration: 0.5 }}
                                className="flex items-start"
                            >
                                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">4</div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-2">You Earn 25% Profit</h4>
                                    <p className="text-gray-600">You earn 25% of our profit on that product. Payments are processed automatically to your account.</p>
                                </div>
                            </motion.li>
                        </ul>
                        
                        <motion.button 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8, duration: 0.5 }}
                            className="mt-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center"
                        >
                            Start Earning Today
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </motion.button>
                    </div>
                    
                    {/* Right side - Image with decorative elements */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.3, duration: 0.7 }}
                        className="md:w-1/2 relative"
                    >
                        <div className="relative">
                            {/* Main image */}
                            <div className="rounded-xl overflow-hidden shadow-2xl">
                                <img 
                                    src="/images/steps-image.jpeg" 
                                    alt="Dropshipping workflow" 
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent"></div>
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-blue-500 rounded-tl-xl"></div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-purple-500 rounded-br-xl"></div>
                            
                            {/* Floating stats card */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.6, duration: 0.5 }}
                                className="absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-xl"
                                whileHover={{ scale: 1.05, rotate: -2 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                                        <FaChartLine className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-800">Profit Share</p>
                                        <p className="text-green-500 font-bold text-xl">25%</p>
                                    </div>
                                </div>
                            </motion.div>
                            
                            {/* Floating badge */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.7, duration: 0.5 }}
                                className="absolute -top-6 -right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg"
                                whileHover={{ scale: 1.1, rotate: 10 }}
                            >
                                <div className="text-center">
                                    <p className="text-xs font-bold">ZERO</p>
                                    <p className="text-lg font-bold">HASSLE</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Steps to engage in the dropshipping */}
            <Call/>
            <Footer/>
        </div>
    );
}

export default Dropshipping;
