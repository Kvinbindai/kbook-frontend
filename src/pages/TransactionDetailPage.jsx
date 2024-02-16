import Button from "../components/Button";
import TableInTransaction from "../components/TableInTransaction";
const TransactionDetailPage = () => {
  return (
    <div className="min-h-screen bg-white p-8 ">
      <div className="flex justify-end gap-10">
        <Button className="bg-blue-500 w-36">Edit Address</Button>
        <Button className="bg-gray-500 w-24">Back</Button>
      </div>
      <div className="flex justify-between p-12">
        <div className="artboard phone-1 bg-black">320×568</div>
        <div className="flex flex-col gap-5 w-96  text-xl">
          <div className="flex flex-col gap-5">
            <h1>Transaction :</h1>
            <h1 className="mx-5">K0101256600001</h1>
          </div>
          <div className="flex flex-col gap-5">
            <h1>Total Price :</h1>
            <h1 className="mx-5">500.00</h1>
          </div>
          <div className="flex flex-col gap-5">
            <h1>Status :</h1>
            <h1 className="mx-5">PENDING</h1>
          </div>
          <div className="flex flex-col gap-5">
            <h1>Address :</h1>
            <div className=" mx-5 flex flex-wrap gap-5">
              <div>Bangkok</div>
              <div>dindaeng</div>
              <div>dindaeng</div>
              <div>10400</div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-12">
        <h1 className="text-xl">รายละเอียดสินค้า</h1>
        <TableInTransaction />
      </div>
    </div>
  );
};
export default TransactionDetailPage;
