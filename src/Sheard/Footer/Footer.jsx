import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-8 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">About Us</h2>
          <p className="text-gray-400 text-sm">
            We provide high-quality medicines with fast and reliable delivery services. Your health is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link to="/products" className="hover:text-blue-400">Products</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-blue-400">FAQ</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 text-xl"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500 text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-pink-500 text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-blue-700 text-xl"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} MediCare. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
