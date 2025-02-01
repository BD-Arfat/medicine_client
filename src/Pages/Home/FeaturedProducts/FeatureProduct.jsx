import React from "react";

const FeatureProduct = ({ product }) => {
    return (
        <div className="bg-white shadow-lg p-5 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="relative w-full h-48">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-4">{product.name}</h2>
            <p className="text-lg font-semibold text-blue-500 mt-2">
                ${product.price.toFixed(2)}
            </p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium text-lg hover:bg-blue-700 transition-all">
                Add to Cart
            </button>
        </div>
    );
};

export default FeatureProduct;
