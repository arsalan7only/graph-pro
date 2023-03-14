import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGallery } from "../../../Redux/Actions/customerAction";

const AddGallery = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [imageCategory, setImageCategory] = useState("");
  const [imageFile, setImageFile] = useState([]);

  const handleAddGallery = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category_image", imageCategory);
    Array.from(imageFile).forEach((item) => {
      formData.append("imageData", item);
    });

    dispatch(addGallery(formData));
  };
  return (
    <div className="Product_main_container">
      <div className="Product_Top_Add_container">
        <div>
          <h3>Add Gallery </h3>
        </div>
      </div>
      {/* Top Nav End */}
      <Card>
        <CardContent>
          <div className="sub_container">
            <Typography>Title</Typography>
            <TextField
              label="Add Title"
              variant="outlined"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="sub_container">
            <Typography>Category of image</Typography>
            <TextField
              label="Category"
              variant="outlined"
              onChange={(e) => setImageCategory(e.target.value)}
            />
          </div>
          <div className="sub_container">
            <Typography>Upload image</Typography>
            <input type="file" onChange={(e) => setImageFile(e.target.files)} />
          </div>
          <Button variant="contained" onClick={handleAddGallery}>
            Add Gallery
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddGallery;
