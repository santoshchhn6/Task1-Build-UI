import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LatestArticles from "./components/LatestArticles";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="border-x w-[1440px]">
        <Home />
        <AboutUs />
        <LatestArticles />
        <Footer />
      </div>
    </div>
  );
}

export default App;
