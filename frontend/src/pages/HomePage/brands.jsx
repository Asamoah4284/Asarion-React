import React from 'react';

const Brands = () => {
  return <div>
    <section class="sponsors py-24 bg-white overflow-hidden"> 
  <div class="max-w-7xl mx-auto px-6 md:px-20">
    {/* <div class="text-center mb-16">
      <h2 class="text-blue-600 font-semibold mb-3">OUR PARTNERS</h2>
      <h3 class="text-4xl font-bold text-gray-800 mb-6">Trusted By Industry Leaders</h3>
      <div class="flex justify-center gap-2">
        <span class="h-1 w-4 bg-blue-600 rounded-full"></span>
        <span class="h-1 w-12 bg-blue-600 rounded-full"></span>
        <span class="h-1 w-4 bg-blue-600 rounded-full"></span>
      </div>
    </div> */}

    <div class="sponsors-carousel relative overflow-hidden"> 
      <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

      <div class="sponsors-track flex items-center gap-12 py-8 animate-carousel">
        <div class="sponsor-item flex-shrink-0 px-8">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
               alt="Google" 
               class="h-32 w-auto grayscale hover:grayscale-0 transition-all duration-300"/>
        </div>
        <div class="sponsor-item flex-shrink-0 px-8">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Microsoft_Office_365_logo.svg" 
               alt="Microsoft" 
               class="h-32 w-auto grayscale hover:grayscale-0 transition-all duration-300"/>
        </div>
        <div class="sponsor-item flex-shrink-0 px-8">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
               alt="AWS" 
               class="h-32 w-auto grayscale hover:grayscale-0 transition-all duration-300"/>
        </div>
        <div class="sponsor-item flex-shrink-0 px-8">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/IBM_Logo.svg" 
               alt="IBM" 
               class="h-32 w-auto grayscale hover:grayscale-0 transition-all duration-300"/>
        </div>
        <div class="sponsor-item flex-shrink-0 px-8">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
               alt="LinkedIn" 
               class="h-32 w-auto grayscale hover:grayscale-0 transition-all duration-300"/>
        </div>
        <div class="sponsor-item flex-shrink-0 px-8">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
               alt="Google" 
               class="h-32 w-auto grayscale hover:grayscale-0 transition-all duration-300"/>
        </div>
        <div class="sponsor-item flex-shrink-0 px-8">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Microsoft_Office_365_logo.svg" 
               alt="Microsoft" 
               class="h-32 w-auto grayscale hover:grayscale-0 transition-all duration-300"/>
        </div>
      </div>
    </div>
  </div>
  <div/>
</section>
  </div>;
};

export default Brands;
