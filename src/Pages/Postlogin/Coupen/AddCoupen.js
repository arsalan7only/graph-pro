import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import "../Category/AddCategory.css";
import moment from "moment/moment";
const AddCoupen = () => {
  const [data, setData] = useState(
    moment(new Date()).format("YYYY-MM-DD[T]HH:mm:ss")
  );

  const handleStartData = (e) => {
    const changeData = moment(new Date(e.target.value)).format(
      "YYYY-MM-DD[T]HH:mm:ss"
    );
    setData(changeData);
  };
  return (
    <div className="Product_main_container">
      <div className="Product_Top_Add_container">
        <div>
          <h3>Add Coupen</h3>
        </div>
      </div>
      {/* Top Nav End */}
      <Card sx={{ width: 800 }}>
        <CardContent>
          <div>
            <div className="sub_container">
              <Typography>Coupen Code</Typography>
              <TextField variant="outlined" label="Enter Add Coupen Code" />
            </div>
            <div className="sub_container">
              <Typography>Select Discount</Typography>
              <FormGroup>
                <label>Percentage</label>{" "}
                <FormControlLabel control={<Switch />} label="flat" />
              </FormGroup>
            </div>
            <div className="sub_container">
              <Typography>Coupen Price </Typography>
              <TextField variant="outlined" label="Enter Add Coupen Price" />
            </div>

            <div className="sub_container">
              <div>
                <Typography>Start Date</Typography>
                <TextField
                  variant="outlined"
                  type="datetime-local"
                  value={data}
                  onChange={handleStartData}
                />
              </div>
              <div>
                <Typography>End Date</Typography>
                <TextField
                  variant="outlined"
                  type="datetime-local"
                  min={data}
                />
              </div>
            </div>
          </div>
          <Button variant="contained" color="success">
            Add Customer
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCoupen;
