const CartComponent = () => {
  return (
    <div className="flex justify-between gap-5 min-h-60 p-5 border-blue-500">
      <div className="bg-gray-500 min-w-60 flex justify-center items-center">
        Image
      </div>
      <div className="flex flex-col  gap-6">
        <h1 className="text-xl">Good Vibes , Good Life</h1>
        <div>Description :</div>
        <div>
          orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt
          tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium
          nibh
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between text-center items-center bg-gray-500 text-xl px-2 h-10">
          <span role="button" className="material-symbols-outlined">do_not_disturb_on</span>
          <span>1</span>
          <span role="button" className="material-symbols-outlined">add_circle</span>
        </div>
        <div className="flex gap-5 min-w-32 justify-between">
            <span>Price:</span>
            <span>255.00</span>
            <span>Baht</span>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
