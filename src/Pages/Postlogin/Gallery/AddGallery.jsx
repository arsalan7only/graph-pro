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
  const [imageFile, setImageFile] = useState("");

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
    <div className="product_main_container">
      <div className="Product_Top_ADD_container5">
        <div>
          <h2 style={{ color: "gray" }}>Add Gallery</h2>
        </div>
      </div>
      <Card>
        <CardContent>
          <div className="sub_container">
            <Typography>Title</Typography>
            <TextField
              label="Add Title"
              variant="outlined"
              onClick={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="sub_container">
            <Typography>Category of Image</Typography>
            <TextField
              label="Add Title"
              variant="outlined"
              onClick={(e) => setImageCategory(e.target.value)}
            />
          </div>
          <div className="sub_container">
            <Typography>Upload Image</Typography>
            <input
              variant="outlined"
              type="file"
              onClick={(e) => setImageFile(e.target.files)}
            />
          </div>
          <Button
            variant="contained"
            sx={{ borderRadius: 50 }}
            onClick={handleAddGallery}
          >
            Add Gallery
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddGallery;
