import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
