import Select from "../components/Select";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../hooks/use-auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addOrUpdateAddress } from "../api/address";

const AddressPage = () => {
  const navigate = useNavigate();
  const { authUser, updateAddressWhenSuccess } = useAuth();

  const [delivery, setDelivery] = useState("self");
  const [provincesList, setProvincesList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [subDistrictList, setSubDistrictList] = useState([]);
  const [contact, setContact] = useState({
    province: "",
    district: "",
    subDistrict: "",
    postCode: "",
    contactName:  authUser?.firstName,
    contactNumber: authUser?.phoneNumber,
  });

  const handleRadio = (value) => {
    if (value === "self") {
      setContact({
        province: "",
        district: "",
        subDistrict: "",
        postCode: "",
      });
      setDelivery("self");
    } else {
      setDelivery("delivery");
    }
  };

  const handleProvinceOnChange = (e) => {
    setContact((prev) => ({
      ...prev,
      province: e.target.value,
    }));
    const currentProvince = e.target.value;
    const filterDistrict = provincesList?.filter(
      (province) => province["name_th"] == currentProvince
    );
    // console.log(filterDistrict[0]);
    setDistrictList(filterDistrict[0]["amphure"]);
  };
  const handleDistrictOnChange = (e) => {
    setContact({
      ...contact,
      district: e.target.value,
    });
    const currentDistrict = e.target.value;
    const filterSubDistrict = districtList?.filter(
      (district) => district["name_th"] == currentDistrict
    );
    console.log(filterSubDistrict[0]);
    setSubDistrictList(filterSubDistrict[0]["tambon"]);
  };

  const handleSubDistrictOnChange = (e) => {
    const currentSubDistrict = subDistrictList.find((sub) => {
      if (contact.subDistrict) {
        return sub["name_th"] === contact.subDistrict;
      } else {
        return sub["name_th"] === e.target.value;
      }
    });
    console.log(currentSubDistrict["name_th"]);

    setContact((prev) => ({
      ...prev,
      subDistrict: currentSubDistrict["name_th"],
    }));
    // console.log(newObj)
    const code = currentSubDistrict["zip_code"];
    setContact((prev) => ({
      ...prev,
      postCode: String(code),
    }));
  };

  const handleContactChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    (() => {
      fetch(
        "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json"
      )
        .then((response) => response.json())
        .then((result) => {
          setProvincesList(() => result);
        });
    })();
  }, []);

  const submitData = async (e) => {
    try {
      e.preventDefault();
      if (delivery === "delivery") {
        const result = await addOrUpdateAddress(contact);
        // console.log(result.data.data) // obj
        await updateAddressWhenSuccess(result.data.data);
        toast.success("Save Address Complete");
        navigate("/cart/address/payment");
      } else {
        // await addOrUpdateAddress();
        navigate("/cart/address/payment");
      }
    } catch (err) {
      console.log(err);
      navigate("/cart");
      window.location.reload();
    }
  };
  return (
    <div className=" min-h-screen p-8">
      <div className="text-xl flex justify-between items-center">
        <h1>เพิ่มที่อยู่เพื่อจัดส่ง</h1>
        <div className="flex gap-5">
          <div className="form-control">
            <label className="label cursor-pointer gap-5">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-primary"
                value="self"
                onChange={(e) => handleRadio(e.target.value)}
                checked={delivery === "self"}
              />
              <span className="label-text text-xl">รับที่ร้าน</span>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer gap-5">
              <input
                type="radio"
                name="radio-10"
                value="delivery"
                className="radio checked:bg-primary"
                onChange={(e) => handleRadio(e.target.value)}
                checked={delivery === "delivery"}
              />
              <span className="label-text text-xl">จัดส่งถึงบ้าน</span>
            </label>
          </div>
        </div>
      </div>
      <form onSubmit={submitData}>
        <div className="mt-8 flex flex-col mx-auto w-96 gap-5">
          <Select
            placeholder="Select Province...."
            disabled={delivery === "delivery" ? false : true}
            option={provincesList}
            value={contact.province}
            onChange={handleProvinceOnChange}
          >
            Province :
          </Select>
          <Select
            placeholder="Select District...."
            disabled={contact.province ? false : true}
            option={districtList}
            value={contact.district}
            onChange={handleDistrictOnChange}
          >
            District :
          </Select>
          {subDistrictList && (
            <Select
              placeholder="Select Sub District...."
              disabled={contact.district ? false : true}
              value={contact.subDistrict}
              option={subDistrictList}
              onChange={handleSubDistrictOnChange}
            >
              Sub District :
            </Select>
          )}
          <Input
            placeholder="Select Post Code...."
            disabled={true}
            value={contact.postCode}
            style={{ color: "White" }}
          >
            PostCode :
          </Input>
          <Input
            placeholder="Enter Contact Name...."
            disabled={delivery === "self" ? true : false}
            value={contact?.contactName || authUser?.firstName}
            onChange={handleContactChange}
            name="contactName"
          >
            Contact Name :
          </Input>
          <Input
            placeholder="Enter Contact Number...."
            disabled={delivery === "self" ? true : false}
            value={contact?.contactNumber || authUser?.phoneNumber}
            onChange={handleContactChange}
            name="contactNumber"
          >
            Contact Number :
          </Input>
          <div className="flex justify-between mt-5">
            <Button className="w-40 bg-green-500 hover:bg-green-600">
              Confirm
            </Button>
            <Button className="w-40 bg-primary-500" onClick={() => navigate(-1)}>
              Back
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddressPage;
