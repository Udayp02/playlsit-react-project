import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const CartPage = () => {
  const { cart, dispatch } = useContext(CartContext);
  const { darkMode } = useContext(ThemeContext);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryCharge = subtotal > 499 ? 0 : 40;
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + deliveryCharge + tax;

  const updateQuantity = (id, quantity) => {
    if (quantity === 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  const handleCheckout = () => {
    setCheckoutLoading(true);
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    setTimeout(() => {
      dispatch({ type: 'CLEAR_CART' });
      setCheckoutLoading(false);
      alert('Order placed successfully! Thank you for your purchase.');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="ecommerce-container py-6">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <i className="fas fa-shopping-cart text-3xl text-gray-400"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                Your cart is empty
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Link 
                to="/" 
                className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium inline-flex items-center"
              >
                <i className="fas fa-shopping-bag mr-2"></i>
                Start Shopping
              </Link>
            </div>
          </div>
        ) : (
          /* Cart Items */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items List */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    Cart Items ({totalItems})
                  </h2>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {cart.map((item, index) => (
                    <div 
                      key={item.id} 
                      className="p-6 fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32">
                          <img 
                            src={item.image || `https://placehold.co/600x600?text=${item.title.split(' ').join('+')}`} 
                            alt={item.title} 
                            className="w-full h-full object-contain rounded-lg"
                            onError={(e) => {
                              e.target.src = `https://placehold.co/600x600?text=${item.title.split(' ').join('+')}`;
                            }}
                          />
                        </div>
                        
                        {/* Product Details */}
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-orange-500 font-bold text-lg mb-3">
                            ₹{Math.round(item.price * 80)}
                          </p>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Quantity:</span>
                            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                              >
                                <i className="fas fa-minus text-sm"></i>
                              </button>
                              <span className="w-12 text-center font-semibold text-gray-800 dark:text-gray-200">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                              >
                                <i className="fas fa-plus text-sm"></i>
                              </button>
                            </div>
                          </div>
                          
                          {/* Delivery Info */}
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            <i className="fas fa-truck mr-1"></i>
                            Free delivery by {new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                          </div>
                        </div>
                        
                        {/* Price and Actions */}
                        <div className="flex flex-col items-end justify-between">
                          <p className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                            ₹{Math.round(item.price * item.quantity * 80)}
                          </p>
                          <button 
                            onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                            className="text-red-500 hover:text-red-700 transition-colors flex items-center text-sm"
                          >
                            <i className="fas fa-trash mr-1"></i>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              {/* Summary Card */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  Price Details
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Price ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
                    <span className="font-medium">₹{Math.round(subtotal * 80)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Delivery Charges</span>
                    <span className={deliveryCharge === 0 ? 'text-green-600 font-medium' : 'font-medium'}>
                      {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Tax (GST 18%)</span>
                    <span className="font-medium">₹{Math.round(tax * 80)}</span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between text-lg font-bold text-gray-800 dark:text-gray-200">
                      <span>Total Amount</span>
                      <span>₹{Math.round(total * 80)}</span>
                    </div>
                    <p className="text-sm text-green-600 mt-1">
                      You will save ₹{Math.round((subtotal * 0.3) * 80)} on this order
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={handleCheckout}
                  disabled={checkoutLoading}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg font-bold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {checkoutLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="spinner h-5 w-5 border-2 border-white rounded-full border-t-transparent mr-3"></div>
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <i className="fas fa-lock mr-2"></i>
                      Secure Checkout
                    </div>
                  )}
                </button>
              </div>

              {/* Promo Code */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h3 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  <i className="fas fa-tag text-orange-500 mr-2"></i>
                  Apply Coupon
                </h3>
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="Enter coupon code" 
                    className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  />
                  <button className="bg-orange-500 text-white p-3 rounded-r-lg hover:bg-orange-600 transition-colors">
                    <i className="fas fa-check"></i>
                  </button>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h3 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  <i className="fas fa-truck text-blue-500 mr-2"></i>
                  Delivery Options
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Standard Delivery</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">3-5 business days</p>
                    </div>
                    <span className="text-green-600 font-medium">FREE</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Express Delivery</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">1-2 business days</p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">₹99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;