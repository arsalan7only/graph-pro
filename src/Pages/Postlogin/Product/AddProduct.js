import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import JoditEditorComp from "../../../Components/JoditEditorComp";
import "./AddProduct.css";
const AddProduct = () => {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState([
    {
      name: "Accessories",
      expend: false,
      subCategory: [
        {
          name: "Wallets",
        },
        { name: "perfumes" },
      ],
    },
    {
      name: "Mens",
      expend: true,
      subCategory: [
        {
          name: "Formal Shirts",
        },
        { name: "Top Wear" },
        { name: "Bottom Wear" },
      ],
    },
  ]);
  const config = {
    readonly: false,
    placeholder: "Start typings...",
  };

  const handleExpendChange = (index, PreExpend) => {
    const changeData = category.map((item, ind) => {
      if (index == ind) {
        return {
          ...item,
          expend: !PreExpend,
        };
      } else {
        return {
          ...item,
          expend: false,
        };
      }
    });
    setCategory(changeData);
  };

  return (
    <div>
      <div className="Product_Top_Add_container">
        <div>
          <h3>Product</h3>
        </div>
        <div className="Product-Top-button">
          <Button variant="contained" color="success">
            Add Product
          </Button>
        </div>
      </div>
      {/* Top container closed */}
      <div>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Card>
              <CardContent>
                <TextField label="Title" variant="outlined" />
                <Typography>Short Product Description</Typography>
                <JoditEditorComp
                  setValue={setValue}
                  value={value}
                  config={config}
                />
                <Typography>Long Product Description</Typography>
                <JoditEditorComp
                  setValue={setValue}
                  value={value}
                  config={config}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <FormControl sx={{ width: 200 }}>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    label="Status"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <MenuItem value={1}>Active</MenuItem>
                    <MenuItem value={0}>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography>Product Categories</Typography>
                <ul>
                  {category.map((item, index) => {
                    return (
                      <li>
                        <span
                          onClick={() => handleExpendChange(index, item.expend)}
                        >
                          {item.expend ? "-" : "+"} {item.name}
                        </span>
                        <ul>
                          {item.expend &&
                            item.subCategory.map((elem) => {
                              return (
                                <li>
                                  <input type="radio" name="category" />
                                  <label>{elem.name}</label>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                    );
                  })}
                </ul>

                <Typography>Tags</Typography>
                <TextField />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AddProduct;
