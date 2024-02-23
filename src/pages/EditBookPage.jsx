import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useDashboard from "../hooks/use-dashboard";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useRef } from "react";
import { toast } from "react-toastify";
import useAuth from "../hooks/use-auth";

const EditBookPage = () => {
  const { bookId } = useParams();
  const { refresh , setRefresh } = useAuth()
  const { bookData, categoryData , updateOldBook } = useDashboard();
  const navigate = useNavigate();
  const [bookDetail, setBookDetail] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileEl = useRef(null);
  useEffect(() => {
    const book = bookData.find((e) => e.id === +bookId);
    setBookDetail(()=>({
      ...book
    }));
  }, []);

  const handleChangeInput = (e) => {
    setBookDetail({
      ...bookDetail,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();

      formData.append("enTitle", bookDetail.enTitle);
      formData.append("thTitle", bookDetail.thTitle);
      formData.append("enDescription", bookDetail.enDescription);
      formData.append("thDescription", bookDetail.thDescription);
      formData.append("categoryId", +bookDetail.categoryId);
      formData.append("amount", +bookDetail.amount);
      formData.append("isActive", +bookDetail.isActive);

      if (bookDetail.newPrice) {
        formData.append("price", +bookDetail.newPrice);
      }
      if(currentImage){
        formData.append("bookImage", currentImage);
      }
      setLoading(true);
      await updateOldBook(formData, bookId);
      toast.success("Update Book Complete");
      navigate("/dashboard/books");
      setRefresh(!refresh)
    } catch (err) {
      console.log(err);
      toast.error("Update Book Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading/>}
        <form onSubmit={handleSubmit}>
          <div className="py-12 px-24 flex flex-col gap-7 w-full">
            <div className="flex justify-between items-center ">
              <div className="text-xl flex gap-10 items-center">
                <span>AMOUNT :</span>
                <Input
                  placeholder="Enter Amount..."
                  width="40"
                  value={bookDetail?.amount}
                  name="amount"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="flex justify-between gap-10 ">
                <Button className="bg-green-500 text-primary">CONFIRM</Button>
                <Button type="button" onClick={() => navigate(-1)}>CANCEL</Button>
              </div>
            </div>
            <div className="flex justify-between">
              <div
                className="bg-gray-500 w-2/4 flex flex-col items-center justify-center text-xl relative cursor-pointer"
                onClick={() => fileEl.current.click()}
              >
                <input
                  type="file"
                  className="opacity-0 top-0 bottom-0 left-0 right-0 hidden"
                  ref={fileEl}
                  onChange={(e) => {
                    setBookDetail({
                      ...bookDetail,
                      bookImage: null,
                    });
                    setCurrentImage(e.target.files[0]);
                  }}
                />
                {currentImage ? (
                  <img src={URL.createObjectURL(currentImage)} />
                ) : (
                  <img src={bookDetail?.bookImage} />
                )}
              </div>
              <div className="flex flex-col gap-5">
                <Input
                  placeholder="Enter Book Title (EN)..."
                  value={bookDetail?.enTitle}
                  name="enTitle"
                  onChange={handleChangeInput}
                >
                  Book Title (EN) :
                </Input>

                <Input
                  placeholder="Enter Book Title (TH)..."
                  value={bookDetail?.thTitle}
                  name="thTitle"
                  onChange={handleChangeInput}
                >
                  Book Title (TH) :
                </Input>

                <label className="form-control w-full max-w-xs ">
                  <div className="label">
                    <span className="label-text text-xl">
                      Select Category :
                    </span>
                  </div>
                  <select
                    className="select select-bordered text-primary  w-96"
                    value={bookDetail?.categoryId}
                    onChange={(e) => {
                      setBookDetail((prev) => ({
                        ...bookDetail,
                        categoryId: e.target.value,
                      }));
                    }}
                  >
                    {categoryData?.map((e) => {
                      return (
                        <option key={e.id} value={e.id}>
                          {e.enTitle || e.thTitle}
                        </option>
                      );
                    })}
                  </select>
                </label>
                <label className="form-control w-full max-w-xs ">
                  <div className="label">
                    <span className="label-text text-xl">
                      Status :
                    </span>
                  </div>
                  <select
                    className="select select-bordered text-primary  w-96"
                    value={bookDetail?.isActive}
                    onChange={(e) => {
                      console.log(e.target.value)
                      setBookDetail((prev) => ({
                        ...bookDetail,
                        isActive: e.target.value === 'true',
                      }));
                    }}
                  >
                    <option value="true">Active</option>
                    <option value="false">InActive</option>
                  </select>
                </label>

                <div className="flex flex-col gap-5">
                  <Input
                    placeholder="Enter Price..."
                    value={bookDetail?.price}
                    name="price"
                    onChange={handleChangeInput}
                    disabled={true}
                    className="text-primaryry"
                  >
                    Price :
                  </Input>

                  <Input
                    placeholder="Enter New Price..."
                    name="newPrice"
                    onChange={handleChangeInput}
                    value={bookDetail?.newPrice}
                    type="number"
                  >
                    New Price :
                  </Input>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <Input
                placeholder="Enter Description (EN) :..."
                width="full"
                name="enDescription"
                value={bookDetail?.enDescription}
                onChange={handleChangeInput}
              >
                Description (EN) :
              </Input>
              <Input
                placeholder="Enter Description (TH) :..."
                width="full"
                name="thDescription"
                value={bookDetail?.thDescription}
                onChange={handleChangeInput}
              >
                Description (TH) :
              </Input>
            </div>
          </div>
        </form>
     
      
    </>
  );
};

export default EditBookPage;
