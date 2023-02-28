
import { Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import JoditEditorComp from "../../../Components/JoditEditorComp"
import "./AddProduct.css"

const AddProduct = () => {

    const [value, setValue] = useState('')
    const [status, setStatus] = useState("")
    const [catagory, setCatagory] = useState([
        {
            name: "Accessories",
            expend: false,
            subCatagory: [
                {
                    name: "Wallet"
                },
                {
                    name: "Perfume"
                },
            ],
        },
        {
            name: "Mens",
            expend: true,
            subCatagory: [
                {
                    name: "Formal Sirt"
                },
                { name: "Top Wear" },
                { name: "Bottom Wear" },
            ],
        },
    ]);

    const config = {
        readonly: false,
        placeholder: 'Start typings...',
    }
    const handleExpendChange = (index, PreExpend) => {

        const changeData = catagory.map((item, ind) => {
            if (index == ind) {
                return {
                    ...item, expend: !PreExpend,
                }
            }
            else {
                return {
                    ...item,
                    expend: false
                }
            }
        })
        setCatagory(changeData)
    }





    return (
        <div className="Product_main_Container">

            <div className="Product_Top_Add_Container">
                <div>
                    <h1>Product</h1>
                </div>
                <div className="Product_Top_Button">

                    <Button variant="contained" color="success">ADD PRODUCT</Button>
                </div>
            </div>
            {/* {Top container closed} */}

            <div className="Add_Product_Container">
                <Grid container spacing={4} sx={{mt:0.1}} >
                    <Grid item xs={8}>
                        <Card  >
                            <CardContent>
                                <TextField label="Title" variant="outlined" />
                                <Typography>Short Product Description</Typography>
                                <JoditEditorComp
                                    setValue={setValue}
                                    value={value}
                                    config={config} />
                                <Typography>Long Product Description</Typography>
                                <JoditEditorComp
                                    setValue={setValue}
                                    value={value}
                                    config={config} />
                            </CardContent>
                        </Card>
                        <Card sx={{mt :3}}>
                            <CardContent>
                                <Typography>Media</Typography>
                                <Button variant="contained"> Upload Media</Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <CardContent>
                                <FormControl sx={{ width: 200 }} >
                                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={status}
                                        label="status"
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <MenuItem value={1}>Active</MenuItem>
                                        <MenuItem value={0}>Inavtive</MenuItem>

                                    </Select>
                                </FormControl>
                            </CardContent>
                        </Card>

                        <Card sx={{mt: 3}}>
                            <CardContent>
                                <Typography>Product Catagory</Typography>
                                <ul>
                                    {catagory.map((item, index) => {
                                        return (
                                            <li>
                                                <span
                                                    onClick={() => { handleExpendChange(index, item.expend) }}
                                                > {item.expend ? "-" : "+"} {item.name}</span>
                                                <ul>
                                                    {item.expend && item.subCatagory.map((elem) => {
                                                        return (
                                                            <li>
                                                                <input type="radio" name="category" />
                                                                <label>{elem.name}</label>
                                                            </li>
                                                        )
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
                        <Typography>Product Information</Typography>
                        <Grid container spacing={4}>
                            <Grid item xs={3}>
                                <Typography>Sku</Typography>
                                <TextField variant="outlined" label="SKU"></TextField>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>Model Number</Typography>
                                <TextField variant="outlined" label="Model Number"></TextField>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>Quantity</Typography>
                                <TextField variant="outlined" label="Quantity"></TextField>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

                <Card sx={{mt:3}}> 
                    <CardContent>
                        <Typography>Pricing</Typography>
                        <Grid container spacing={4}>
                            <Grid item xs={3}>
                                <Typography>Bace Price</Typography>
                                <TextField variant="outlined" label="Bace Price"></TextField>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>Original Price</Typography>
                                <TextField variant="outlined" label="Original Price"></TextField>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>Selling Price</Typography>
                                <TextField variant="outlined" label="Selling Price"></TextField>
                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>

                <Card sx={{mt:3}}>
                    <CardContent>
                        <Typography>Shiping Information</Typography>
                        <Grid container spacing={4}>
                            <Grid item xs={3}>
                                <Typography>Shiping Changes</Typography>
                                <TextField variant="outlined" label="Shiping Price"></TextField>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>Product Weight</Typography>
                                <TextField variant="outlined" label="Product Weight"></TextField>
                            </Grid>


                        </Grid>
                    </CardContent>
                </Card>

                <Card sx={{mt:3}}>
                    <CardContent>
                        <Typography>Tax Inforcement</Typography>
                        <Grid container spacing={4}>
                            <Grid item xs={3}>
                                <Typography>Tax Amount</Typography>
                                <TextField variant="outlined" label="Tax Amount"></TextField>
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
                                <TextField variant="outlined" label="Meta Tgs" />

                            </Grid>

                            <Grid item xs={6}></Grid>
                            <Grid item xs={3}>
                                <Typography>Description</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <TextField variant="outlined" label="Description" />
                            </Grid>
                            <Grid item xs={6}></Grid>
                            <Grid item xs={3}>
                                <Typography>Keyword</Typography>

                            </Grid>
                            <Grid item xs={3}>
                                <TextField variant="outlined" label="Keyword" />
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
