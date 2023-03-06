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
import React, { useState } from "react";
import "./AddCategory.css";

export const AddCategory = () => {
  const [selectCategory, setSelectCategory] = useState("");

  return (
    <div className="Product_main_container1g">
      <div className="Product_Top_Add_container1g">
        <div>
          <h3>Add Category </h3>
        </div>
      {/* Top Nav End */}
      </div>
      <Card>
        <CardContent>
          <div className="sub_container">
            <Typography>Perent Category</Typography>
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
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="sub_container">
            <Typography>Category Name</Typography>
            <TextField variant="outlined" label="Category Name" />
          </div>
          <Typography>Product Category Image</Typography>
          <div>
            <Typography> Media</Typography>
            <Button variant="contained">Upload Media</Button>
          </div>
          <Typography>Custom Attribute</Typography>
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
              <Typography>Fiels Type</Typography>
              <FormControl sx={{ width: 200 }}>
                <InputLabel id="demo-simple-select-label">
                  Select Box
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={selectCategory}
                  label="Select Box"
                  //   onChange={(e)=>setSelectCategory(e.target.value)}
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
            <Typography>Is_Veriant_Key</Typography>
            <div className="sub_container">
            <input type="radio" name="Y" />
            <label>Yes</label>
            <input type="radio" name="Y" />
            <label>No</label>
            </div>
            </div>
            <Button variant="contained" color="error">
              Remove
            </Button>
            <Button variant="contained">Add</Button>
          </div>
          <Button variant="contained" color="success">Add Categort</Button>
        </CardContent>
      </Card>
    </div>
  );
};
