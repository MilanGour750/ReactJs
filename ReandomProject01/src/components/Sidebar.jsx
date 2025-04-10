import { FaInstagram } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="w-1/4 bg-whi min-h-screen p-6 space-y-6">
            {/* How It Work Section */}
            <div className="bg-gray-300 p-6 rounded-2xl w-full shadow-md relative">
                <button className="bg-white px-4 py-1 rounded-full text-sm font-medium">
                    How It Work
                </button>

                {/* Icons Positioned at Top Right */}
                <div className="absolute top-6 right-6 flex space-x-2">
                    <div className="bg-white p-2 rounded-full shadow-md">
                        <FaInstagram className="text-black" />
                    </div>
                    <div className="bg-white p-2 rounded-full shadow-md">
                        <FaGlobe className="text-black" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="bg-white p-4 mt-6 rounded-lg shadow-md">
                    <p className="text-sm text-purple-800 leading-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum
                    </p>
                </div>
            </div>

            {/* Explore Collection Section */}
            <div className="bg-gray-300 p-6 rounded-2xl w-full shadow-md relative flex items-center">
                <h2 className="text-xl font-semibold text-white">Explore <br /> Collection</h2>
                    <div className="absolute right-4 flex bg-white p-1 rounded-full">
                        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full -ml-3"></div>
                        <div className="w-8 h-8 bg-gray-200 rounded-full -ml-3"></div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-300 p-4 rounded-lg">
                <h2 className="text-lg font-semibold">FAQ</h2>
                <p className="text-sm text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, corrupti!
                </p>
                <button className="bg-white px-3 py-1 mt-2 text-sm rounded-full">Popular</button>
            </div>
        </div>
    );
};

export default Sidebar;
