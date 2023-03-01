import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./AddCustomer.css"

const AddCustomer = () => {
  return (
    <div>
      <div>
        <div>
          <h2>Add New Customer</h2>
        </div>
      </div>
      {/* TOP NAV CONTAINER ENDS*/}
      <Card>
        <CardContent>
          <Typography>Customer Details</Typography>
          <div className="sub_container11">
            <Typography>First Name</Typography>
            <TextField variant="outlined" label="Enter First Name" />
          </div>
          <div className="sub_container11">
            <Typography>Last Name</Typography>
            <TextField variant="outlined" label="Enter Last Name" />
          </div>
          <div className="sub_container11">
            <Typography>E-Mail</Typography>
            <TextField variant="outlined" label="Enter E-Mail" />
          </div>
          <div className="sub_container11">
            <Typography>Mobile Number</Typography>
            <TextField variant="outlined" label="Enter Mobile Number" />
          </div>
          <Button variant="contained">Add Customer</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCustomer;
