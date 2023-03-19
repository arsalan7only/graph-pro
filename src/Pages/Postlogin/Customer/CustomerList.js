import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import SwapVertTwoToneIcon from "@mui/icons-material/SwapVertTwoTone";
import "./CustomerList.css";
import {
  customerChangeStatus,
  getCustomer,
} from "../../../Redux/Actions/customerAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CustomerList = () => {
  //!{useDispatch Starts}//
  const dispatch = useDispatch();

  //!{useNavigate Statrs}//
  const navigate = useNavigate();

  //!{useSelectors Starts}//
  const select = useSelector((state) => state);
  const customer = select.ProductReducer.customer;

  //!{useStates Starts}//
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = useState([]);
  const [isOrder, setIsOrder] = useState("ASC");
  const [search, setSearch] = useState("");
  const [action, setAction] = useState("");
  const [checkData, setCheckData] = useState([]);
  const [checkDataAll, setCheckDataAll] = useState(false);
  const [sort, setSort] = useState("");

  //!{Functions Starts}//
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleSort = (sortby) => {
    setSort(sortby);
    setIsOrder(isOrder == "ASC" ? "DES" : "ASC");
    dispatch(getCustomer(rowsPerPage, page + 1, sortby, isOrder));
  };
  const handleSearch = (sortby, isOrder) => {
    dispatch(getCustomer(rowsPerPage, page + 1, sortby, isOrder, search));
    setSearch("");
  };
  const handleChangeAll = (e) => {
    setCheckData(data.slice().fill(!checkDataAll));
    setCheckDataAll(!checkDataAll);
  };
  const handleSingleChange = (index, val) => {
    const res = checkData.map((item, ind) => {
      if (ind == index) {
        return !val;
      } else {
        return item;
      }
    });
    setCheckData(res);
  };
  const handleChangeStatus = () => {
    let id = [];
    checkData.forEach((item, index) => {
      if (item == true) {
        id.push(data[index].id);
      }
    });
    const payload = {
      id: id,
      status: action,
    };
    setCheckDataAll(false);
    dispatch(customerChangeStatus(payload));
    if (sort == "") {
      dispatch(getCustomer(rowsPerPage, page + 1));
    } else {
      dispatch(
        getCustomer(
          rowsPerPage,
          page + 1,
          sort,
          isOrder == "ASC" ? "DES" : "ASC"
        )
      );
    }
    if (search != "") {
      handleSearch();
    }
  };
  const handleSingleStatusChange = (id, status) => {
    const payload = {
      id: [id],
      status: status ? 0 : 1,
    };
    dispatch(customerChangeStatus(payload));
    if (sort == "") {
      dispatch(getCustomer(rowsPerPage, page + 1));
    } else {
      dispatch(
        getCustomer(
          rowsPerPage,
          page + 1,
          sort,
          isOrder == "ASC" ? "DES" : "ASC"
        )
      );
    }
    if (search != "") {
      handleSearch();
    }
  };
  const handleNavigate = () => {
    navigate("/costomer/addcustomer");
  };
  const handleEdit = (id) => {
    navigate(`/costomer/editcustomer/${id}`);
  };

  //!{useEffects Starts}//
  useEffect(() => {
    dispatch(getCustomer(rowsPerPage, page + 1));
  }, []);
  useEffect(() => {
    dispatch(getCustomer(rowsPerPage, page + 1));
  }, [page, rowsPerPage]);
  useEffect(() => {
    setData(customer.data);
    setCheckData(customer?.data?.slice()?.fill(false));
  }, [customer]);

  return (
    <div>
      <div className="Product_Top_container5">
        <div>
          <h2>Customer List</h2>
        </div>
        <div className="Product-Top-button5">
          <Button
            variant="contained"
            onClick={handleNavigate}
            sx={{
              borderRadius: "50px",
              backgroundColor: "#Becae6",
              color: "black",
              border: "3px solid black ",
            }}
          >
            Add Customer
          </Button>
        </div>
      </div>
      <div className="card-container5">
        <Card>
          <CardContent>
            <div className="options-container5">
              <TextField
                variant="outlined"
                label="Search Here"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <Button
                variant="contained"
                onClick={handleSearch}
                sx={{ borderRadius: "50px" }}
              >
                Search
              </Button>
            </div>
            <Paper>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Checkbox
                          checked={checkDataAll}
                          onChange={handleChangeAll}
                        />
                      </TableCell>
                      <TableCell>
                        Name{" "}
                        <SwapVertTwoToneIcon
                          sx={{ mb: -0.6, fontSize: 20 }}
                          onClick={() => handleSort("fname")}
                        />
                      </TableCell>
                      <TableCell>
                        Mobile Number{" "}
                        <SwapVertTwoToneIcon
                          sx={{ mb: -0.6, fontSize: 20 }}
                          onClick={() => handleSort("mobile")}
                        />
                      </TableCell>
                      <TableCell>
                        E-mail{" "}
                        <SwapVertTwoToneIcon
                          sx={{ mb: -0.6, fontSize: 20 }}
                          onClick={() => handleSort("email")}
                        />
                      </TableCell>
                      <TableCell>Total Order</TableCell>
                      <TableCell>Total Sale</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.map((item, index) => {
                      return (
                        <TableRow>
                          <TableCell>
                            <Checkbox
                              checked={checkData[index]}
                              onChange={() =>
                                handleSingleChange(index, checkData[index])
                              }
                            />
                          </TableCell>
                          <TableCell>
                            {item.fname} {item.lname}
                          </TableCell>
                          <TableCell>{item.mobile}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>{item.totalorder}</TableCell>
                          <TableCell>{item.totalsale}</TableCell>
                          <TableCell>
                            <Button
                              variant="contained"
                              sx={{ borderRadius: 50 }}
                              color={item.status ? "success" : "error"}
                              onClick={() =>
                                handleSingleStatusChange(item.id, item.status)
                              }
                            >
                              {item.status ? "ACTIVE" : "Inactive"}
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="contained"
                              onClick={() => handleEdit(item.id)}
                              sx={{ borderRadius: 50 }}
                            >
                              Edit
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className="inpubutton">
                <FormControl sx={{ width: 200 }}>
                  <InputLabel id="demo-simple-select-label">Action</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={action}
                    label="action"
                    onChange={(e) => setAction(e.target.value)}
                  >
                    <MenuItem value={1}>Active</MenuItem>
                    <MenuItem value={0}>Inactive</MenuItem>
                    <MenuItem value={2}>Delete</MenuItem>
                  </Select>
                </FormControl>{" "}
                <Button
                  variant="contained"
                  sx={{ borderRadius: 50, mt: 1 }}
                  onClick={handleChangeStatus}
                >
                  Apply
                </Button>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 15, 20, 25]}
                  component="div"
                  count={customer?.pages?.count}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </div>
            </Paper>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomerList;
