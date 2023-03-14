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
import { useDispatch, useSelector } from "react-redux";
import { addCategories } from "../../../Redux/Actions/customerAction";
import "./AddCategory.css";

const AddCategory = () => {
  const select = useSelector((state) => state);
  const parentCategory = select.ProductReducer.parentcategory;

  const dispatch = useDispatch();
  const [selectCategory, setSelectCategory] = useState("");
  const [categoryNameData, setCategoryNameData] = useState({});
  const [custom, setCustom] = useState([0]);
  const [add, setADD] = useState({categoryNameData});
  console.log(selectCategory);

  const handleChange = (e) => {
    setSelectCategory(e.target.value);
  };

  const handleAddCustom = () => {
    setCustom([...custom, custom.length + 1]);
    
  };

  const handeDeletCustom = (index) => {
    const deletes = custom.filter((elem, ind) => index !== ind);
    setCustom(deletes);
  };

  const handleSubmit = () => {
    const payload = {
      categoryname: categoryNameData.categoryname,
      groupname: categoryNameData.groupname,
      fieldlabel: categoryNameData.fieldlabel,
      fieldname: categoryNameData.fieldname,
      fieldvalue: categoryNameData.fieldvalue,
      fieldkey: categoryNameData.variantkey,
    };
    dispatch(addCategories(payload));
  };

  return (
    <div>
      <div className="Product_Top_Container6">
        <div className="Product_TopCatainer">
          <h1>Add Category</h1>
        </div>
      </div>
      {/* {top eded} */}

      <Card>
        <CardContent>
          <div className="sub_contained">
            <Typography>Parent Category</Typography>{" "}
            <FormControl sx={{ width: 200 }}>
              <InputLabel id="demo-simple-select-label">
                Select Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="select_category"
                value={selectCategory}
                label="Select Category"
                onChange={handleChange}
              >
                {parentCategory?.map((item) => (
                  <MenuItem value={10}>{item.Parentcategories}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="sub_contained">
            <Typography>Category Name</Typography>{" "}
            <TextField
              variant="outlined"
              label="Category Name"
              value={categoryNameData.categoryname}
              onChange={(e) =>
                setCategoryNameData({
                  ...categoryNameData,
                  categoryname: e.target.value,
                })
              }
            ></TextField>
          </div>

          <Typography>Product Category Image</Typography>

          <div>
            <Typography>Media</Typography>{" "}
            <Button variant="contained" sx={{ ml: 20 }}>
              Upload Media
            </Button>
          </div>

          <Typography>Custom Atribute</Typography>

          {custom.map((item, index) => {
            return (
              <div>
                <div className="sub_contained">
                  <Typography>Group Name</Typography>
                  <TextField
                    variant="outlined"
                    label="Group Name"
                    value={categoryNameData.groupname}
                    onChange={(e) =>
                      setCategoryNameData({
                        ...categoryNameData,
                        groupname: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="sub_contained">
                  <Typography>Field Label</Typography>
                  <TextField
                    variant="outlined"
                    label="Field Label"
                    value={categoryNameData.fieldlabel}
                    onChange={(e) =>
                      setCategoryNameData({
                        ...categoryNameData,
                        fieldlabel: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="sub_contained">
                  <Typography> Field Name</Typography>
                  <TextField
                    variant="outlined"
                    label="Field Name"
                    value={categoryNameData.fieldname}
                    onChange={(e) =>
                      setCategoryNameData({
                        ...categoryNameData,
                        fieldname: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="sub_contained">
                  <Typography>Select Box</Typography>
                  <FormControl sx={{ width: 200 }}>
                    <InputLabel id="demo-simple-select-label">
                      Select Box
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="select_category"
                      value={selectCategory}
                      label="Select Box"
                      onChange={handleChange}
                    >
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="sub_contained">
                  <Typography>Field Value</Typography>
                  <TextField
                    variant="outlined"
                    label="Field Value"
                    value={categoryNameData.fieldvalue}
                    onChange={(e) =>
                      setCategoryNameData({
                        ...categoryNameData,
                        fieldvalue: e.target.value,
                      })
                    }
                  ></TextField>
                </div>
                <div className="sub_contained">
                  <Typography>Is_Variant_Key</Typography>
                  <div>
                    <input
                      type="radio"
                      name="variantkey"
                      value="yes"
                      checked={categoryNameData.variantkey === "yes"}
                      onChange={(e) =>
                        setCategoryNameData({
                          ...categoryNameData,
                          variantkey: e.target.value,
                        })
                      }
                    />
                    <label>YES</label>
                    <input
                      type="radio"
                      name="variantkey"
                      value="yes"
                      checked={categoryNameData.variantkey === "no"}
                      onChange={(e) =>
                        setCategoryNameData({
                          ...categoryNameData,
                          variantkey: e.target.value,
                        })
                      }
                    />
                    <label>NO</label>
                  </div>
                </div>
                <Button
                  variant="contained"
                  color="error"
                  disabled={index === 0}
                  onClick={() => handeDeletCustom(index)}
                >
                  Remove
                </Button>
                <Button variant="contained" onClick={handleAddCustom}>
                  Add
                </Button>
              </div>
            );
          })}

          <Button variant="contained" color="success" onClick={handleSubmit}>
            Add Category
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCategory;
