import { Button, Grid, Link, TextField } from "@mui/material";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { userLogin } from "../../Redux/Actions/UserAction";
import { useDispatch } from "react-redux";
import i from "../../Assets/Image/logo1.png";
import "./Login.css";
import EmailIcon from "@mui/icons-material/Email";

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
    <div style={{ backgroundColor: "darkslateblue", height: 713  }}>
        <h1
        style={{color:"white" , display:"flex", justifyContent:"center"}}
        
        >E-COMMERCE Admin Panal</h1>
        <p style={{color:"white", display:"flex", justifyContent:"center"}}>Made with ♥ by Developer KHUZI</p>
      <Grid container>
        <img src={i} style={{ width: 700, marginLeft: 100, marginTop: 60 }} />
        <div className="form">
          <p id="p">Sign in</p>
          <TextField
            variant="outlined"
            label="Username"
            style={{ marginTop: 10, marginLeft: 70, width: 260 }}
            onChange={(e) => setUserName(e.target.value)}
          />{" "}
          <EmailIcon style={{ marginTop: 28, marginLeft: -40 }} />
          <FormControl sx={{ mt: 3 }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ marginLeft: 80 }}
            >
              Password
            </InputLabel>
            <OutlinedInput
              style={{ marginLeft: 70 }}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
            />
          </FormControl>
          <Link
            style={{
              fontSize: 12,
              marginLeft: 211,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Forgot Password?
          </Link>
          <Button
            variant="contained"
            onClick={handleLogin}
            style={{ marginLeft: 163, borderRadius: "50px", marginTop: 30 }}
          >
            Sign in
          </Button>
          <h3 id="P">
            Don't have an accout?{" "}
            <Link style={{ textDecoration: "none", cursor: "pointer" }}>
              Sign up
            </Link>{" "}
          </h3>
          <h4 id="icons">
            Follow Us  <br />
            <i class="fa-brands fa-instagram"></i>{" "}
            <i class="fa-brands fa-facebook"></i>{" "}
            <i class="fa-brands fa-twitter"></i>{" "}
            <i class="fa-brands fa-whatsapp"></i>
          </h4>
        </div>
      </Grid>
    </div>
  );
};

export default Login;
