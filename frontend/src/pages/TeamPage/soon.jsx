import React from 'react';

const ExecutiveTeam = () => {
  const executives = [
    {
      name: "John Doe",
      position: "Chief Executive Officer",
      image: "images/2.jpg", // Replace with actual image path
      linkedin: "https://linkedin.com/in/johndoe"
    },
    {
      name: "Jane Smith",
      position: "Chief Technology Officer",
      image: "images/1.jpg", // Replace with actual image path
      linkedin: "https://linkedin.com/in/janesmith"
    },
    {
      name: "Jane Smith",
      position: "Chief Technology Officer",
      image: "images/1.jpg", // Replace with actual image path
      linkedin: "https://linkedin.com/in/janesmith"
    },
    {
      name: "Jane Smith",
      position: "Chief Technology Officer",
      image: "images/1.jpg", // Replace with actual image path
      linkedin: "https://linkedin.com/in/janesmith"
    },
    {
      name: "Jane Smith",
      position: "Chief Technology Officer",
      image: "images/1.jpg", // Replace with actual image path
      linkedin: "https://linkedin.com/in/janesmith"
    },
    {
      name: "Jane Smith",
      position: "Chief Technology Officer",
      image: "images/1.jpg", // Replace with actual image path
      linkedin: "https://linkedin.com/in/janesmith"
    },
    {
      name: "Jane Smith",
      position: "Chief Technology Officer",
      image: "images/1.jpg", // Replace with actual image path
      linkedin: "https://linkedin.com/in/janesmith"
    },
    // Add more executives as needed
  ];

  return (
    <section className="py-60 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executives.map((executive, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={executive.image} 
                  alt={executive.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{executive.name}</h3>
                <p className="text-gray-600 mb-4">{executive.position}</p>
                <a 
                  href={executive.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveTeam;