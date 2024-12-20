import React, { useState, useEffect } from 'react'
import Modal1gb from '../../components/modal-1gb';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "/images/2.jpg",
    "/images/1.jpg",
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleDataModal = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      
        <section className="section hero" id="home" aria-label="hero">
        <div className="container md:px-40">

          <div className="hero-content">
            <p className="hero-subtitle has-before animate-fade-in-up">
              Welcome to Asarion
            </p>
            <h1 className="h1 hero-title animate-fade-in-up delay-200">
            Here To Inspire, Motivate and Renovate
            </h1>

            <p className="header-paragraph animate-fade-in-up delay-400">
              At Asarion, we're passionate about elevating brands in the digital space. Our expert team combines creative strategy, 
              From brand development to 
              digital marketing, we're your partner in achieving lasting digital success.
            </p>

            <div className="btn-group animate-fade-in-up delay-600">
              <p className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group" 
                 aria-label="Discover more about our services">
                <a href="#services" className="header-paragraph">Discover More</a>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </p>

              <button onClick={handleDataModal} className="flex-btn transition-all duration-300 hover:scale-105" id="play-video" 
                      aria-label="Get 1GB free">
                <div className="btn-icon animate-pulse">
                  <ion-icon name="play" aria-hidden="true"></ion-icon>     
                </div>
                <span className="span header-paragraph">Get 1GB Free</span>
              </button>
            </div>
          </div>

          <figure className="hero-banner has-before img-holder" 
            style={{ "--width": 650, "--height": 650 }}>
            <img src={images[currentImageIndex]} 
              width="650" 
              height="650" 
              alt="hero banner" 
              className="img-cover fade-transition"
            />
          </figure>
     {/* Contact Modal */}
     {isModalOpen && (
     <Modal1gb isOpen={isModalOpen} onClose={handleModalClose}/>
      )}

        </div>
      </section>
    </div>
  )
}

export default Hero