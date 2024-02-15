import CardList from "./CardList";


const CardContainer = () => {
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
