import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { CartContext } from "../contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { darkMode } = useContext(ThemeContext);
  const { dispatch } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product details.');
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity }
    });
  };

  const handleBuyNow = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity }
    });
    navigate('/cart');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center">
          <div className="spinner h-12 w-12 border-4 border-blue-500 rounded-full border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center p-4">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-red-200 to-red-300 dark:from-red-700 dark:to-red-800 rounded-full flex items-center justify-center">
            <i className="fas fa-exclamation-triangle text-4xl text-red-500"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Error Loading Product
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
          <button 
            onClick={() => navigate('/')}
            className="btn-primary text-white py-3 px-6 rounded-full font-medium"
          >
            <i className="fas fa-home mr-2"></i>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center p-4">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center">
            <i className="fas fa-search text-4xl text-gray-400"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Product Not Found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The product you're looking for doesn't exist.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="btn-primary text-white py-3 px-6 rounded-full font-medium"
          >
            <i className="fas fa-home mr-2"></i>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <button 
            onClick={() => navigate('/')}
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <i className="fas fa-home mr-1"></i>
            Home
          </button>
          <i className="fas fa-chevron-right"></i>
          <span className="text-gray-800 dark:text-gray-200">{product.category}</span>
          <i className="fas fa-chevron-right"></i>
          <span className="text-gray-800 dark:text-gray-200 truncate">{product.title}</span>
        </nav>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-6">
          <div className="glass rounded-3xl p-8 shadow-xl">
            <div className="relative h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
              <img 
                src={product.image || `https://placehold.co/600x600?text=${product.title.split(' ').join('+')}`} 
                alt={product.title} 
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.target.src = `https://placehold.co/600x600?text=${product.title.split(' ').join('+')}`;
                }}
              />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full text-gray-700 shadow-sm">
                  {product.category}
                </span>
              </div>
              
              {/* Rating Badge */}
              <div className="absolute top-4 right-4">
                <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg flex items-center">
                  <i className="fas fa-star mr-1"></i>
                  {product.rating?.rate || 0}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div className="glass rounded-3xl p-8 shadow-xl">
            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4 line-clamp-2">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400 mr-3">
                {[...Array(5)].map((_, i) => (
                  <i 
                    key={i} 
                    className={`fas fa-star ${i < Math.floor(product.rating?.rate || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                  ></i>
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-400">
                ({product.rating?.count || 0} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <p className="text-4xl font-bold gradient-text">
                ${product.price}
              </p>
              <p className="text-green-600 dark:text-green-400 text-sm font-medium">
                <i className="fas fa-check-circle mr-1"></i>
                In Stock - Free Shipping
              </p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Description
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Quantity
              </label>
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <i className="fas fa-minus text-sm"></i>
                </button>
                <span className="w-16 text-center font-semibold text-gray-800 dark:text-gray-200">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <i className="fas fa-plus text-sm"></i>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full btn-accent text-white py-4 px-6 rounded-2xl font-bold text-lg focus-ring"
              >
                <i className="fas fa-shopping-cart mr-2"></i>
                Add to Cart
              </button>
              <button 
                onClick={handleBuyNow}
                className="w-full btn-success text-white py-4 px-6 rounded-2xl font-bold text-lg focus-ring"
              >
                <i className="fas fa-bolt mr-2"></i>
                Buy Now
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="glass rounded-3xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              <i className="fas fa-info-circle mr-2 text-blue-500"></i>
              Product Details
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Category</span>
                <span className="font-semibold text-gray-800 dark:text-gray-200 capitalize">
                  {product.category}
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Availability</span>
                <span className="text-green-600 dark:text-green-400 font-semibold">
                  <i className="fas fa-check-circle mr-1"></i>
                  In Stock
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Rating</span>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  {product.rating?.rate || 0}/5 ({product.rating?.count || 0} reviews)
                </span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-gray-600 dark:text-gray-400">SKU</span>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  {product.id}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;