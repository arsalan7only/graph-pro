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
import "./CustomerList.css";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import {
  customerChangeStatus,
  getcustomer,
} from "../../../Redux/Actions/customerAction";
import { useDispatch, useSelector } from "react-redux";

const CustomerList = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state);
  const customer = select.ProductReducer.customer;

  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = useState([]);
  const [isOrder, setIsOrder] = useState("ASC");
  const [search, setSearch] = useState("");
  const [action, setAction] = useState("");
  const [checkData, setCheckData] = useState([]);
  const [checkDataAll, setCheckDataAll] = useState(false);
  const [sort, setSort] = useState("");

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
    dispatch(getcustomer(rowsPerPage, page + 1, sortby, isOrder));
    setSearch("");
  };
  const handleSearch = (sortby, isOrder) => {
    dispatch(getcustomer(rowsPerPage, page + 1, sortby, isOrder, search));
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
    console.log(action);
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
    if(sort == "")
    dispatch(
      getcustomer(rowsPerPage, page + 1, )
    );else {
      dispatch(getcustomer(
        rowsPerPage,
        page + 1,
        sort,
        isOrder == "ASC" ? "DES" : "ASC"
      ))
    }
    if(search != ""){
      handleSearch()
    }
  };
  const handleSingleStatusChange = (id, status) => {
    const payload = {
      id: [id],
      status: status ? 0 : 1,
    };
   
    dispatch(customerChangeStatus(payload));
    if(sort == "")
    dispatch(
      getcustomer(rowsPerPage, page + 1, )
    );else {
      dispatch(getcustomer(
        rowsPerPage,
        page + 1,
        sort,
        isOrder == "ASC" ? "DES" : "ASC"
      ))
    }
    if(search != ""){
      handleSearch()
    }
  };
  useEffect(() => {
    dispatch(getcustomer(rowsPerPage, page + 1));
  }, []);

  useEffect(() => {
    dispatch(getcustomer(rowsPerPage, page + 1));
  }, [page, rowsPerPage]);

  useEffect(() => {
    setData(customer.data);
    setCheckData(customer.data.slice().fill(false));
  }, [customer]);
  console.log(checkData);
  return (
    <div>
      <div className="Product_Top_container3">
        <div>
          <h3>CustomerList</h3>
        </div>
        <div className="Product-Top-button">
          <Button variant="contained" color="success">
            Add Customer
          </Button>
        </div>
      </div>
      {/* Top container closed */}
      <div className="card-container3">
        <Card>
          <CardContent>
            <div className="options-container">
              <TextField
                variant="outlined"
                label="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <Button variant="contained" onClick={handleSearch}>
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
                        <ImportExportIcon
                          sx={{ mb: -1 }}
                          onClick={() => handleSort("fname")}
                        />{" "}
                      </TableCell>
                      <TableCell>
                        Mobile Number{" "}
                        <ImportExportIcon
                          sx={{ mb: -1 }}
                          onClick={() => handleSort("mobile")}
                        />
                      </TableCell>
                      <TableCell>
                        Email{" "}
                        <ImportExportIcon
                          sx={{ mb: -1 }}
                          onClick={() => handleSort("email")}
                        />
                      </TableCell>
                      <TableCell>Total Order</TableCell>
                      <TableCell>Total sale</TableCell>
                      <TableCell>status</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((item, index) => {
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
                              color={item.status ? "success" : "error"}
                              onClick={() =>
                                handleSingleStatusChange(item.id, item.status)
                              }
                            >
                              {item.status ? "ACTIVE" : "INACTIVE"}
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button variant="contained">Edit</Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <FormControl sx={{ width: 200 }}>
                <InputLabel id="demo-simple-select-label">Action</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={action}
                  label="Action"
                  onChange={(e) => setAction(e.target.value)}
                >
                  <MenuItem value={1}>Active</MenuItem>
                  <MenuItem value={0}>Inactive</MenuItem>
                  <MenuItem value={2}>Delect</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                sx={{ ml: 3 }}
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
            </Paper>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomerList;
