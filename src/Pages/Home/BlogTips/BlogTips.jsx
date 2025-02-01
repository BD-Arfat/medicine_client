import React, { useEffect, useState } from "react";

const BlogTips = () => {
    const [blogs, setBlogs] = useState([]);

    // ব্লগ ডাটা লোড
    useEffect(() => {
        fetch("/blogs.json") // Ensure your JSON file is in the public folder
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <div className="max-w-7xl mx-auto my-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Health Tips & Blogs</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {blogs.slice(0, 8).map((blog) => (
                    <div key={blog.id} className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-60 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{blog.short_description}</p>
                        <a
                            href={blog.link}
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Read More →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogTips;
