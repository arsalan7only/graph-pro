import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./AddCoupenCode.css";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import moment from "moment/moment";

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
  //!{useStates Starts}//
  const [date, setDate] = useState(
    moment(new Date()).format("YYYY-MM-DD[T]HH:mm:ss")
  );
  //!{Functions Starts}//
  const handleStartDate = (e) => {
    const changeData = moment(new Date(e.target.value)).format(
      "YYYY-MM-DD[T]HH:mm:ss"
    );
    setDate(changeData);
  };
  return (
    <div className="product_main_container01">
      <div className="Product_Top_Add_container01">
        <div>
          <h2 style={{ marginBottom: 20 }}>Add Coupen Code</h2>
        </div>
      </div>
      <div>
        <Card>
          <CardContent>
            <div className="sub_container">
              <Typography>Coupen Code</Typography>
              <TextField variant="outlined" label="Add Coupen Code" />
            </div>
            <div className="sub_container">
              <Typography>Select Discount</Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Percentage</Typography>
                <AntSwitch
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                />
                <Typography>Flat</Typography>
              </Stack>
            </div>
            <div className="sub_container">
              <Typography>Coupen Code</Typography>
              <TextField variant="outlined" label="Add Coupen Price" />
            </div>
            <div className="sub_container">
              <Typography>Start Date</Typography>
              <TextField
                variant="outlined"
                type="datetime-local"
                value={date}
                onChange={handleStartDate}
              />
            </div>
            <div className="sub_container">
              <Typography>End Date</Typography>
              <TextField
                variant="outlined"
                type="datetime-local"
                value={date}
              />
            </div>
            <Button variant="contained" sx={{ borderRadius: "50px" }}>
              Add
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddCoupenCode;
