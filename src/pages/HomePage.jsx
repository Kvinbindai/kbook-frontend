import Navbar from "../components/Navbar";
import HeroComponent from "../components/HeroComponet";
import Title from "../components/Title";
import BookContainer from "../components/BookContainer";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <div className="text-center py-8 bg-gray-300 text-black font-bold">
        <Title>หนังสือแนะนำ</Title>
      </div>
      <BookContainer />
    </div>
  );
};

export default HomePage;
