import React, { useEffect, useState } from "react";
import FeatureProduct from "../FeaturedProducts/FeatureProduct";

const SearchProducts = () => {
    const [allProducts, setAllProducts] = useState([]); // Store all products
    const [products, setProducts] = useState([]); // Initially displayed products (4 items)
    const [searchTerm, setSearchTerm] = useState(""); // Search value
    const [filteredProducts, setFilteredProducts] = useState([]); // Filtered results

    // Load data from products.json
    useEffect(() => {
        fetch("/products.json") // Ensure products.json is in the public folder
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data); // Store all products
                setProducts(data.slice(0, 4)); // Initially show only 4 products
            });
    }, []);

    // Search function
    useEffect(() => {
        if (searchTerm) {
            const filtered = allProducts.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]); // Clear search results if search term is empty
        }
    }, [searchTerm, allProducts]);

    return (
        <div className="max-w-7xl w-11/12 mx-auto my-36">
            <h2 className="text-3xl font-bold text-left mb-5">Search Medicine</h2>

            {/* Search Input */}
            <div className="relative mb-8">
                <input
                    type="text"
                    placeholder="Search medicine..."
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Display Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {searchTerm && filteredProducts.length > 0
                    ? filteredProducts.map((product) => (
                        <FeatureProduct key={product._id} product={product} />
                    ))
                    : searchTerm
                    ? <p className="text-center text-gray-500 col-span-4">No products found.</p>
                    : products.map((product) => (
                        <FeatureProduct key={product._id} product={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default SearchProducts;
