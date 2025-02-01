import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const items = <>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-semibold">
            <li>
                <Link to="/" className="hover:text-gray-200">Home</Link>
            </li>
            <li>
                <Link to="/products" className="hover:text-gray-200">Products</Link>
            </li>
            <li>
                <Link to="/cart" className="hover:text-gray-200 flex items-center">
                    <FiShoppingCart className="mr-1" /> Carts
                </Link>
            </li>
        </ul>

        {/* Profile and Login Buttons */}
        <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
                <button className="flex items-center text-white hover:text-gray-200">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VUAIsETs2BVS1XRsMmMv4YkyovdUxJRRvw&s" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                    Profile
                </button>
                <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <li className="p-2 hover:bg-gray-200">
                        <Link to="/profile">View Profile</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-200 border-t">
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            </div>
            <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">
                Login
            </Link>
        </div>
    </>

    return (
        <nav className="bg-blue-600 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-white text-2xl font-bold">
                    Medicine Shope
                </Link>
                {items}

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-blue-700 text-white p-4 space-y-4">
                    <Link to="/" className="block">Home</Link>
                    <Link to="/products" className="block">Products</Link>
                    <Link to="/cart" className="block flex items-center">
                        <FiShoppingCart className="mr-1" /> Carts
                    </Link>
                    <div>
                        <button className="flex items-center">
                            <img src="/profile.jpg" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                            Profile
                        </button>
                        <div className="ml-6 space-y-2">
                            <Link to="/profile" className="block">View Profile</Link>
                            <Link to="/settings" className="block">Settings</Link>
                            <Link to="/logout" className="block border-t pt-2">Logout</Link>
                        </div>
                    </div>
                    <Link to="/login" className="block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 text-center">
                        Login
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
