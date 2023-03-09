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
import { useDispatch } from "react-redux";
import { addcategory } from "../../../Redux/Actions/customerAction";
import "./AddCategory.css";

const AddCategory = () => {
  //{useDispatch Starts}//
  const dispatch = useDispatch();
  //{useStates Starts}//
  const [selectCategory, setSelectCategory] = useState("");
  const [categoryData, setCategoryData] = useState("");
  //{Functions Starts}//
  const handleAddCategory = async () => {
    dispatch(addcategory(categoryData));
    setCategoryData({
      categoryname: "",
      groupname: "",
      fieldlabel: "",
      fieldname: "",
      fieldvalue: "",
      varienttype: "",
    });
  };
  return (
    <div>
      <div>
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
            <TextField
              variant="outlined"
              label="Category Name"
              value={categoryData.categoryname}
              onChange={(e) =>
                setCategoryData({
                  ...categoryData,
                  categoryname: e.target.value,
                })
              }
            />
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
              <TextField
                variant="outlined"
                label="Group Name"
                value={categoryData.groupname}
                onChange={(e) =>
                  setCategoryData({
                    ...categoryData,
                    groupname: e.target.value,
                  })
                }
              />
            </div>
            <div className="sub_container">
              <Typography>Field Label</Typography>
              <TextField
                variant="outlined"
                label="Field Label"
                value={categoryData.fieldlabel}
                onChange={(e) =>
                  setCategoryData({
                    ...categoryData,
                    fieldlabel: e.target.value,
                  })
                }
              />
            </div>
            <div className="sub_container">
              <Typography>Field Name</Typography>
              <TextField
                variant="outlined"
                label="Field Name"
                value={categoryData.fieldname}
                onChange={(e) =>
                  setCategoryData({
                    ...categoryData,
                    fieldname: e.target.value,
                  })
                }
              />
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
              <TextField
                variant="outlined"
                label="Field Value"
                value={categoryData.fieldvalue}
                onChange={(e) =>
                  setCategoryData({
                    ...categoryData,
                    fieldvalue: e.target.value,
                  })
                }
              />
            </div>
            <div className="sub_container">
              <Typography>Is-Variant-Key</Typography>
              <div style={{ marginRight: "100px" }}>
                <input
                  type="radio"
                  name="varienttype"
                  value="yes"
                  checked={categoryData.varienttype == "yes"}
                  onChange={(e) =>
                    setCategoryData({
                      ...categoryData,
                      varienttype: e.target.value,
                    })
                  }
                />{" "}
                <label>Yes</label>{" "}
                <input
                  type="radio"
                  name="varienttype"
                  value="no"
                  checked={categoryData.varienttype == "no"}
                  onChange={(e) =>
                    setCategoryData({
                      ...categoryData,
                      varienttype: e.target.value,
                    })
                  }
                />{" "}
                <label>No</label>
              </div>
            </div>
            <Button
              variant="contained"
              color="error"
              sx={{ borderRadius: "50px" }}
            >
              Remove
            </Button>{" "}
            <Button variant="contained" sx={{ borderRadius: "50px" }}>
              Add
            </Button>
          </div>
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: "50px", ml: 40, mt: -8 }}
            onClick={handleAddCategory}
          >
            Add Category
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCategory;
