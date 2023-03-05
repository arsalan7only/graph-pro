import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import "./AddCoupenCode.css";

const AddCoupenCode = () => {
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));
  return (
    <div className="Product_main_container1g">
      <div className="Product_Top_Add_container1g">
        <div>
          <h3>Add Coupon Code </h3>
        </div>
      </div>
      <Card>
        <CardContent>
          <div className="sub_container">
            <Typography>Coupon Code</Typography>
            <TextField variant="outlined" label="Enter Add Coupon Code" sx={{ml:2}}/>
          </div>
          <div className="sub_container">
            <Typography sx={{mr:6}}>Select Discount</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography sx={{ml:4}}>Percent</Typography>
              <AntSwitch
                defaultChecked
                inputProps={{ "aria-label": "ant design" }}
              />
              <Typography>Flat</Typography>
            </Stack>
          </div>

          <div className="sub_container">
            <Typography>Coupon Price</Typography>
            <TextField variant="outlined" label="Enter Add Coupon Price"  sx={{ml:2}}/>
          </div>

          <div className="sub_container">
            <Typography> start Date</Typography>

            <Typography> End Date</Typography>
          </div>
          <div >
            <TextField type="datetime-local" />
            <TextField type="datetime-local" sx={{ml:2}}/>
          </div>

          <Button variant="contained" className="Customer">
            Add Customer
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCoupenCode;
