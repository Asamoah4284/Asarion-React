import React from 'react';

const About = () => {
  return <div>
     <section className="section about" id="about" aria-label="about">
        <div className="container md:px-40">

          <figure className="about-banner" data-aos="fade-right" data-aos-duration="1000">
            <img src="/images/man.jpg" 
                 width="500" height="654" 
                 loading="lazy" 
                 alt="about banner"
                 className="w-100 transform transition-transform duration-500" />
            
            {/* Using Font Awesome icons instead of images */}
            <i className="fa-solid fa-circle shape shape-1 animate-float"></i>
            <i className="fa-solid fa-circle shape shape-3 animate-float-delayed"></i>
          </figure>

          <div className="flex  flex-col items-center justify-center px-10" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <h2 className="h2-sm section-title mb-8 transition-colors duration-300">
              Building Powerful Digital Brands That Leave Lasting Impressions
            </h2>

            <p className="header-paragraph ">
              We transform businesses into memorable digital brands through strategic design, compelling storytelling, and 
              innovative digital solutions. Our comprehensive approach ensures your brand stands out in today's competitive 
              digital landscape.
            </p>

            <ul className="about-list mt-10 space-y-4">
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

        </div>
      </section>
  </div>;
};

export default About;
