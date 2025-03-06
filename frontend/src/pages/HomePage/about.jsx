import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [imageSrc, setImageSrc] = useState('/images/4.jpg');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);
  let currentIndex = 0;

  const handlePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsFullscreen(false);
      } else {
        setIsFullscreen(true);
        setTimeout(async () => {
          try {
            videoRef.current.muted = false;
            await videoRef.current.play();
          } catch (err) {
            console.error('Error playing video:', err);
          }
        }, 100);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
      setIsFullscreen(false);
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length; // Cycle through images
      setImageSrc(images[currentIndex]);
    }, 20000); // Change image every 20 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <div>
     <section className="section about" id="about" aria-label="about">
        <div className="container md:px-40">
 <div className="flex flex-col items-center justify-center px-10">
            <h2 className="h2-sm section-title mb-8 transition-colors duration-300">
              Building Powerful Digital Brands That Leave Lasting Impressions
            </h2>

            <p className="header-paragraph ">
              We transform businesses into memorable digital brands through strategic design, compelling storytelling, and 
              innovative digital solutions. Our comprehensive approach ensures your brand stands out in today's competitive 
              digital landscape.
            </p>

            <ul className="about-list mt-10">
              <li className="has-before transition-transform duration-300 cursor-pointer">
                Strategic brand positioning and identity development
              </li>

              <li className="has-before transition-transform duration-300 cursor-pointer">
                Cohesive visual design across all digital platforms
              </li>

              <li className="has-before transition-transform duration-300 cursor-pointer">
                Data-driven brand performance optimization
              </li>
            </ul>
          </div>

          <figure className="about-banner relative">
            {!isFullscreen && (
              <>
                <video 
                  ref={videoRef}
                  width="500" 
                  height="654"
                  className="w-100 md:h-[350px] object-cover transform transition-transform duration-500 rounded-2xl"
                  loop 
                  muted
                  playsInline
                >
                  <source src="/images/Net.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button
                  onClick={handlePlayPause}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 w-28 h-28 bg-opacity-50 rounded-full p-4 hover:bg-opacity-70 transition-all"
                >
                  <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </>
            )}
          </figure>

          {isFullscreen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative">
                <video 
                  ref={videoRef}
                  className="w-auto h-auto max-w-[90vw] max-h-[90vh]"
                  loop 
                  playsInline
                  controls
                >
                  <source src="/images/Net.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}

            {/* <i className="fa-solid fa-circle shape shape-1 animate-float"></i>
            <i className="fa-solid fa-circle shape shape-3 animate-float-delayed"></i> */}

        </div>
      </section>
  </div>;
};

export default About;
