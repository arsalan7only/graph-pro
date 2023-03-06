import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./AddCategory.css"

const AddCategory = () => {
    const [selectCategory, setSelectCategory] = useState('');

    const handleChange = (e) => {
        setSelectCategory(e.target.value);
    };
    return (

        <div>
            <div className="Product_Top_Container6">

                <div className="Product_TopCatainer">
                    <h1>Add Category </h1>
                </div>


            </div>
            {/* {top eded} */}

            <Card>
                <CardContent>
                    <div className="sub_contained">
                        <Typography>
                            Parent Category
                        </Typography>
                        <FormControl sx={{ width: 200 }} >
                            <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="select_category"
                                value={selectCategory}
                                label="Select Category"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="sub_contained">
                        <Typography>Category Name</Typography>
                        <TextField variant="outlined" label="Category Name"></TextField>
                    </div>

                    <Typography>Product Category Image</Typography>

                    <div>
                        <Typography>Media</Typography>
                        <Button variant="contained">Upload Media</Button>
                    </div>

                    <Typography>Custom Atribute</Typography>
                    <div>

                        <div className="sub_contained">
                            <Typography >Group Name</Typography>
                            <TextField variant="outlined" label="Group Name" />
                        </div>

                        <div className="sub_contained">
                            <Typography >Field Label</Typography>
                            <TextField variant="outlined" label="Field Label" />
                        </div>

                        <div className="sub_contained">
                            <Typography> Field Name</Typography>
                            <TextField variant="outlined" label="Field Name" />
                        </div>

                        <div className="sub_contained">
                            <Typography>Select Box</Typography>
                            <FormControl sx={{ width: 200 }} >
                                <InputLabel id="demo-simple-select-label">Select Box</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="select_category"
                                    value={selectCategory}
                                    label="Select Box"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="sub_contained">
                            <Typography>Field Value</Typography>
                            <TextField variant="outlined" label="Field Value"></TextField>
                        </div>
                        <div className="sub_contained">
                            <Typography>Is_Variant_Key</Typography>
                            <div>
                                <input type="radio" name="y" />
                                <label >y</label>
                                <input type="radio" name="y" />
                                <label >N</label>
                            </div>
                        </div>
                        <Button variant="contained" color="error">Remove</Button>
                        <Button variant="contained" >Add</Button>
                    </div>
                    <Button variant="contained" color="success">Add Category</Button>

                </CardContent>
            </Card>


        </div>

    );
};

export default AddCategory;
