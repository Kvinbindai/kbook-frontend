import Button from "./Button";
import bgImage from '../assets/hero-image.jpg'

const HeroComponent = (props) => {
  const { src, alt } = props;
  return (
    <div
      className="hero min-h-[500px]"
      style={{
        backgroundImage: `url(${bgImage})`
          
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-bold text-white">ร้านหนังสือที่คุณไว้ใจ</h1>
          <Button className="text-white bg-transparent border-gray-100 hover:bg-gray-500 hover:border-gray-500">หนังสือทั้งหมด</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
