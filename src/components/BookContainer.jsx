import CardContainer from "./CardContainer";

const BookContainer = () => {
  return (
    <div className="w-full p-10 bg-white">
      <h1 className="text-xl underline">หนังสือแนะนำ</h1>
      <div className="py-5">
        <CardContainer />
      </div>
      <h1 className="text-right text-xl text-blue-500 underline underline-offset-8">
        ดูรายการทั้งหมด
      </h1>
    </div>
  );
};

export default BookContainer;
