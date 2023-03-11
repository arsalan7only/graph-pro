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
import "./AddCustomer.css";

const AddCustomer = () => {
  //!{useDispatch Starts}//
  const dispatch = useDispatch();

  //!{useStates Starts}//
  const [customerData, setCustomerData] = useState({});

  //!{Functions Starts}//
  const handleSubmit = async () => {
    dispatch(addCustomer(customerData));
    setCustomerData({
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      gender: "",
    });
  };
  return (
    <div>
      <div>
        <div>
          <h2 style={{ color: "gray", marginBottom: 20 }}>Add New Customer</h2>
        </div>
      </div>
      {/* TOP NAV CONTAINER ENDS*/}
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 25 }}>Customer Details</Typography>
          <div className="sub_container11">
            <Typography>First Name</Typography>
            <TextField
              variant="outlined"
              label="Enter First Name"
              value={customerData.fname}
              onChange={(e) =>
                setCustomerData({ ...customerData, fname: e.target.value })
              }
            />
          </div>
          <div className="sub_container11">
            <Typography>Last Name</Typography>
            <TextField
              variant="outlined"
              label="Enter Last Name"
              value={customerData.lname}
              onChange={(e) =>
                setCustomerData({ ...customerData, lname: e.target.value })
              }
            />
          </div>
          <div className="sub_container11">
            <Typography>E-Mail</Typography>
            <TextField
              variant="outlined"
              label="Enter E-Mail"
              value={customerData.email}
              onChange={(e) =>
                setCustomerData({ ...customerData, email: e.target.value })
              }
            />
          </div>
          <div className="sub_container11">
            <Typography>Mobile Number</Typography>
            <TextField
              variant="outlined"
              label="Enter Mobile Number"
              style={{ marginRight: "25px" }}
              value={customerData.mobile}
              onChange={(e) =>
                setCustomerData({ ...customerData, mobile: e.target.value })
              }
            />
          </div>
          <div className="sub_container11">
            <Typography>Gender</Typography>
            <div>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={customerData.gender == "male"}
                onChange={(e) =>
                  setCustomerData({ ...customerData, gender: e.target.value })
                }
              />
              <label>Male</label>{" "}
              <input
                type="radio"
                name="gender"
                value="female"
                checked={customerData.gender == "female"}
                onChange={(e) =>
                  setCustomerData({ ...customerData, gender: e.target.value })
                }
              />
              <label>Female</label>{" "}
              <input
                type="radio"
                name="gender"
                value="other"
                checked={customerData.gender == "other"}
                onChange={(e) =>
                  setCustomerData({ ...customerData, gender: e.target.value })
                }
              />
              <label>Other</label>
            </div>
          </div>
          <Button
            variant="contained"
            sx={{ borderRadius: "50px" }}
            onClick={handleSubmit}
          >
            Add Customer
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCustomer;
