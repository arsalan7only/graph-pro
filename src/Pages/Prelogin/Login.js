import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import LoginImage from "../../Assets/Image/admin_panel7.jpg";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { userLogin } from "../../Redux/Actions/useAction";
import { useDispatch } from "react-redux";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLogin = async () => {
    const payload = {
      username: username,
      password: password,
    };

    dispatch(userLogin(payload));
  };

  return (
    <div className="dv">
      <Grid container className="container">
        <Grid item xs={6} className="grid1">
          <img src={LoginImage} />
        </Grid>
        <Grid item xs={6} className="grid2">
          <div className="dv2">
            {" "}
            <br />
            <br />
            <h1 className="heading">Login</h1>
            <br /> <br /> <br />
            <br />
            <TextField
              id="standard-number"
              label="Number or Email"
              type="number,email"
              autoComplete="current-password"
              variant="standard"
              onChange={(e) => setUserName(e.target.value)}
            />{" "}
            <br /> <br />
            {/* <FormControl
              fullWidth
              sx={{ m: 1 }}
              variant="standard"
            ></FormControl> */}
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <br />
            <br /> <br />
            <Button variant="contained" color="primary" onClick={handleLogin}>
              Login
            </Button>
            <br /> <br /> <br />
            <h4>
              {" "}
              <a href=""> Forgot Password ? </a>{" "}
            </h4>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
