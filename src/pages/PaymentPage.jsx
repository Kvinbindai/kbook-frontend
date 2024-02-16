import qrCode from '../assets/qr-sample.gif'
import Button from '../components/Button';

const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-white p-24">
      <div className="flex flex-col justify-center items-center">
        <div className='w-96'>
            <img src={qrCode}/>
        </div>
        <div className='mt-10 flex gap-5'>
            <Button className="w-48 bg-green-500">Upload Slip</Button>
            <Button className="w-48 bg-gray-500">Back</Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
