import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useDashboard from "../hooks/use-dashboard";

import Loading from "../components/Loading";
import { useRef } from "react";
import { toast } from "react-toastify";


const AddBookPage = () => {
  const navigate = useNavigate();
  const { categoryData, createNewBook   } = useDashboard();
  const [loading, setLoading] = useState(false);
  const [bookDetail, setBookDetail] = useState({
    enTitle: "",
    thTitle: "",
    enDescription: "",
    thDescription: "",
    categoryId: 1,
    amount: "",
    price: "",
    bookImage: '',
  });
  const [currentImage, setCurrentImage] = useState(null);
  const handleChangeInput = (e) => {
    setBookDetail({
      ...bookDetail,
      [e.target.name]: e.target.value,
    });
  };
  const fileEl = useRef(null);

 
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
      formData.append("price", +bookDetail.price);
      formData.append("bookImage", bookDetail.bookImage);

      setLoading(true);
      const data = await createNewBook(formData);
      console.log(data)
      toast.success("Create Book Complete");
      navigate("/dashboard/books");
    } catch (err) {
      console.log(err);
      toast.error("Create Book Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}

      <form onSubmit={handleSubmit}>
        <div className="py-12 px-24 flex flex-col gap-7 w-full  text-black">
          <div className="flex justify-between items-center ">
            <div className="text-xl flex gap-10 items-center">
              <span>AMOUNT :</span>

              <Input
                placeholder="Enter Amount..."
                width="40"
                name="amount"
                value={bookDetail.amount}
                onChange={handleChangeInput}
                type="number"
              />
            </div>
            <div className="flex justify-between gap-10 ">
              <Button className="bg-secondary text-primary">ADD BOOK</Button>
              <Button className="bg-primary text-secondary" onClick={() => navigate(-1)} type="button">
                CANCEL
              </Button>
            </div>
          </div>
          <div className="flex justify-between">
            {currentImage ? (
              <div
                className="bg-primary w-2/4 flex flex-col items-center justify-center text-xl relative cursor-pointer"
                onClick={() => fileEl.current.click()}
              >
                <img src={URL.createObjectURL(currentImage)} />
              </div>
            ) : (
              <div
                className="bg-primary w-2/4 flex flex-col items-center justify-center text-xl relative cursor-pointer"
                onClick={() => fileEl.current.click()}
              >
                <input
                  type="file"
                  className="opacity-0 top-0 bottom-0 left-0 right-0 hidden"
                  ref={fileEl}
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setCurrentImage(e.target.files[0]);
                      setBookDetail({
                        ...bookDetail,
                        bookImage: e.target.files[0],
                      });
                    }
                  }}
                />
                Add Image Book
              </div>
            )}
            <div className="flex flex-col gap-5">
              <Input
                placeholder="Enter Book Title (EN)..."
                value={bookDetail.enTitle}
                name="enTitle"
                onChange={handleChangeInput}
              >
                Book Title (EN) :
              </Input>

              <Input
                placeholder="Enter Book Title (TH)..."
                value={bookDetail.thTitle}
                name="thTitle"
                onChange={handleChangeInput}
              >
                Book Title (TH) :
              </Input>

              <label className="form-control w-full max-w-xs ">
                <div className="label">
                  <span className="label-text text-xl">Select Category :</span>
                </div>
                <select
                  className="select select-bordered text-primaryry  w-96"
                  value={bookDetail.categoryId}
                  onChange={(e) => {
                    setBookDetail((prev) => ({
                      ...bookDetail,
                      categoryId: e.target.value,
                    }));
                  }}
                >
                  {categoryData.map((e) => {
                    return (
                      <option key={e.id} value={e.id}>
                        {e.enTitle || e.thTitle}
                      </option>
                    );
                  })}
                </select>
              </label>

              <div className="flex flex-col gap-5">
                <Input
                  placeholder="Enter Price..."
                  value={bookDetail.price}
                  name="price"
                  type="number"
                  onChange={handleChangeInput}
                >
                  Price :
                </Input>

                <Input placeholder="Enter New Price..." disabled={true}>
                  New Price :
                </Input>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <Input
              placeholder="Enter Description (EN)..."
              width="full"
              value={bookDetail.enDescription}
              name="enDescription"
              
              onChange={handleChangeInput}
            >
              Description (EN) :
            </Input>
            <Input
              placeholder="Enter Description (TH)..."
              width="full"
              value={bookDetail.thDescription}
              name="thDescription"
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

export default AddBookPage;
