import React, { useEffect, useState } from "react";
import FeatureProduct from "./FeatureProduct";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        const filterProducts = data.filter(product => product.category === 'Discount').slice(0,4);
        setProducts(filterProducts)
      });
  }, []);

  return (
    <div className="max-w-7xl w-11/12 mx-auto mt-14 md:mt-28">
      <h1 className="text-3xl font-bold text-left mb-8">Best Selling Medicines</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => <FeatureProduct key={product._id} product={product}></FeatureProduct>)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
