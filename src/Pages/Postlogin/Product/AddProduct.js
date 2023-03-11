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
import { width } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ImageModel from "../../../Components/ImageModel";
import JoditEditorComp from "../../../Components/JoditEditorComp";
import { addProduct } from "../../../Redux/Actions/customerAction";
import "./AddProduct.css";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [titleData, setTitleData] = useState("");
  const [productInfoData, setProductInfoData] = useState({});
  const [priceData, setPriceData] = useState({});
  const [shoppingData, setShoppingData] = useState({});
  const [texinfoData, setTexInfoData] = useState({});
  const [seoData, setSeoData] = useState({});

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState("");
  const [Status, setStatus] = useState("");
  const [category, setCategory] = useState([
    {
      name: "Accessories",
      expend: false,
      subCategory: [
        {
          name: "Wallets",
        },
        { name: "Perfume" },
      ],
    },
    {
      name: "Mens",
      expend: true,
      subCategory: [
        {
          name: "Formal shirts",
        },
        { name: "Botton Wear" },
      ],
    },
  ]);
  const config = {
    readonly: false,
    placeholder: "Start typings...",
  };
  const handleExpendChange = (index, PreExpend) => {
    const changeData = category.map((item, ind) => {
      if (index === ind) {
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
  const handleSubmit = () => {
    dispatch(
      addProduct({
        title: titleData,
        productinformation: productInfoData,
        price: priceData,
        shoppinginformation: shoppingData,
        texinformation: texinfoData,
        seo: seoData,
      })
    );
    setTitleData("");
    setProductInfoData({
      sku: "",
      modelnumber: "",
      productquantity: "",
      shoppinginformation: "",
      texamout: "",
      seo: "",
    });
    setPriceData({
      bestprice: "",
      originalprice: "",
      sellingprice: "",
    });
    setShoppingData({
      shippingcharges: "",
      productweight: "",
    });
    setTexInfoData({
      texamout: "",
    });
    setSeoData({
      metatag: "",
      description: "",
      keyword: "",
    });
  };
  return (
    <div className="Product_main_Container">
      <div className="Product_Top_Add_container">
        <div>
          <h3>Product</h3>
        </div>
        <div className="Product-Top-button">
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Add Product
          </Button>
        </div>
      </div>
      {/* top container close*/}
      <div className="Add_Product_container">
        <Grid container spacing={4} sx={{ mt: 0.1 }}>
          <Grid item xs={8}>
            <Card>
              <CardContent>
                <TextField
                  label="Title"
                  variant="outlined"
                  value={titleData}
                  onChange={(e) => setTitleData(e.target.value)}
                />
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
                  Upoload Media
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
                    value={Status}
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
                          {" "}
                          {item.expend ? "-" : "+"} {item.name}
                        </span>
                        <ul>
                          {item.expend &&
                            item.subCategory.map((elem) => {
                              return (
                                <li>
                                  <input type="radio" name="category" />
                                  <label> {elem.name}</label>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
                <Typography> Tags</Typography>
                <TextField />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography>Product Informetion</Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>SKU</Typography>
                <TextField
                  variant="outlined"
                  label="SKU"
                  value={productInfoData.sku}
                  onChange={(e) =>
                    setProductInfoData({
                      ...productInfoData,
                      sku: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <Typography>Model Number</Typography>
                <TextField
                  variant="outlined"
                  label="Model Number"
                  value={productInfoData.modelnumber}
                  onChange={(e) =>
                    setProductInfoData({
                      ...productInfoData,
                      modelnumber: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <Typography>Product Quantity</Typography>
                <TextField
                  variant="outlined"
                  label="Product Quantity"
                  value={productInfoData.productquantity}
                  onChange={(e) =>
                    setProductInfoData({
                      ...productInfoData,
                      productquantity: e.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography>Pricing</Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>Base Price</Typography>
                <TextField
                  variant="outlined"
                  value={priceData.bestprice}
                  onChange={(e) =>
                    setPriceData({ ...priceData, bestprice: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <Typography>Original Price</Typography>
                <TextField
                  variant="outlined"
                  value={priceData.originalprice}
                  onChange={(e) =>
                    setPriceData({
                      ...priceData,
                      originalprice: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <Typography>Selling Price</Typography>
                <TextField
                  variant="outlined"
                  value={priceData.sellingprice}
                  onChange={(e) =>
                    setPriceData({ ...priceData, sellingprice: e.target.value })
                  }
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography>Shipping Information</Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>Shipping Changes</Typography>
                <TextField
                  variant="outlined"
                  value={shoppingData.shippingcharges}
                  onChange={(e) =>
                    setShoppingData({
                      ...shoppingData,
                      shippingcharges: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <Typography>Product Weight</Typography>
                <TextField
                  variant="outlined"
                  value={shoppingData.productweight}
                  onChange={(e) =>
                    setShoppingData({
                      ...shoppingData,
                      productweight: e.target.value,
                    })
                  }
                />
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
                <TextField
                  variant="outlined"
                  value={texinfoData.texamout}
                  onChange={(e) =>
                    setTexInfoData({ ...texinfoData, texamout: e.target.value })
                  }
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography>SEO</Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>Meta Tgs</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  variant="outlined"
                  value={seoData.metatag}
                  onChange={(e) =>
                    setSeoData({ ...seoData, metatag: e.target.value })
                  }
                />
              </Grid>

              <Grid item xs={6}></Grid>
              <Grid item xs={3}>
                <Typography>Description</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  variant="outlined"
                  value={seoData.description}
                  onChange={(e) =>
                    setSeoData({ ...seoData, description: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={3}>
                <Typography>Keyword</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  variant="outlined"
                  value={seoData.keyword}
                  h
                  onChange={(e) =>
                    setSeoData({ ...seoData, keyword: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={6}></Grid>
            </Grid>
          </CardContent>
        </Card>
        <Paper sx={{ width: "100%" }}>
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
