import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
    text: "The atmosphere is so cozy and inviting. I come here to work remotely at least twice a week, and their signature latte is absolutely divine. The staff remembers my order every time!",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    text: "Best croissants in town, hands down! Perfectly flaky and buttery. The cold brew is smooth and never bitter. This place has become my weekend ritual.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 4,
    text: "I hosted a small meeting in their private corner, and they accommodated us perfectly. The avocado toast and cappuccinos were a hit with everyone. Will definitely be back!",
  },
  {
    id: 4,
    name: "David Wilson",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    text: "As a coffee enthusiast, I'm quite picky, but this café exceeds expectations. Their attention to detail in every cup is impressive. The quinoa bowl is also a fantastic healthy option.",
  },
  {
    id: 5,
    name: "Olivia Thompson",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    rating: 5,
    text: "Such a gem! I discovered this place last month and have been back almost every day since. The staff is friendly, the coffee is exceptional, and the pastries are always fresh.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#6F4E37] mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-[#FFA726] mx-auto"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-[#F5F5F5] border-none shadow-sm">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-[#FFA726]">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill={i < testimonial.rating ? "#FFA726" : "none"}
                              stroke={i < testimonial.rating ? "#FFA726" : "#ccc"}
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="mx-0.5"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                        <h4 className="font-semibold text-[#6F4E37]">{testimonial.name}</h4>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  activeIndex === index ? "bg-[#FFA726]" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={() =>
              setActiveIndex(
                (prevIndex) =>
                  (prevIndex - 1 + testimonials.length) % testimonials.length
              )
            }
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6F4E37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>

          <button
            onClick={() =>
              setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
            }
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6F4E37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;