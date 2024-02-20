import CardList from "./CardList";
import useAuth from '../hooks/use-auth'

const CardContainer = () => {
  const { authUser } = useAuth()
  return (
    <div className="grid grid-cols-4 p-5 gap-10">
        <CardList/>
        <CardList/>
        <CardList/>
        <CardList/>
  </div>
  );
};

export default CardContainer;
