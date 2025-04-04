import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#6F4E37] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Café Aroma</h3>
            <p className="mb-4 text-gray-200">
              A cozy urban retreat where every cup tells a story and every visit feels like coming home.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#FFA726] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#FFA726] transition-colors"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#FFA726] transition-colors"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-200 hover:text-[#FFA726] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-200 hover:text-[#FFA726] transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-200 hover:text-[#FFA726] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-200 hover:text-[#FFA726] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-[#FFA726] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-200 space-y-2">
              <p>123 Coffee Lane</p>
              <p>New York, NY 10001</p>
              <p>Phone: (212) 555-1234</p>
              <p>Email: hello@cafearoma.com</p>
            </address>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-200">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800"
              />
              <Button
                variant="primary"
                className="rounded-l-none"
              >
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Café Aroma. All rights reserved.</p>
          <div className="mt-2 space-x-4 text-sm">
            <a href="#" className="text-gray-300 hover:text-[#FFA726] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-[#FFA726] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-[#FFA726] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;