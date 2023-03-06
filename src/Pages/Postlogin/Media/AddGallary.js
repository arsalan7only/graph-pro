import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGallary } from "../../../Redux/Actions/customerAction";




const AddGallary = () => {
    const dispatch= useDispatch()
    const [title, setTitle] = useState("")
    const [imagecategory, setImageCategory] = useState("")
    const [imageFile, setImageFile] = useState([])


    const handleAddGallary = () => {

        const formData = new FormData()
        console.log(imageFile);
        formData.append("title",title)
        formData.append("category_image",imagecategory)
        Array.from(imageFile).forEach((item) => {
            formData.append("imageData", item)

        })
    
        dispatch(addGallary(formData))
    }

    return (
        <div className="Product_main_container1g">
            <div className="Product_Top_Add_container1g">
                <div>
                    <h3>Add Gallary</h3>
                </div>
            </div>

            <Card>
                <CardContent>s
                    <div className="sub_container">
                        <Typography>Title</Typography>
                        <TextField label="Add Title" variant="outlined"
                            onChange={(e) => { setTitle(e.target.value) }} />
                    </div>
                    <div className="sub_container">
                        <Typography>Category of Image</Typography>
                        <TextField label="Category" variant="outlined"
                            onChange={(e) => { setImageCategory(e.target.value) }} />
                    </div>
                    <div className="sub_container">
                        <Typography>Upload Image</Typography>
                        <input type="file" onChange={(e) => { setImageFile(e.target.files) }} />
                    </div>
                    <Button variant="contained"
                        onClick={handleAddGallary}>ADD Gallary</Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default AddGallary;
