import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { getGallary } from "../Redux/Actions/customerAction";

import { Card, CardContent, Grid, Typography } from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ImageModel(props) {
  const { open, setOpen } = props;

  const dispatch = useDispatch();
  const select = useSelector((state) => state);
 
  // const gallary = select.ProductReducer.gallary;
  // console.log("gallary", gallary);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(0);
  const [data, setData] = React.useState([]);

  const [isOrder, setIsOrder] = React.useState("ASC");
  const [search, setSearch] = React.useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetch = async () => {
    dispatch(getGallary(rowsPerPage, page + 1));
  };

  React.useEffect(() => {
    if (open) {
      fetch();
    }
  }, [open]);

  // React.useEffect(() => {
  //   setData(gallary?.data);
  // }, [gallary]);
  // console.log("data", data);
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Gallary List
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container spacing={4}>
            {data?.map((item) => {
              const base64String = btoa(
                new Uint8Array(item.img.data.data).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ""
                )
              );
              return (
                <Grid item xs={4}>
                  <Card>
                    <CardContent>
                      <img
                        src={`data:image/png;base64,${base64String}`}
                        width={450}
                        height={200}
                      />
                      <CheckBox />
                      <Typography>{item.title}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
