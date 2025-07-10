import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={`py-16 mt-16 ${darkMode ? 'glass-dark' : 'glass'} border-t border-white/20`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold gradient-text">Shop</span>
              <span className="text-2xl font-bold gradient-text-secondary">Sphere</span>
              <div className="ml-2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Modern e-commerce platform for all your shopping needs. Discover amazing products with unbeatable prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-200">
              <i className="fas fa-link mr-2 text-blue-500"></i>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <i className="fas fa-home mr-2"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <i className="fas fa-shopping-cart mr-2"></i>
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <i className="fas fa-sign-in-alt mr-2"></i>
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-200">
              <i className="fas fa-tags mr-2 text-green-500"></i>
              Categories
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#electronics" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300 flex items-center">
                  <i className="fas fa-mobile-alt mr-2"></i>
                  Electronics
                </a>
              </li>
              <li>
                <a href="#jewelery" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300 flex items-center">
                  <i className="fas fa-gem mr-2"></i>
                  Jewelery
                </a>
              </li>
              <li>
                <a href="#mens" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300 flex items-center">
                  <i className="fas fa-male mr-2"></i>
                  Men's Clothing
                </a>
              </li>
              <li>
                <a href="#womens" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300 flex items-center">
                  <i className="fas fa-female mr-2"></i>
                  Women's Clothing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-200">
              <i className="fas fa-envelope mr-2 text-purple-500"></i>
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <i className="fas fa-envelope mr-3 text-purple-500"></i>
                <span>info@shopsphere.com</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <i className="fas fa-phone mr-3 text-purple-500"></i>
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <i className="fas fa-map-marker-alt mr-3 text-purple-500"></i>
                <span>123 Shopping St, E-Commerce City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/20 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ShopSphere. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;