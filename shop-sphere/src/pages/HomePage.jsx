import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'name') return a.title.localeCompare(b.title);
    return 0;
  });

  const categories = ['all', ...new Set(products.map(p => p.category))];

  // Get featured products (first 8)
  const featuredProducts = products.slice(0, 8);
  
  // Get deals (random selection)
  const dealsProducts = products.slice(8, 16);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-4">
        <div className="ecommerce-container">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <i className="fas fa-gift text-2xl"></i>
              <div>
                <h2 className="text-lg font-bold">Great Indian Festival</h2>
                <p className="text-sm opacity-90">Up to 70% off on Electronics</p>
              </div>
            </div>
            <button className="bg-white text-orange-500 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="ecommerce-container py-6">
        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  className="w-full p-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="lg:w-48">
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Sort Filter */}
            <div className="lg:w-48">
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Sort by</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
            <div className="flex items-center">
              <i className="fas fa-exclamation-triangle mr-3"></i>
              {error}
            </div>
          </div>
        )}

        {/* Category Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.filter(cat => cat !== 'all').map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  category === cat 
                    ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-orange-300'
                }`}
              >
                <div className="text-center">
                  <i className="fas fa-box text-2xl mb-2 text-gray-600 dark:text-gray-400"></i>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 capitalize">
                    {cat}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Deals Section */}
        {!loading && dealsProducts.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                <i className="fas fa-fire text-orange-500 mr-2"></i>
                Deals of the Day
              </h2>
              <button className="text-orange-500 hover:text-orange-600 font-medium">
                View All <i className="fas fa-arrow-right ml-1"></i>
              </button>
            </div>
            <div className="ecommerce-grid">
              {dealsProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Products Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              {category === 'all' ? 'All Products' : `${category.charAt(0).toUpperCase() + category.slice(1)}`}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {sortedProducts.length} products found
            </p>
          </div>

          {loading ? (
            <div className="ecommerce-grid">
              {[...Array(8)].map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="ecommerce-grid">
              {sortedProducts.length > 0 ? (
                sortedProducts.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <div className="max-w-md mx-auto">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <i className="fas fa-search text-4xl text-gray-400"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      No products found
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Try adjusting your search or filter criteria.
                    </p>
                    <button 
                      onClick={() => {
                        setSearchTerm('');
                        setCategory('all');
                        setSortBy('default');
                      }}
                      className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium"
                    >
                      <i className="fas fa-refresh mr-2"></i>
                      Clear Filters
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;