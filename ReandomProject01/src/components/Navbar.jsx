const Navbar = () => {
    return (
      <nav className="flex justify-between items-center px-8 py-4 bg-white ">
        <h1 className="text-xl font-bold">Mentor</h1>
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">Service</a>
          <a href="#" className="hover:underline">Community</a>
          <a href="#" className="hover:underline">About</a>
        </div>
        <button className="border px-4 py-1 rounded-md">Log In</button>
      </nav>
    );
  };
  
  export default Navbar;
  