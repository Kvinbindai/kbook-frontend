
import HeroComponent from "../components/HeroComponent";
import Title from "../components/Title";
import BookContainer from "../components/BookContainer";



const HomePage = () => {


  return (
    <div>
      <HeroComponent />
      <div className="text-center py-8 bg-gray-300 text-black font-bold">
        <Title>หนังสือแนะนำ</Title>
      </div>
      <BookContainer title="หนังสือทั้งหมด" footer="ดูรายการเพิ่มเติม"></BookContainer>
    </div>
  );
};

export default HomePage;
