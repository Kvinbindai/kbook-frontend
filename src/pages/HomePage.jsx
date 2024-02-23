
import HeroComponent from "../components/HeroComponent";
import Title from "../components/Title";
import BookContainer from "../components/BookContainer";
import { useEffect } from "react";
import useAuth from "../hooks/use-auth";



const HomePage = () => {

  // const { fetchUser } = useAuth()

  // useEffect(()=>{
  //   fetchUser()
  // },[])

  return (
    <div>
      <HeroComponent />
      <div className="text-center py-8  text-secondary font-bold  bg-primary">
        <Title>หนังสือแนะนำ</Title>
      </div>
      <BookContainer limit={4} title="หนังสือทั้งหมด" footer="ดูรายการเพิ่มเติม"></BookContainer>
    </div>
  );
};

export default HomePage;
