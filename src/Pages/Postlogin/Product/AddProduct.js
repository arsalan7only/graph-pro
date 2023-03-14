import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
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
import JoditEditorComp from "../../../Components/JoditEditorComp";
import "./AddProduct.css";
import ImageModel from "../../../Components/ImageModel";
const AddProduct = () => {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("");
  const [open, setOpen] = React.useState(false);

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

  const handleClickOpen = () => {
    setOpen(true);
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
      <div className="Add_product_container">
        <Grid container spacing={4} sx={{ mt: 0.1 }}>
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

            <Card sx={{ mt: 3 }}>
              <CardContent>
                <Typography>Media</Typography>
                <Button variant="contained" onClick={handleClickOpen}>
                  Upload Media
                </Button>
                <ImageModel open={open} setOpen={setOpen} />
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

            <Card sx={{ mt: 3 }}>
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

        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography>Product Information</Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>SKU</Typography>
                <TextField label="SKU" />
              </Grid>
              <Grid item xs={3}>
                <Typography>Model Number</Typography>
                <TextField label="Model Number" />
              </Grid>
              <Grid item xs={3}>
                <Typography>Product Quantity</Typography>
                <TextField label="Product Quantity" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography>Pricing</Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>Best Price</Typography>
                <TextField label="Best Price" />
              </Grid>
              <Grid item xs={3}>
                <Typography>Original Price</Typography>
                <TextField label="Original Price" />
              </Grid>
              <Grid item xs={3}>
                <Typography>Selling Price</Typography>
                <TextField label="Selling Price" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography>Shopping Information</Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>Shipping Charges</Typography>
                <TextField label="Best Price" />
              </Grid>
              <Grid item xs={3}>
                <Typography>Product Weight</Typography>
                <TextField label="Original Price" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography>Tax Information</Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>Tax Amount</Typography>
                <TextField label="Tax Amount" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography>SEO</Typography>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <label>Meta Tags</label>
                <TextField label="Meta Tags" />
              </Grid>
              <Grid item xs={12}>
                <label>Description</label>
                <TextField label="Description" />
              </Grid>
              <Grid item xs={12}>
                <label>Keyword</label>
                <TextField label="Keyword" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Paper sx={{ mt: 3 }}>
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
                    <TextField />
                  </TableCell>
                  <TableCell>
                    <TextField />
                  </TableCell>
                  <TableCell>
                    <Button variant="outlined" color="error">
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button variant="contained">Add</Button>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
};

export default AddProduct;
