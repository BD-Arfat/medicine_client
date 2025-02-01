import React from 'react';
import Banner from '../Banner/Banner';
import Categorys from '../Categorys/Categorys';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import SearchProducts from '../SearchProducts/SearchProducts';
import Testimonials from '../Testimonials/Testimonials';
import BlogTips from '../BlogTips/BlogTips';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categorys></Categorys>
            <FeaturedProducts></FeaturedProducts>
            <SearchProducts></SearchProducts>
            <Testimonials></Testimonials>
            <BlogTips></BlogTips>
        </div>
    );
};

export default Home;