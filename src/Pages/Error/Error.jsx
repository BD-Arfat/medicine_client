import React from 'react';
import { BiError } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
            <BiError className="text-red-600 text-7xl mb-4" />
            <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
            <p className="text-gray-600 text-lg mt-2">Oops! The page you are looking for does not exist.</p>
            <p className="text-gray-500 text-md">It might have been moved or deleted.</p>

            <Link
                to="/"
                className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
                Go Home
            </Link>
        </div>
    );
};

export default Error;