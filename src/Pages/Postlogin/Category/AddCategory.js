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

const AddCategory = () => {
  const [selectCategory, setSelectCategory] = useState("");
  return (
    <div className="product_main_container01">
      <div className="Product_Top_Add_container01">
        <div>
          <h2 style={{ marginBottom: 20, color: "gray" }}>Add Category</h2>
        </div>
      </div>
      {/* TOP NAV CONTAINER ENDS*/}
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
                label="Age"
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
          {/* <div style={{ marginTop: "25px" }}>
            <Typography sx={{ fontSize: 25 }}>
              Product Category Image
            </Typography>
            <Typography sx={{ ml: 6 }}>Media</Typography>
            <Button variant="contained" sx={{ borderRadius: "50px" }}>
              Upload Media
            </Button>
          </div> */}
          <Typography sx={{ fontSize: 25, mt: "25px" }}>
            Custome Attribute
          </Typography>
          <div>
            <div className="sub_container">
              <Typography>Group Name</Typography>
              <TextField variant="outlined" label="Group Name" />
            </div>
            <div className="sub_container">
              <Typography>Field Label</Typography>
              <TextField variant="outlined" label="Field Label" />
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
                  label="Age"
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
              <Typography>Is-Variant-Key</Typography>
              <div style={{ marginRight: "100px" }}>
                <input type="radio" name="y" label="Y" /> <label>Yes</label>{" "}
                <input type="radio" name="y" label="N" /> <label>No</label>
              </div>
            </div>
            <Button
              variant="contained"
              color="error"
              sx={{ borderRadius: "50px" }}
            >
              Remove
            </Button>
            <Button variant="contained" sx={{ borderRadius: "50px" }}>
              Add
            </Button>
          </div>
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: "50px", ml: 40, mt: -8 }}
          >
            Add Category
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCategory;
