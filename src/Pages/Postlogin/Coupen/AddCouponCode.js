import {
  Button,
  Card,
  CardContent,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import moment from "moment/moment";
import React, { useState } from "react";
import "./AddCouponCode.css";

const label = { inputProps: { "aria-label": "Switch demo" } };

const AddCoupenCode = () => {
    
  const [data, setData] = useState(
    moment(new Date()).format("YYYY-MM-DD[T]HH:mm:ss")
  );

  const handelStartDate = (e) => {
    const changeData = moment(new Date(e.target.value)).format(
      "YYYY-MM-DD[T]HH:mm:ss"
    );
    setData(changeData);
  };
  return (
    <div className="Product_main_container1g">
      <div className="Product_Top_Add_container1g">
        <div>
          <h3>Add Coupen Code</h3>
        </div>
      </div>
      <Card>
        <CardContent>
          <div className="sub_container">
            <Typography>Customer Code</Typography>
            <TextField variant="outlined" label="First Name" />
          </div>

          <div className="sub_container">
            <Typography>Select Discount</Typography>
            <Typography>Percentage</Typography>
            <Switch {...label} />
            <Typography>Flat</Typography>
          </div>

          <div className="sub_container">
            <Typography>Coupon Price</Typography>
            <TextField variant="outlined" label="Email" />
          </div>

          <div className="sub_container">
            <Typography>Start Date</Typography>
            <TextField
              type="datetime-local"
              value={data}
              onChange={handelStartDate}
            ></TextField>
          </div>
          <div className="sub_container">
            <Typography>End Date</Typography>
            <TextField type="datetime-local"></TextField>
          </div>
          <Button variant="contained">Add Coupen</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCoupenCode;
