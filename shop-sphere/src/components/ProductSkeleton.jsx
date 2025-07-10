import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ProductSkeleton = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="product-card">
      {/* Image Skeleton */}
      <div className="product-image relative h-48 overflow-hidden">
        <div className="absolute inset-0 loading-shimmer"></div>
        
        {/* Discount Badge Skeleton */}
        <div className="absolute top-2 left-2">
          <div className="w-16 h-6 bg-green-500 rounded loading-shimmer"></div>
        </div>
        
        {/* Wishlist Button Skeleton */}
        <div className="absolute top-2 right-2">
          <div className="w-8 h-8 bg-white rounded-full loading-shimmer"></div>
        </div>
      </div>
      
      {/* Content Skeleton */}
      <div className="p-4">
        {/* Category Badge Skeleton */}
        <div className="w-20 h-6 bg-gray-200 dark:bg-gray-700 rounded-full loading-shimmer mb-2"></div>
        
        {/* Title Skeleton */}
        <div className="space-y-2 mb-3">
          <div className="h-4 w-full loading-shimmer rounded"></div>
          <div className="h-4 w-3/4 loading-shimmer rounded"></div>
        </div>
        
        {/* Rating Skeleton */}
        <div className="flex items-center mb-3">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded loading-shimmer"></div>
            ))}
          </div>
          <div className="ml-2 w-12 h-3 bg-gray-300 dark:bg-gray-600 rounded loading-shimmer"></div>
        </div>
        
        {/* Price Skeleton */}
        <div className="mb-3">
          <div className="flex items-center space-x-2 mb-1">
            <div className="h-5 w-16 bg-orange-500 rounded loading-shimmer"></div>
            <div className="h-4 w-12 bg-gray-300 dark:bg-gray-600 rounded loading-shimmer"></div>
            <div className="h-4 w-12 bg-green-500 rounded loading-shimmer"></div>
          </div>
          <div className="h-4 w-24 bg-blue-500 rounded loading-shimmer"></div>
        </div>
        
        {/* Button Skeleton */}
        <div className="h-10 w-full bg-orange-500 rounded-md loading-shimmer"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;