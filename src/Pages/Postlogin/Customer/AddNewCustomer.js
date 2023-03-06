import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../../../Redux/Actions/cutomerAction";

const AddNewCustomer = () => {
  const dispatch = useDispatch();
  const [customerData, setCustomerData] = useState({});
  const [fnameerror, setFnameError] = useState("");
  const [lnameerror, setLnameError] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [mobileerror, setMobileError] = useState("");

  const handleSubmit = async () => {
    dispatch(addCustomer(customerData));
    const regFname=/^[A-Za-z][A-Za-z0-9_]{2,6}$/g
    const reglname=/^[A-Za-z][A-Za-z0-9_]{2,6}$/g
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const regMobile= /^\d{10}$/g
    
    if (!regFname.test(customerData.fname) && customerData.fname !== "") {
      setFnameError("Provide Valid Name");
    } 
    if (!reglname.test(customerData.lname) && customerData.lname !== "") {
      setLnameError("Provide Valid Name");
    } 
    if (!regEx.test(customerData.email) && customerData.email !== "") {
      setEmailError("Provide Valid Email");
    }
    if (!regMobile.test(customerData.mobile) && customerData.mobile !== "") {
      setMobileError("Please Enter 10 Digit Mobile Numbuer");
    }

    setCustomerData({
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      gender: "",
    });
  };
  return (
    <div className="Product_main_container1g">
      <div className="Product_Top_Add_container1g">
        <div>
          <h3>Add C </h3>
        </div>
      </div>
      <Card>
        <CardContent>
          <Typography>Customer Details</Typography>
          <div className="sub_container">
            <Typography>First Name</Typography>
            <TextField
              variant="outlined"
              label="First Name"
              value={customerData.fname}
              onChange={(e) =>
                setCustomerData({ ...customerData, fname: e.target.value })
              }
            />
          </div>
          <div> <span
             style={{ color: "red" }}> {fnameerror}</span>
          </div>
          <div className="sub_container">
            <Typography>Last Name</Typography>
            <TextField
              variant="outlined"
              label="Last Name"
              value={customerData.lname}
              onChange={(e) =>
                setCustomerData({ ...customerData, lname: e.target.value })
              }
            />
          </div>
          <div> <span
             style={{ color: "red" }}> {lnameerror}</span>
          </div>
          <div className="sub_container">
            <Typography>Email</Typography>
            <TextField
              variant="outlined"
              label="Email"
              value={customerData.email}
              onChange={(e) =>
                setCustomerData({ ...customerData, email: e.target.value })
              }
            />
          </div>
          <div> <span
             style={{ color: "red" }}> {emailerror}</span>
          </div>
          <div className="sub_container">
            <Typography>Mobile Number</Typography>
            <TextField
              variant="outlined"
              label="Mobile Number"
              value={customerData.mobile}
              onChange={(e) =>
                setCustomerData({ ...customerData, mobile: e.target.value })
              }
            />
          </div>
          <div> <span
             style={{ color: "red" }}> {mobileerror}</span>
          </div>
          <div className="sub_container">
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
              <label>Male</label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={customerData.gender == "female"}
                onChange={(e) =>
                  setCustomerData({ ...customerData, gender: e.target.value })
                }
              />
              <label>Female</label>
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

          <Button variant="contained" onClick={handleSubmit}>
            Add Customer
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddNewCustomer;
