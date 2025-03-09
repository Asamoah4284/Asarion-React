
const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Discover why businesses trust us to deliver exceptional results and drive their success
          </p>
        </div>

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
                    
      </div>
    </section>
  );
};

export default Testimonials;
