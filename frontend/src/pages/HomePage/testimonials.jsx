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
    text: "Asarion transformed our digital presence effortlessly. Their innovative strategies and unmatched expertise boosted our traffic and sales exponentially. We highly recommend them for their commitment, professionalism, and exceptional results!"
  }
];

const StarRating = () => (
  <div className="flex justify-center gap-0.5 text-green-500">
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
        viewBox="0 0 20 20"
        fill="#f9004d"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ name, image, text }) => (
  <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
    <div className="flex items-center gap-4">
      <img
        alt={name}
        src={image}
        className="size-14 rounded-full object-cover"
      />
      <div>
        <StarRating />
        <p className="mt-0.5 text-lg font-medium text-gray-900">{name}</p>
      </div>
    </div>
    <p className="mt-4 text-gray-700 header-paragraph">{text}</p>
  </blockquote>
);

const Testimonials = () => {
  return (
    <div>
      <section className="bg-white py-20">
        <div className="container px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
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
    </div>
  );
};

export default Testimonials;
