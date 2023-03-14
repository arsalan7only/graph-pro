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
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ImageModel from "../../../Components/ImageModel";
import JoditEditorComp from "../../../Components/JoditEditorComp";
import { addProduct } from "../../../Redux/Actions/customerAction";

import "./AddProduct.css";

const AddProduct = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState("");
  const [Status, setStatus] = useState("");
  const [titleData, setTitleData] = useState("");
  const [productinfoData, setProductinfoData] = useState({});
  const [priceData, setPriceData] = useState({});
  const [shipingData, setShipingData] = useState({});
  const [taxInforData,setTaxInfoData] = useState({})
  const [seoData,setSeoData]= useState({})

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

  const handleAddProduct = () => {
    const payload = {
      title: titleData,
      productinformation: productinfoData,
      price: priceData,
      shoppinginformation: shipingData,
      taxinformation: taxInforData,
      seo: seoData,

    };
    console.log(payload);
    dispatch(addProduct(payload));

    setTitleData("");
    setProductinfoData({
      sku: "",
      modelnumber: "",
      productquantity: "",
    });
    setPriceData({
      bestprice: "",
      originalprice: "",
      sellingprice: "",
    });
    setShipingData({
      shippingcharges: "",
      productweight: "",
    });
    setTaxInfoData({
      taxamount:""
    })
    setSeoData({
      metatag:"",
      discription:"",
      keyword:"",
    })
  };

  return (
    <div className="Product_main_Container">
      <div className="Product_Top_Add_container">
        <div>
          <h3>Product</h3>
        </div>
        <div className="Product-Top-button">
          <Button
            variant="contained"
            color="success"
            onClick={handleAddProduct}
          >
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
                      <li key={index}>
                        <span
                          onClick={() => handleExpendChange(index, item.expend)}
                        >
                          {" "}
                          {item.expend ? "-" : "+"} {item.name}
                        </span>
                        <ul>
                          {item.expend &&
                            item.subCategory.map((elem, index) => {
                              return (
                                <li key={index}>
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
                  onChange={(e) =>
                    setProductinfoData({
                      ...productinfoData,
                      sku: e.target.value,
                    })
                  }
                  value={productinfoData.sku}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography>Model Number</Typography>
                <TextField
                  variant="outlined"
                  label="Model Number"
                  value={productinfoData.modelnumber}
                  onChange={(e) =>
                    setProductinfoData({
                      ...productinfoData,
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
                  value={productinfoData.productquantity}
                  onChange={(e) =>
                    setProductinfoData({
                      ...productinfoData,
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
                <Typography>BestPrice</Typography>
                <TextField
                  variant="outlined"
                  value={priceData.bestprice}
                  name="bestprice"
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
                  name="originalprice"
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
                  name="sellingprice"
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
                  value={shipingData.shippingcharges}
                  onChange={(e) =>
                    setShipingData({
                      ...shipingData,
                      shippingcharges: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <Typography>Product Weight</Typography>
                <TextField
                  variant="outlined"
                  value={shipingData.productweight}
                  onChange={(e) =>
                    setShipingData({
                      ...shipingData,
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
                <TextField variant="outlined" value={taxInforData.taxamount}
                onChange={(e)=>setTaxInfoData({...taxInforData,taxamount:e.target.value})} />
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
                <TextField variant="outlined"  value={seoData.metatag}  
                onChange={(e)=> setSeoData({...seoData,metatag:e.target.value})} />
              </Grid>

              <Grid item xs={6}></Grid>
              <Grid item xs={3}>
                <Typography>Description</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField variant="outlined"  value={seoData.discription}  
                onChange={(e)=> setSeoData({...seoData,discription:e.target.value})} />
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={3}>
                <Typography>Keyword</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField variant="outlined" value={seoData.keyword}  
                onChange={(e)=> setSeoData({...seoData, keyword:e.target.value})} />
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
