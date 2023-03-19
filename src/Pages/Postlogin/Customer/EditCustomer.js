import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Toaster from "../../../Components/Toaster";
import {
  addEditCustomer,
  getEditCustomer,
} from "../../../Redux/Actions/customerAction";
import "./AddCustomer.css";

const EditCustomer = () => {
  //!{useDispatch Starts}//
  const dispatch = useDispatch();

  //!{useNavigate}//
  const navigate = useNavigate();

  //!{useParams Starts}
  const param = useParams();
  const id = param.id;

  //!{useStates Starts}//
  const [customerData, setCustomerData] = useState({});

  //!{Functions Starts}//
  const handleSubmit = async () => {
    const res = await dispatch(addEditCustomer(id, customerData));
    console.log("res", res);
    if (res.status == 200) {
      Toaster(true, res.data.message);
      navigate("/costomer/costomerList");
    }
    setCustomerData({
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      gender: "",
    });
  };
  const fetch = async () => {
    const res = await dispatch(getEditCustomer(id));
    if (res.data.length > 0) {
      setCustomerData(res.data[0]);
    }
    console.log(res);
  };

  //!{useEffects Starts}//
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <div>
        <div>
          <h2 style={{ marginBottom: 20 }}>Edit Customer</h2>
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
            Save Customer
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditCustomer;
