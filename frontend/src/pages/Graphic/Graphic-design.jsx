import Call from "../HomePage/call";
import Footer from "../HomePage/footer";
import Hero from "../HomePage/Hero";

const GraphicDesign = () => {
    return (
        <div>
            <Hero/>
            <div className="container mx-auto px-4 py-16 max-w-7xl">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                        Transform Your Vision Into Reality
                    </h1>
                    <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                        Professional graphic design solutions tailored to elevate your brand
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg">
                        <div className="h-14 w-14 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Brand Identity</h3>
                        <p className="text-gray-600 mb-4">Logo design, brand guidelines, and complete visual identity systems</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-orange-50 shadow-lg">
                        <div className="h-14 w-14 bg-pink-500 rounded-xl flex items-center justify-center mb-4">
                            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Marketing Materials</h3>
                        <p className="text-gray-600 mb-4">Brochures, flyers, social media graphics, and promotional content</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 shadow-lg">
                        <div className="h-14 w-14 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Web Graphics</h3>
                        <p className="text-gray-600 mb-4">Website assets, UI elements, and digital illustrations</p>
                    </div>
                </div>

                {/* Pricing Section */}
                <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {/* Basic Plan */}
                    <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold mb-4">Basic</h3>
                        <div className="flex items-baseline mb-8">
                            <span className="text-4xl font-bold">$499</span>
                            <span className="text-gray-500 ml-2">/project</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Logo Design (2 concepts)
                            </li>
                            <li className="flex items-center">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Business Card Design
                            </li>
                            <li className="flex items-center">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                2 Revision Rounds
                            </li>
                        </ul>
                        <button className="w-full py-3 px-6 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors duration-300">
                            Get Started
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-8 shadow-lg text-white transform scale-105">
                        <div className="absolute top-0 right-0 mt-4 mr-4">
                            <span className="bg-white text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">Popular</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Professional</h3>
                        <div className="flex items-baseline mb-8">
                            <span className="text-4xl font-bold">$999</span>
                            <span className="text-gray-200 ml-2">/project</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center">
                                <svg className="h-5 w-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Logo Design (5 concepts)
                            </li>
                            <li className="flex items-center">
                                <svg className="h-5 w-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Complete Stationery Design
                            </li>
                            <li className="flex items-center">
                                <svg className="h-5 w-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Social Media Kit
                            </li>
                            <li className="flex items-center">
                                <svg className="h-5 w-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Unlimited Revisions
                            </li>
                        </ul>
                        <button className="w-full py-3 px-6 rounded-full bg-white text-blue-600 font-medium hover:bg-gray-100 transition-colors duration-300">
                            Get Started
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                        <div className="flex items-baseline mb-8">
                            <span className="text-4xl font-bold">$1999</span>
                            <span className="text-gray-500 ml-2">/project</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Complete Brand Identity
                            </li>
                            <li className="flex items-center">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Website Design
                            </li>
                            <li className="flex items-center">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Marketing Materials
                            </li>
                            <li className="flex items-center">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Dedicated Support
                            </li>
                        </ul>
                        <button className="w-full py-3 px-6 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Portfolio Section */}
                <h2 className="text-3xl font-bold text-center mb-12">Featured Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Portfolio items from previous design */}
                    <div className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                        <div className="aspect-[16/9] relative overflow-hidden">
                            <img 
                                src="images/Mac.png" 
                                alt="Work 1" 
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-white text-xl font-semibold mb-2">Brand Identity Project</h3>
                                <p className="text-gray-300 text-sm mb-4">Complete rebranding for a tech startup</p>
                                <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 w-fit">
                                    View Case Study
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Add more portfolio items as needed */}
                </div>
            </div>
            <Call/>
            <Footer/>
        </div>
    );
};

export default GraphicDesign;
