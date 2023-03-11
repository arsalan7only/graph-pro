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
import { distance } from "framer-motion";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addcategory } from "../../../Redux/Actions/customerAction";
import "./AddCategory.css";

const AddCategory = () => {
  const select = useSelector((state) => state);
  const parentCategory = select.ProductReducer.parentcategory;
  const [custom,setCustom]=useState([0]);

  console.log(parentCategory);
  const dispatch = useDispatch();
  const [selectCategory, setSelectCategory] = useState("");
  const [categoryData, setCategoryData] = useState("");

  const handleSubmit = async () => {
    dispatch(addcategory(categoryData));
    setCategoryData({
      categoryName: "",
      groupname: "",
      fieldlabel: "",
      fielname: "",
      fieldvalue: "",
      variantkey: "",
      id: "",
      createdproduct: "",
      updatedproduct: "",
    });
  };
  const handleAddCustom=()=>{
    setCustom([...custom,custom.length + 1]);
  }
  const handleDelectCustome=(index)=>{
    const deletes= custom.filter((elem,ind)=>index != ind)
    setCustom(deletes)
  }
  return (
    <div className="Product_main_Container">
      <div className="Product_Top_Add_container">
        <div>
          <h3>Add Category</h3>
        </div>
      </div>
      {/* top nav end */}
      <Card>
        <CardContent>
          <div className="sub_container">
            <Typography> Perent Category </Typography>
            <FormControl sx={{ width: 200 }}>
              <InputLabel id="demo-simple-select-label">
                Select Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectCategory}
                label="Select Categpry"
                onChange={(e) => setSelectCategory(e.target.value)}
              >
                {parentCategory.map((item) => (
                  <MenuItem value={item.id}>
                    {item.parentcategoryname}{" "}
                  </MenuItem>
                ))}
                {/* <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
          </div>
          <div className="sub_container">
            <Typography> Category Name </Typography>
            <TextField
              variant="outlined"
              label="Category Name"
              value={categoryData.categoryName}
              onChange={(e) =>
                setCategoryData({
                  ...categoryData,
                  categoryName: e.target.value,
                })
              }
            />
          </div>
          <Typography>Product Category Image</Typography>
          <div>
            <Typography>Media</Typography>
            <Button variant="contained">Upload Media</Button>
          </div>
          <Typography>Custom Attribute</Typography>
          {custom.map((item,index)=>{
            return(
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
                value={categoryData.fielname}
                onChange={(e) =>
                  setCategoryData({ ...categoryData, fielname: e.target.value })
                }
              />
            </div>
            <div className="sub_container"></div>
            <div className="sub_container">
              <Typography>Field Type</Typography>
              <FormControl sx={{ width: 200 }}>
                <InputLabel id="demo-simple-select-label">
                  Select box
                </InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectCategory}
                  label="Select box"
                  onChange={(e) => setSelectCategory(e.target.value)}
                >
                  <MenuItem value={10}>select box</MenuItem>
                  <MenuItem value={20}>tex box</MenuItem>
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
              <Typography>Is_Variant_key</Typography>
              <div className="sub_container">
                <input
                  type="radio"
                  name="variantkey"
                  value="yes"
                  checked={categoryData.variantkey == "yes"}
                  onChange={(e) =>
                    setCategoryData({
                      ...categoryData,
                      variantkey: e.target.value,
                    })
                  }
                />
                <label>Yes</label>
                <input
                  type="radio"
                  name="variantkey"
                  value="no"
                  checked={categoryData.variantkey == "no"}
                  onChange={(e) =>
                    setCategoryData({
                      ...categoryData,
                      variantkey: e.target.value,
                    })
                  }
                />
                <label>No</label>
              </div>
            </div>

            <Button variant="contained" color="error" disabled={index == 0} 
            onClick={()=> handleDelectCustome (index)}>
              {" "}
              Remove
            </Button>
            <Button variant="contained" onClick={handleAddCustom}>Add</Button>
          </div>
            )
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
