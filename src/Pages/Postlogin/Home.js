import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getparentcategory } from "../../Redux/Actions/customerAction";

const Home = () => {
  const dispatch = useDispatch();
  const [fileInput, setFileInput] = useState();
  const [data, setData] = useState();
  const formData = new FormData();

  const handleSubmit = async () => {
    console.log(fileInput[0].File);

    formData.append("title", "MyImage");
    formData.append("category_image", "MyImage");
    Array.from(fileInput).forEach((item) => {
      formData.append("imageData", item);
    });
    const res = await axios.post("http://localhost:4040/uploadimage", formData);
    console.log(res);
  };

  const getData = async () => {
    const res = await axios.get("http://localhost:8000/getimages");
    console.log(res);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    dispatch(getparentcategory());
  }, []);

  return (
    <div className="Parent-container">
      <input type="file" onChange={(e) => setFileInput(e.target.files)} />
      <button onClick={handleSubmit}>Submit</button>
      {/* {data &&
        data.map((image, index) => {
          const base64String = btoa(
            new Uint8Array(image.img.data.data).reduce(function (data, byte) {
              return data + String.fromCharCode(byte);
            }, "")
          );
          return (
            <img
              src={`data:image/png;base64,${base64String}`}
              alt={image.name}
            />
          );
        })} */}
    </div>
  );
};

export default Home;
