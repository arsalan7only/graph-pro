import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import JoditEditorComp from "../../../Components/JoditEditorComp";
import "./AddProduct.css";

const AddProduct = () => {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("");
  const [category, setcategory] = useState([
    {
      name: "Accessories",
      expend: false,
      subCategory: [{ name: "Wallets" }, { name: "perfumes" }],
    },
    {
      name: "Mens",
      expend: true,
      subCategory: [
        { name: "Formal Shirts" },

        { name: "Top Wear" },
        { name: "Bottom Waer" },
      ],
    },
  ]);

  const config = {
    readonly: false,
    placeholder: "Start typings...",
  };

  const handleExpendChange = (index, preExpend) => {
    const changeData = category.map((item, ind) => {
      if (index == ind) {
        return {
          ...item,
          expend: !preExpend,
        };
      } else {
        return {
          ...item,
          expend: false,
        };
      }
    });
    setcategory(changeData);
  };

  return (
    <div className="Product_main_container">
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
      <div className="Add_Product_container">
        <Grid container spacing={4} sx={{mt:0.1}}>
          <Grid item xs={8}>
            <Card>
              <CardContent>
                <TextField label="Title" variant="outlined" />
                <Typography> Short Product Decription</Typography>
                <JoditEditorComp
                  setValue={setValue}
                  value={value}
                  config={config}
                />
                <Typography> Long Product Decription</Typography>
                <JoditEditorComp
                  setValue={setValue}
                  value={value}
                  config={config}
                />
              </CardContent>
            </Card>
            <Card sx={{mt:2}}>
              <CardContent>
                <Typography>Media</Typography>
                <Button variant="contained">Upload Media</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card >
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
                    <MenuItem value={1}>Avtive</MenuItem>
                    <MenuItem value={0}>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
            <Card sx={{mt:3}}>
              <CardContent>
                <Typography>Product Category</Typography>
                <ul>
                  {category.map((item, index) => {
                    return (
                
                        <li>
                          <span
                            onClick={() =>
                              handleExpendChange(index, item.expend)
                            }
                          >
                            {item.expend ? "-" : "+"} {item.name}
                          </span>
                          
                        <ul>
                          {item.expend &&
                            item.subCategory.map((elem) => {
                              return (
                                <li>
                                  <input type="radio" name={"select"} />
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
        <Card sx={{mt:3}}>
          <CardContent>
            <Typography>Product Informetion</Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>SKU</Typography>
                <TextField variant="outlined" label="SKU" />
              </Grid>
              <Grid item xs={3}>
                <Typography>Model Number</Typography>
                <TextField variant="outlined" label="Model Number" />
              </Grid>
              <Grid item xs={3}>
                <Typography>Product Quantity</Typography>
                <TextField variant="outlined" label="Product Quantity" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{mt:3}}>
          <CardContent>
            <Typography>Pricing</Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>Base Price</Typography>
                <TextField variant="outlined" />
              </Grid>
              <Grid item xs={3}>
                <Typography>Original Price</Typography>
                <TextField variant="outlined" />
              </Grid>
              <Grid item xs={3}>
                <Typography>Selling Price</Typography>
                <TextField variant="outlined" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{mt:3}}>
          <CardContent>
            <Typography>Shipping Information</Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>Shipping Charges</Typography>
                <TextField variant="outlined" />
              </Grid>
              <Grid item xs={3}>
                <Typography>Product Weight</Typography>
                <TextField variant="outlined" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{mt:3}}>
          <CardContent>
            <Typography>Tax Informetion</Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>Tax Amount</Typography>
                <TextField variant="outlined" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{mt:3}}>
          <CardContent>
            <Typography>SEO</Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>Meta Tags </Typography>
              </Grid>

              <Grid item xs={3}>
                <TextField variant="outlined" />
              </Grid>
              <Grid item xs={6}></Grid>

              <Grid item xs={3}>
                <Typography>Description</Typography>
              </Grid>

              <Grid item xs={3}>
                <TextField variant="outlined" />
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={3}>
                <Typography>Keyword</Typography>
              </Grid>

              <Grid item xs={3}>
                <TextField variant="outlined" />
              </Grid>
              <Grid item xs={6}></Grid>
            </Grid>
          </CardContent>
        </Card>

        <Paper sx={{mt:3}}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Question</TableCell>
                  <TableCell>Answer</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <TextField/>
                  </TableCell>
                  <TableCell>
                    <TextField/>
                  </TableCell>
                  <TableCell>
                    <Button variant="outlined" color="error">Remove</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Button variant="contained" color="success">
            Add
          </Button>
          
        </Paper>
      </div>
    </div>
  );
};

export default AddProduct;
