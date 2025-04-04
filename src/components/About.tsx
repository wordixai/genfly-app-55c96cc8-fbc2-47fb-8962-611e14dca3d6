import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FFA726] opacity-20 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#6F4E37] opacity-10 rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Coffee beans and brewing"
              className="rounded-lg shadow-lg relative z-10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#6F4E37] mb-6">
              Our Story
            </h2>
            <div className="w-16 h-1 bg-[#FFA726] mb-6"></div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2010, Café Aroma began with a simple mission: to create a warm, 
              welcoming space where quality coffee meets community. Our journey started 
              with a small kiosk and a big dream.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Today, we source our beans directly from sustainable farms around the world, 
              roasting them in small batches to ensure the perfect flavor profile. Every cup 
              tells a story of dedication, craftsmanship, and passion.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6F4E37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
                    <line x1="6" x2="6" y1="2" y2="4"></line>
                    <line x1="10" x2="10" y1="2" y2="4"></line>
                    <line x1="14" x2="14" y1="2" y2="4"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#6F4E37]">Artisan Coffee</h3>
                  <p className="text-sm text-gray-600">Handcrafted with care</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6F4E37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                    <circle cx="17" cy="7" r="5"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#6F4E37]">Fresh Baked</h3>
                  <p className="text-sm text-gray-600">Daily in-house pastries</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6F4E37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7V5c0-1.1.9-2 2-2h2"></path>
                    <path d="M17 3h2c1.1 0 2 .9 2 2v2"></path>
                    <path d="M21 17v2c0 1.1-.9 2-2 2h-2"></path>
                    <path d="M7 21H5c-1.1 0-2-.9-2-2v-2"></path>
                    <rect width="7" height="5" x="7" y="7" rx="1"></rect>
                    <rect width="7" height="5" x="10" y="12" rx="1"></rect>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#6F4E37]">Cozy Space</h3>
                  <p className="text-sm text-gray-600">Designed for comfort</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;