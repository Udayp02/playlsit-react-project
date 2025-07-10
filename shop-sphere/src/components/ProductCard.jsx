import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { CartContext } from "../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { darkMode } = useContext(ThemeContext);
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  // Calculate discount percentage (mock data)
  const originalPrice = product.price * 1.2; // 20% markup for original price
  const discountPercentage = Math.round(((originalPrice - product.price) / originalPrice) * 100);

  return (
    <div className="product-card fade-in">
      {/* Product Image */}
      <div className="product-image h-48">
        <img 
          src={product.image || `https://placehold.co/600x400?text=${product.title.split(' ').join('+')}`} 
          alt={product.title} 
          className="w-full h-full object-contain p-4"
          onError={(e) => {
            e.target.src = `https://placehold.co/600x400?text=${product.title.split(' ').join('+')}`;
          }}
        />
        
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="badge badge-success absolute top-2 left-2">
            {discountPercentage}% OFF
          </div>
        )}
      </div>
      
      {/* Product Content */}
      <div className="p-4">
        {/* Product Title */}
        <h3 className="text-base font-medium text-primary mb-2 line-clamp-2">
          {product.title}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="rating-stars flex mr-2">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i} 
                className={`fas fa-star text-xs ${i < Math.floor(product.rating?.rate || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
              ></i>
            ))}
          </div>
          <span className="rating-count text-xs">
            ({product.rating?.count || 0})
          </span>
        </div>
        
        {/* Price Section */}
        <div className="mb-4">
          <div className="flex items-center flex-wrap gap-1 mb-1">
            <span className="price-current">
              ₹{Math.round(product.price * 80)}
            </span>
            {discountPercentage > 0 && (
              <>
                <span className="price-original">
                  ₹{Math.round(originalPrice * 80)}
                </span>
                <span className="price-discount">
                  {discountPercentage}% off
                </span>
              </>
            )}
          </div>
          
          {/* Free Delivery */}
          <div className="text-xs text-secondary">
            <i className="fas fa-truck mr-1"></i>
            Free delivery
          </div>
        </div>
        
        {/* Add to Cart Button */}
        <button 
          onClick={handleAddToCart}
          className="btn-primary w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;