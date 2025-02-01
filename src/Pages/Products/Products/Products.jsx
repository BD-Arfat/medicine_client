import React, { useEffect, useState } from 'react';
import imge from '../../../assets/me-3.jpg';
import PageBanner from '../../../Sheard/PageBanner/PageBanner';
import FeatureProduct from '../../Home/FeaturedProducts/FeatureProduct';

const Products = () => {
    const [categories, setCategories] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6; // Number of products per page

    useEffect(() => {
        fetch('/category.json')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error("Error loading categories:", error));
    }, []);

    useEffect(() => {
        fetch('/products.json')
            .then(response => response.json())
            .then(data => setAllProducts(data))
            .catch(error => console.error("Error loading products:", error));
    }, []);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to first page when category changes
    };

    // Filter products based on selected category
    const filteredProducts = selectedCategory === "All"
        ? allProducts
        : allProducts.filter(product => product.category === selectedCategory);

    // Calculate products for the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calculate total pages
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <PageBanner image={imge} title={'Products Page'} />
            <div className="max-w-7xl mx-auto mt-10 px-5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Categories Section */}
                    <div className="col-span-1">
                        <div className="bg-white shadow-lg rounded-lg p-5">
                            <ul>
                                <li
                                    className={`py-2 cursor-pointer ${selectedCategory === "All" ? "bg-blue-100" : ""}`}
                                    onClick={() => handleCategorySelect("All")}
                                >
                                    <h1 className="font-bold">All Categories</h1>
                                </li>
                                {categories.map((category) => (
                                    <li
                                        key={category.id}
                                        className={`py-2 cursor-pointer flex items-center gap-2 ${selectedCategory === category.category ? "bg-blue-100" : ""}`}
                                        onClick={() => handleCategorySelect(category.category)}
                                    >
                                        <img className="w-10" src={category.categoryImage} alt={category.category} />
                                        <h1 className="font-bold">{category.category}</h1>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Products Section */}
                    <div className="col-span-3">
                        {currentProducts.length === 0 ? (
                            <p>No products found for this category.</p>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {currentProducts.map((product) => (
                                        <FeatureProduct key={product._id} product={product} />
                                    ))}
                                </div>

                                {/* Pagination Controls */}
                                <div className="flex justify-center mt-6">
                                    <nav>
                                        <ul className="inline-flex -space-x-px">
                                            {Array.from({ length: totalPages }, (_, index) => (
                                                <li key={index}>
                                                    <button
                                                        onClick={() => paginate(index + 1)}
                                                        className={`px-3 py-2 leading-tight ${currentPage === index + 1 ? 'text-blue-600 bg-blue-50' : 'text-gray-500 bg-white'} border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
                                                    >
                                                        {index + 1}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
