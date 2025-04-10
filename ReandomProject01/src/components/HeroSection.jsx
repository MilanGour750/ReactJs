const HeroSection = () => {
  return (
    <div className="bg-gray-300 w-full h-148 rounded-3xl p-10 flex flex-col  items-start space-y-8 ml-5 mt-6">
      <h1 className="text-6xl font-bold text-white leading-tight">
        Make an <button className="bg-transparent border text-2xl border-white text-white px-4 py-1 rounded-full">
        Creativity
      </button> <br /> Entrancement
      </h1>

      

      <div className="flex space-x-4">
        <button className="bg-white text-purple-700 px-4 py-1 rounded-full shadow-md">
          Branding
        </button>
        <button className="bg-white text-purple-700 px-4 py-1 rounded-full shadow-md">
          3D Modeling
        </button>
      </div>

      <div>
        <button className="bg-white text-purple-700 px-4 py-1 rounded-full shadow-md">
          Digital Artwork
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md w-1/3">
        <h2 className="text-purple-700 font-bold">Artificial Intelligence</h2>
        <p className="text-sm text-gray-700 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
