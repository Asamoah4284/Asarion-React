import Call from "../HomePage/call";
import Footer from "../HomePage/footer";
import Header from "../HomePage/Header";

const GraphicDesign = () => {
    return (
        <div>
            <Header/>
            {/* Custom Graphic Design Hero Section */}
            <div className="relative pt-28 overflow-hidden bg-gradient-to-r from-indigo-950 via-violet-900 to-fuchsia-900">
                {/* Dynamic Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
                    <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 blur-[100px] opacity-30"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 blur-[100px] opacity-30"></div>
                    <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 blur-[80px] opacity-20"></div>
                </div>
                
                <div className="container mx-auto px-4 py-20 md:py-32 max-w-7xl relative z-0">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-3/5 mb-12 md:mb-0">
                            <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full mb-6">
                                <p className="text-sm font-medium text-blue-200 flex items-center">
                                    <span className="inline-block w-2 h-2 bg-blue-300 rounded-full mr-2 animate-pulse"></span>
                                    Award-winning design studio
                                </p>
                            </div>
                            
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                                <span className="block">Elevate Your Brand With</span>
                                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Creative Design</span>
                            </h1>
                            
                            <p className="text-2xl text-blue-100 mb-8 max-w-lg">
                                We transform ideas into visual masterpieces that captivate your audience and drive real business results.
                            </p>
                            
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 transform hover:-translate-y-1">
                                    <a href="#call">Start Your Project</a>
                                </button>
                                <button className="group px-8 py-4 bg-transparent border-2 border-white/30 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                                    <a href="#featured-works">View Portfolio</a> 
                                  
                                </button>
                            </div>
                            
                            {/* Client Logos */}
                            <div className="mt-16">
                                <p className="text-blue-200 mb-4 text-sm uppercase tracking-wider font-medium">Trusted by innovative brands</p>
                                <div className="flex flex-wrap items-center gap-8">
                                    <div className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
                                        <svg viewBox="0 0 24 24" fill="white" className="h-full">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                                        </svg>
                                    </div>
                                    <div className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
                                        <svg viewBox="0 0 24 24" fill="white" className="h-full">
                                            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                                        </svg>
                                    </div>
                                    <div className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
                                        <svg viewBox="0 0 24 24" fill="white" className="h-full">
                                            <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Hero 3D Illustration */}
                        <div className="md:w-2/5 relative">
                            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl">
                                {/* 3D Floating Elements */}
                                <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl transform rotate-12 shadow-xl animate-float-slow"></div>
                                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl transform -rotate-12 shadow-xl animate-float-medium"></div>
                                
                                {/* Main Content Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600 p-1 transform transition-transform hover:scale-105 duration-300">
                                        <div className="h-full w-full bg-blue-900/80 rounded-md flex items-center justify-center backdrop-blur-sm">
                                            <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-400 p-1 transform transition-transform hover:scale-105 duration-300">
                                        <div className="h-full w-full bg-blue-900/80 rounded-md flex items-center justify-center backdrop-blur-sm">
                                            <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500 p-1 transform transition-transform hover:scale-105 duration-300">
                                        <div className="h-full w-full bg-blue-900/80 rounded-md flex items-center justify-center backdrop-blur-sm">
                                            <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-green-400 to-emerald-500 p-1 transform transition-transform hover:scale-105 duration-300">
                                        <div className="h-full w-full bg-blue-900/80 rounded-md flex items-center justify-center backdrop-blur-sm">
                                            <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Interactive Elements */}
                                <div className="absolute -top-6 -right-6 h-12 w-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-pulse-slow">
                                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                                <div className="absolute -bottom-4 -left-4 h-10 w-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg animate-pulse-slow animation-delay-500">
                                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                                    </svg>
                                </div>
                            </div>
                            
                            {/* Decorative Elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
                                <div className="absolute top-0 left-0 w-full h-full border-4 border-dashed border-blue-400/20 rounded-2xl transform rotate-6 animate-rotate-slow"></div>
                                <div className="absolute top-0 left-0 w-full h-full border-4 border-dashed border-pink-400/20 rounded-2xl transform -rotate-3 animate-rotate-slow animation-reverse"></div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Stats Section */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <p className="text-4xl font-bold text-white mb-2">250+</p>
                            <p className="text-blue-200">Projects Completed</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-white mb-2">15+</p>
                            <p className="text-blue-200">Design Awards</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-white mb-2">99%</p>
                            <p className="text-blue-200">Client Satisfaction</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-white mb-2">10+</p>
                            <p className="text-blue-200">Years Experience</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
            <div className="container mx-auto px-4 py-32 max-w-7xl">
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

             

                {/* Portfolio Section */}
                <div className="mb-10 py-32">
                <h2 id="featured-works" className="text-3xl font-bold  text-center mb-12">Featured Works</h2>
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <button className="px-6 py-2 rounded-full bg-blue-100 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300">
                            All Projects
                        </button>
                        <button className="px-6 py-2 rounded-full hover:bg-blue-100 text-gray-600 font-medium hover:text-blue-600 transition-colors duration-300">
                            Branding
                        </button>
                        <button className="px-6 py-2 rounded-full hover:bg-blue-100 text-gray-600 font-medium hover:text-blue-600 transition-colors duration-300">
                            Web Design
                        </button>
                        <button className="px-6 py-2 rounded-full hover:bg-blue-100 text-gray-600 font-medium hover:text-blue-600 transition-colors duration-300">
                            Packaging
                        </button>
                        <button className="px-6 py-2 rounded-full hover:bg-blue-100 text-gray-600 font-medium hover:text-blue-600 transition-colors duration-300">
                            Print
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Portfolio Item 1 */}
                        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img 
                                    src="/images/g1.jpg" 
                                    alt="Brand identity for Eco Solutions" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-2">
                                            Branding
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-1">Eco Solutions Rebrand</h3>
                                        <p className="text-gray-200 text-sm">Complete brand identity refresh for sustainable products company</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l5-5m0 0l-5-5m5 5H4" />
                                </svg>
                            </div>
                        </div>

                        {/* Portfolio Item 2 */}
                        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img 
                                    src="/images/g2.jpg" 
                                    alt="Packaging design for Artisan Coffee" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="inline-block px-3 py-1 bg-pink-600 text-white text-xs font-semibold rounded-full mb-2">
                                            Packaging
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-1">Artisan Coffee Collection</h3>
                                        <p className="text-gray-200 text-sm">Premium packaging design for specialty coffee brand</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <svg className="h-5 w-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l5-5m0 0l-5-5m5 5H4" />
                                </svg>
                            </div>
                        </div>

                        {/* Portfolio Item 3 */}
                        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img 
                                    src="/images/g3.jpg" 
                                    alt="Web design for Fintech platform" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full mb-2">
                                            Web Design
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-1">Fintech Dashboard</h3>
                                        <p className="text-gray-200 text-sm">Modern UI/UX design for financial technology platform</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l5-5m0 0l-5-5m5 5H4" />
                                </svg>
                            </div>
                        </div>

                        {/* Portfolio Item 4 */}
                        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img 
                                    src="/images/g4.jpg" 
                                    alt="Magazine layout design" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full mb-2">
                                            Print
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-1">Lifestyle Magazine</h3>
                                        <p className="text-gray-200 text-sm">Editorial design and layout for premium lifestyle publication</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l5-5m0 0l-5-5m5 5H4" />
                                </svg>
                            </div>
                        </div>

                        {/* Portfolio Item 5 */}
                        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img 
                                    src="/images/g5.jpg" 
                                    alt="Brand identity for fashion label" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-2">
                                            Branding
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-1">Luxe Fashion Identity</h3>
                                        <p className="text-gray-200 text-sm">Sophisticated brand identity for high-end fashion label</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l5-5m0 0l-5-5m5 5H4" />
                                </svg>
                            </div>
                        </div>

                        {/* Portfolio Item 6 */}
                        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img 
                                    src="/images/g6.jpg" 
                                    alt="App UI design for health tracker" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full mb-2">
                                            Web Design
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-1">Health Tracker App</h3>
                                        <p className="text-gray-200 text-sm">Intuitive mobile app interface for health monitoring</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l5-5m0 0l-5-5m5 5H4" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* View More Button */}
                    <div className="text-center mt-16">
                        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center mx-auto">
                            View All Projects
                            <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* NEW SECTION: Client Testimonials & Process */}
                <div className="mb-24">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-3">
                            CLIENT SUCCESS STORIES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover how our design solutions have transformed businesses and delighted clients worldwide
                        </p>
                    </div>
                    
                    {/* Testimonial Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* Testimonial 1 */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative">
                            <div className="absolute -top-5 left-8">
                                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-full shadow-lg">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.032.303-.406.7-.754 1.19-1.045l-.025-.958c-.6.302-1.192.72-1.78 1.253-.59.533-1.052 1.12-1.39 1.76-.338.64-.506 1.283-.506 1.93 0 .573.128 1.12.384 1.636.26.518.62.94 1.08 1.267.46.327.97.49 1.525.49.698 0 1.312-.197 1.843-.592.53-.396.795-.92.795-1.574.002-.109 0-.218-.006-.328zm8.364 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.622.4-2.033.31-.41.71-.76 1.2-1.05l-.03-.96c-.6.305-1.19.723-1.78 1.255-.59.533-1.05 1.12-1.39 1.76-.33.64-.5 1.283-.5 1.93 0 .573.13 1.12.38 1.636.26.518.62.94 1.08 1.267.46.327.97.49 1.53.49.7 0 1.31-.197 1.84-.592.53-.396.8-.92.8-1.574.002-.109 0-.218-.006-.328z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="pt-6">
                                <p className="text-gray-600 mb-6 italic">
                                    "The team delivered a brand identity that perfectly captures our company's vision. The attention to detail and creativity exceeded our expectations."
                                </p>
                                <div className="flex items-center">
                                    <img 
                                        src="https://randomuser.me/api/portraits/women/45.jpg" 
                                        alt="Client" 
                                        className="h-12 w-12 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="font-bold">Sarah Johnson</h4>
                                        <p className="text-sm text-gray-500">CEO, Innovate Tech</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Testimonial 2 */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative">
                            <div className="absolute -top-5 left-8">
                                <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white p-2 rounded-full shadow-lg">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.032.303-.406.7-.754 1.19-1.045l-.025-.958c-.6.302-1.192.72-1.78 1.253-.59.533-1.052 1.12-1.39 1.76-.338.64-.506 1.283-.506 1.93 0 .573.128 1.12.384 1.636.26.518.62.94 1.08 1.267.46.327.97.49 1.525.49.698 0 1.312-.197 1.843-.592.53-.396.795-.92.795-1.574.002-.109 0-.218-.006-.328zm8.364 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.622.4-2.033.31-.41.71-.76 1.2-1.05l-.03-.96c-.6.305-1.19.723-1.78 1.255-.59.533-1.05 1.12-1.39 1.76-.33.64-.5 1.283-.5 1.93 0 .573.13 1.12.38 1.636.26.518.62.94 1.08 1.267.46.327.97.49 1.53.49.7 0 1.31-.197 1.84-.592.53-.396.8-.92.8-1.574.002-.109 0-.218-.006-.328z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="pt-6">
                                <p className="text-gray-600 mb-6 italic">
                                    "Our packaging redesign led to a 40% increase in retail sales. The designs are not just beautiful, they're strategically crafted to connect with our target audience."
                                </p>
                                <div className="flex items-center">
                                    <img 
                                        src="https://randomuser.me/api/portraits/men/32.jpg" 
                                        alt="Client" 
                                        className="h-12 w-12 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="font-bold">Michael Chen</h4>
                                        <p className="text-sm text-gray-500">Marketing Director, Artisan Foods</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Testimonial 3 */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative">
                            <div className="absolute -top-5 left-8">
                                <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-2 rounded-full shadow-lg">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.032.303-.406.7-.754 1.19-1.045l-.025-.958c-.6.302-1.192.72-1.78 1.253-.59.533-1.052 1.12-1.39 1.76-.338.64-.506 1.283-.506 1.93 0 .573.128 1.12.384 1.636.26.518.62.94 1.08 1.267.46.327.97.49 1.525.49.698 0 1.312-.197 1.843-.592.53-.396.795-.92.795-1.574.002-.109 0-.218-.006-.328zm8.364 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.622.4-2.033.31-.41.71-.76 1.2-1.05l-.03-.96c-.6.305-1.19.723-1.78 1.255-.59.533-1.05 1.12-1.39 1.76-.33.64-.5 1.283-.5 1.93 0 .573.13 1.12.38 1.636.26.518.62.94 1.08 1.267.46.327.97.49 1.53.49.7 0 1.31-.197 1.84-.592.53-.396.8-.92.8-1.574.002-.109 0-.218-.006-.328z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="pt-6">
                                <p className="text-gray-600 mb-6 italic">
                                    "Working with this team transformed our digital presence. The web graphics and UI elements they designed have significantly improved user engagement and conversion rates."
                                </p>
                                <div className="flex items-center">
                                    <img 
                                        src="https://randomuser.me/api/portraits/women/68.jpg" 
                                        alt="Client" 
                                        className="h-12 w-12 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="font-bold">Emily Rodriguez</h4>
                                        <p className="text-sm text-gray-500">Product Manager, FinTech Solutions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Our Design Process */}
                    <div className="bg-gradient-to-br my-32 from-blue-50 to-purple-50 rounded-3xl p-10 shadow-lg">
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-3">
                                OUR APPROACH
                            </span>
                            <h2 className="text-3xl font-bold mb-4">Our Creative Process</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                We follow a proven methodology to ensure every project delivers exceptional results
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {/* Step 1 */}
                            <div className="relative">
                                <div className="bg-white rounded-xl p-6 shadow-md h-full border border-blue-100 z-0 relative">
                                    <div className="bg-blue-500 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                                    <h3 className="text-xl font-bold mb-3">Discovery</h3>
                                    <p className="text-gray-600">We dive deep to understand your brand, audience, and objectives through collaborative workshops.</p>
                                </div>
                                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 -z-10 transform -translate-y-1/2"></div>
                            </div>
                            
                            {/* Step 2 */}
                            <div className="relative">
                                <div className="bg-white rounded-xl p-6 shadow-md h-full border border-purple-100 z-0 relative">
                                    <div className="bg-purple-500 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                                    <h3 className="text-xl font-bold mb-3">Concept</h3>
                                    <p className="text-gray-600">We develop creative concepts and strategic directions aligned with your brand vision.</p>
                                </div>
                                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 -z-10 transform -translate-y-1/2"></div>
                            </div>
                            
                            {/* Step 3 */}
                            <div className="relative">
                                <div className="bg-white rounded-xl p-6 shadow-md h-full border border-pink-100 z-0 relative">
                                    <div className="bg-pink-500 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                                    <h3 className="text-xl font-bold mb-3">Creation</h3>
                                    <p className="text-gray-600">Our designers craft polished designs with meticulous attention to detail and aesthetic excellence.</p>
                                </div>
                                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 -z-10 transform -translate-y-1/2"></div>
                            </div>
                            
                            {/* Step 4 */}
                            <div className="relative">
                                <div className="bg-white rounded-xl p-6 shadow-md h-full border border-orange-100 z-0 relative">
                                    <div className="bg-orange-500 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
                                    <h3 className="text-xl font-bold mb-3">Delivery</h3>
                                    <p className="text-gray-600">We provide comprehensive assets and support to ensure successful implementation.</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* CTA Button */}
                        
                    </div>
                </div>

                   {/* Pricing Section */}
                   <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {/* Basic Plan */}
                    <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold mb-4">Basic</h3>
                        <div className="flex items-baseline mb-8">
                            <span className="text-4xl font-bold">GH₵80</span>
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
                            <a href="#call">Get Started</a>
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-8 shadow-lg text-white transform scale-105">
                        <div className="absolute top-0 right-0 mt-4 mr-4">
                            <span className="bg-white text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">Popular</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Professional</h3>
                        <div className="flex items-baseline mb-8">
                            <span className="text-4xl font-bold">GH₵150</span>
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
                           <a href="#call"> Get Started</a>
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                        <div className="flex items-baseline mb-8">
                            <span className="text-4xl font-bold">GH₵300</span>
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
                            <a href="tel:+233542343069">Contact Us</a>
                        </button>
                    </div>
                </div>
            </div>
            <Call/>
            <Footer/>
        </div>
    );
};

export default GraphicDesign;
