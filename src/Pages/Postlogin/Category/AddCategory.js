import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import "./AddCategory.css";
import { useSelector } from "react-redux";
const AddCategory = () => {
  const select = useSelector((state) => state);
  const parentCategory = select.ProductReducer.parentcategory;
  const [selectCategory, setSelectCategory] = useState("");
  const [custom, setCustom] = useState([0]);

  console.log("parentCategory", selectCategory);

  const handleAddCustom = () => {
    setCustom([...custom, custom.length + 1]);
  };

  const handleDeleteCustom = (index) => {
    const deletes = custom.filter((elem, ind) => index != ind);
    setCustom(deletes);
  };
  return (
    <div className="Product_main_container">
      <div className="Product_Top_Add_container">
        <div>
          <h3>Add Category</h3>
        </div>
      </div>
      {/* Top Nav End */}
      <Card sx={{ width: 500 }}>
        <CardContent>
          <div className="sub_container">
            <Typography>Parent Category</Typography>
            <FormControl sx={{ width: 200 }}>
              <InputLabel id="demo-simple-select-label">
                Select Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectCategory}
                label="Select Category"
                onChange={(e) => setSelectCategory(e.target.value)}
              >
                {parentCategory.map((item) => (
                  <MenuItem value={item.id}>{item.parentcategoryname}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="sub_container">
            <Typography>Category Name</Typography>
            <TextField variant="outlined" label="Category Name" />
          </div>
          <Typography>Product Category Image</Typography>
          <div>
            <Typography>Media</Typography>
            <Button variant="contained">Upload Media</Button>
          </div>
          <Typography>Custom Attribute</Typography>

          {custom.map((item, index) => {
            return (
              <div>
                <div className="sub_container">
                  <Typography>Group Name</Typography>
                  <TextField variant="outlined" label="Group Name" />
                </div>
                <div className="sub_container">
                  <Typography>Field label</Typography>
                  <TextField variant="outlined" label="Field label" />
                </div>
                <div className="sub_container">
                  <Typography>Field Name</Typography>
                  <TextField variant="outlined" label="Field Name" />
                </div>

                <div className="sub_container">
                  <Typography>Field Type</Typography>
                  <FormControl sx={{ width: 200 }}>
                    <InputLabel id="demo-simple-select-label">
                      Select Box
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectCategory}
                      label="Select Box"
                      onChange={(e) => setSelectCategory(e.target.value)}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="sub_container">
                  <Typography>Field Value</Typography>
                  <TextField variant="outlined" label="Field Value" />
                </div>

                <div className="sub_container">
                  <Typography>Is_Variant_Key</Typography>
                  <div>
                    <input type="radio" name="y" />
                    <label>Y</label>
                    <input type="radio" name="y" />
                    <label>N</label>
                  </div>
                </div>

                <Button
                  variant="contained"
                  color="error"
                  disabled={index == 0}
                  onClick={() => handleDeleteCustom(index)}
                >
                  Remove
                </Button>
                <Button variant="contained" onClick={handleAddCustom}>
                  Add
                </Button>
              </div>
            );
          })}

          <Button variant="contained" color="success">
            Add Category
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCategory;
