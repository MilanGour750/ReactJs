import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Link to="/" className="flex items-center">
                            <img 
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" 
                                className="h-16" 
                                alt="Logo" 
                            />
                        </Link>
                        <p className="mt-4 text-sm">
                            Creating innovative solutions to power your business. Follow us for updates.
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-4 text-lg font-semibold text-white">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="hover:text-orange-500">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-orange-500">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-orange-500">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 text-lg font-semibold text-white">Connect with Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="hover:text-blue-500" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com" className="hover:text-blue-400" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://github.com" className="hover:text-gray-500" aria-label="GitHub">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://linkedin.com" className="hover:text-blue-700" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-700" />
                <div className="text-center text-sm">
                    &copy; 2023 
                    <Link to="/" className="text-orange-500 hover:underline"> MilanGour</Link>. 
                    All rights reserved.
                </div>
            </div>
        </footer>
    );
}
