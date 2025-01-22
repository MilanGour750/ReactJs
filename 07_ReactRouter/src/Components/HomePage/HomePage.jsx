import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="mx-auto w-full max-w-7xl p-4">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-500 rounded-lg text-white py-16 px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">
                        Discover Innovation
                    </h1>
                    <p className="text-lg sm:text-xl mb-8">
                        Your one-stop solution to modern tools and resources. Download our app and explore a new world of possibilities.
                    </p>
                    <Link
                        className="inline-flex items-center px-6 py-3 text-lg font-medium bg-orange-600 hover:bg-orange-700 rounded-lg shadow-lg transition-all duration-300"
                        to="/download"
                    >
                        <svg
                            fill="currentColor"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="mr-2"
                        >
                            <path d="M12 16l4-4h-3V4h-2v8H8z" />
                            <path d="M4 20h16v2H4z" />
                        </svg>
                        Download Now
                    </Link>
                </div>
                <div className="absolute bottom-0 right-0 w-40 sm:w-64 opacity-80">
                    <img src="/images/hero-illustration.png" alt="Hero Illustration" />
                </div>
            </section>

            {/* Feature Section */}
            <section className="grid gap-12 sm:grid-cols-2 mt-12">
                <div className="flex flex-col justify-center items-start">
                    <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
                        Empower Your Productivity
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Our tools are designed to streamline your workflow and maximize efficiency. Experience the best features tailored for your success.
                    </p>
                    <Link
                        className="text-orange-700 hover:text-orange-800 font-medium"
                        to="/learn-more"
                    >
                        Learn More
                    </Link>
                </div>
                <div>
                    <img className="w-full rounded-lg shadow-md" src="/images/productivity-feature.png" alt="Productivity Feature" />
                </div>
            </section>

            {/* Footer Callout */}
            <footer className="text-center py-10">
                <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
                <Link
                    to="/signup"
                    className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-700 transition-all duration-300"
                >
                    Join Us Today
                </Link>
            </footer>
        </div>
    );
}
