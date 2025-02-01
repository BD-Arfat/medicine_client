import React from 'react';

const PageBanner = ({image, title}) => {
    return (
        <div className="relative w-full h-[200px] mt-10 max-w-7xl mx-auto">
            <img 
                src={image} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r rounded-xl from-black via-transparent to-black opacity-40"></div>
            <div className="relative flex justify-center items-center h-full px-5">
                <h1 className="text-white text-4xl font-bold sm:text-5xl md:text-5xl text-center tracking-wide shadow-lg">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default PageBanner;
