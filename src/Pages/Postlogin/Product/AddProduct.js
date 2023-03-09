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
import { addproduct } from "../../../Redux/Actions/customerAction";
import "./AddProduct.css";

const AddProduct = () => {
  //{useDispatch}//
  const dispatch = useDispatch();
  //{useStates}//
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);
  const [titleData, setTitletData] = useState("");
  const [productInfoData, setProductInfoData] = useState({});
  const [pricingData, setPricingData] = useState({});
  const [shippingInfoData, setShippingInfoData] = useState({});
  const [taxInfoData, setTaxInfoData] = useState({});
  const [seoData, setSeoData] = useState({});
  const [category, setCategory] = useState([
    {
      name: "Accessories",
      expend: false,
      subCategory: [
        {
          name: "Wallets",
        },
        { name: "Perfumes" },
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
  //{Functions}//
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
  const handleSubmit = () => {
    dispatch(
      addproduct({
        title: titleData,
        productinformation: productInfoData,
        pricing: pricingData,
        shippinginformation: shippingInfoData,
        taxinformation: taxInfoData,
        seo: seoData,
      })
    );
    setTitletData("");
    setProductInfoData({
      sku: "",
      modelnumber: "",
      productquantity: "",
    });
    setPricingData({
      baseprice: "",
      originalprice: "",
      sellingprice: "",
    });
    setShippingInfoData({
      shippingcharges: "",
      productweight: "",
    });
    setTaxInfoData({
      taxamount: "",
    });
    setSeoData({
      metatags: "",
      description: "",
      keywords: "",
    });
  };
  return (
    <div className="product_main_container0">
      <div className="Product_Top_Add_container0">
        <div>
          <h2>Add Product</h2>
        </div>
        <div className="Product-Top-button0">
          <Button
            variant="contained"
            sx={{ borderRadius: 50, backgroundColor: "#4B49AC" }}
            onClick={handleSubmit}
          >
            Add Product
          </Button>
        </div>
      </div>
      {/* Top Container Closed */}
      <div className="Add_product-container0">
        <Grid container spacing={4} sx={{ mt: 0.1 }}>
          <Grid item xs={8}>
            <Card>
              <CardContent>
                <TextField
                  label="Title"
                  variant="outlined"
                  value={titleData}
                  onChange={(e) => setTitletData(e.target.value)}
                />
                <Typography sx={{ fontSize: 25, mb: 2, mt: 5 }}>
                  Short Product Description
                </Typography>
                <JoditEditorComp
                  setValue={setValue}
                  value={value}
                  config={config}
                />
                <Typography sx={{ fontSize: 25, mb: 2, mt: 5 }}>
                  Long Product Description
                </Typography>
                <JoditEditorComp
                  setValue={setValue}
                  value={value}
                  config={config}
                />
              </CardContent>
            </Card>
            <Card sx={{ mt: 3, height: 400 }}>
              <CardContent>
                <Typography sx={{ fontSize: 25, ml: 45, mt: 18 }}>
                  Media
                </Typography>
                <div className="button">
                  <Button
                    variant="contained"
                    sx={{ borderRadius: 50 }}
                    onClick={handleClickOpen}
                  >
                    Upload Media
                  </Button>
                  <ImageModel open={open} setOpen={setOpen} />
                </div>
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
                <Typography sx={{ fontSize: 25, mb: 2 }}>
                  Product Category
                </Typography>
                <ul>
                  {category.map((item, index) => {
                    return (
                      <li>
                        <span
                          onClick={() => handleExpendChange(index, item.expend)}
                        >
                          {item.expend ? "-" : "+"}
                          {item.name}
                        </span>
                        <ul>
                          {item.expend &&
                            item.subCategory.map((elem) => {
                              return (
                                <li>
                                  <input type="radio" name="cat" />
                                  <label>{elem.name}</label>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
                <Typography sx={{ fontSize: 25, mt: 5, mb: 2 }}>
                  Tags
                </Typography>
                <TextField />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 25, mb: 2 }}>
              Product Information
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>SKU</Typography>
                <TextField
                  variant="outlined"
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
                <Typography>Model Name</Typography>
                <TextField
                  variant="outlined"
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
                <Typography>Product Quality</Typography>
                <TextField
                  variant="outlined"
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
            <Typography sx={{ fontSize: 25, mb: 2 }}>Pricing</Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>Base Price</Typography>
                <TextField
                  variant="outlined"
                  value={pricingData.baseprice}
                  onChange={(e) =>
                    setPricingData({
                      ...pricingData,
                      baseprice: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <Typography>Original Price</Typography>
                <TextField
                  variant="outlined"
                  value={pricingData.originalprice}
                  onChange={(e) =>
                    setPricingData({
                      ...pricingData,
                      originalprice: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <Typography>Selling Price</Typography>
                <TextField
                  variant="outlined"
                  value={pricingData.sellingprice}
                  onChange={(e) =>
                    setPricingData({
                      ...pricingData,
                      sellingprice: e.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 25, mb: 2 }}>
              Shipping Information
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>Shipping Changes</Typography>
                <TextField
                  variant="outlined"
                  value={shippingInfoData.shippingcharges}
                  onChange={(e) =>
                    setShippingInfoData({
                      ...shippingInfoData,
                      shippingcharges: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <Typography>Product Weight</Typography>
                <TextField
                  variant="outlined"
                  value={shippingInfoData.productweight}
                  onChange={(e) =>
                    setShippingInfoData({
                      ...shippingInfoData,
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
            <Typography sx={{ fontSize: 25, mb: 2 }}>
              Tax Information
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>Tax Amount</Typography>
                <TextField
                  variant="outlined"
                  value={taxInfoData.taxamount}
                  onChange={(e) =>
                    setTaxInfoData({
                      ...taxInfoData,
                      taxamount: e.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 25, mb: 2 }}>SEO</Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>Meta Tags</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  variant="outlined"
                  label="Meta Tags"
                  value={seoData.metatags}
                  onChange={(e) =>
                    setSeoData({ ...seoData, metatags: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={6}></Grid>

              <Grid item xs={3}>
                <Typography>Description</Typography>{" "}
              </Grid>
              <Grid item xs={3}>
                <TextField
                  variant="outlined"
                  label="Description"
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
                  label="Keyword"
                  value={seoData.keywords}
                  onChange={(e) =>
                    setSeoData({ ...seoData, keywords: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={6}></Grid>
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
                    <Button
                      variant="outlined"
                      color="error"
                      sx={{ borderRadius: 50 }}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button
              variant="contained"
              sx={{ borderRadius: 50, mt: 1, ml: 1, mb: 1 }}
            >
              Add
            </Button>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
};

export default AddProduct;
