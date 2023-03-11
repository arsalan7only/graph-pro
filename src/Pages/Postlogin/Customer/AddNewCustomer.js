import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../../../Redux/Actions/customerAction";

const AddNewCustomer = () => {
  const dispatch=useDispatch();
  const [customerData,setCustomerData]=useState({})
const handleSubmit=async()=>{
  dispatch(addCustomer(customerData));
  setCustomerData({
    fname:'',
    lname:'',
    email:'',
    mobile:'',
    gender:'',

  })
 
}


  return (
    <div className="Product_main_container1g">
      <div className="Product_Top_Add_container1g">
        <div>
          <h3>Add New Customer </h3>
        </div>
      </div>
      <Card>
        <CardContent>
          <Typography>Customer Details</Typography>
          <div className="sub_container">
            <Typography>First Name</Typography>
            <TextField variant="outlined" label="First Name"  
            value={customerData.fname}
            onChange={(e)=>setCustomerData({...customerData, fname:e.target.value})}/>
          </div>
          <div className="sub_container"> 
            <Typography>Last Name</Typography>
            <TextField variant="outlined" label="Last Name" 
             value={customerData.lname}
             onChange={(e)=>setCustomerData({...customerData, lname:e.target.value})}/>
          </div>
          <div className="sub_container">
            <Typography>Email</Typography>
            <TextField variant="outlined" label="Email" 
             value={customerData.email}
             onChange={(e)=>setCustomerData({...customerData, email:e.target.value})}/>
          </div>
          <div className="sub_container">
            <Typography>Mobile Number</Typography>
            <TextField variant="outlined" label="Mobile Number" 
             value={customerData.mobile}
             onChange={(e)=>setCustomerData({...customerData, mobile:e.target.value})}/>
          </div>
          <div className="sub_container">
            <Typography>Gender</Typography>
            <div>
              <input type ="radio" name="gender" 
               value= "male"
               checked={customerData.gender=='male'}
               onChange={(e)=>setCustomerData({...customerData, gender: e.target.value})}/>
              <label>Male</label>
              
              <input type ="radio" name="gender"
              value= "female"
              checked={customerData.gender=='female'}
               onChange={(e)=>setCustomerData({...customerData, gender: e.target.value})}/>
              <label>female</label>
              
              <input type ="radio" name="gender" 
               value= "other"
               checked={customerData.gender=='other'}
               onChange={(e)=>setCustomerData({...customerData, gender: e.target.value})}/>
              <label>Other</label>
              
            </div>
          </div>
          <Button variant="contained" onClick={handleSubmit}>Add Customer</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddNewCustomer;
