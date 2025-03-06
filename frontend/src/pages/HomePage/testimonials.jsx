const testimonialData = [
  {
    id: 1,
    name: "Gifty Mensah",
    image: "images/2.jpg",
    text: "Asarion's expertise is unparalleled. Their tailored strategies not only increased our online visibility but also significantly boosted our conversions. Their professionalism and results-oriented approach are truly commendable!"
  },
  {
    id: 2,
    name: "Paul Addo",
    image: "images/4.jpg",
    text: "Working with Asarion has been a game-changer for our business. Their creative solutions and dedicated support have exceeded all expectations, driving incredible growth and making a real impact on our brand's success!"
  },
  {
    id: 3,
    name: "Evans Arthur",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    text: "Asarion transformed our digital presence effortlessly. Their innovative strategies and unmatched expertise boosted our traffic and sales exponentially. We highly recommend them for their professionalism"
  }
];

const StarRating = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 transition-transform hover:scale-110"
        viewBox="0 0 20 20"
        fill="#FFD700"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ name, image, text }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
    <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-purple-100 opacity-70"></div>
    <div className="absolute -left-10 -bottom-10 h-20 w-20 rounded-full bg-pink-100 opacity-70"></div>
    
    <div className="relative">
      <div className="flex items-center gap-4">
        <img
          alt={name}
          src={image}
          className="h-16 w-16 rounded-full border-2 border-purple-100 object-cover shadow-md"
        />
        <div>
          <p className="text-xl font-semibold text-gray-800">{name}</p>
          <StarRating />
        </div>
      </div>
      
      <p className="mt-6 text-gray-600 leading-relaxed">"{text}"</p>
      
      <svg className="absolute right-0 top-0 h-8 w-8 text-purple-200" fill="currentColor" viewBox="0 0 32 32">
        <path d="M10 8c-2.209 0-4 1.791-4 4v12h8v-12c0-2.209-1.791-4-4-4zM26 8c-2.209 0-4 1.791-4 4v12h8v-12c0-2.209-1.791-4-4-4z"/>
      </svg>
    </div>
  </div>
);

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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              image={testimonial.image}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
