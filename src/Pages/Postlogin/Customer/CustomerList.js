import React, { useEffect, useState } from "react";
import { Button, Card, CardContent, Checkbox, TextField } from "@mui/material";
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
import { getCustomer } from "../../../Redux/Actions/customerAction";
import { useDispatch, useSelector } from "react-redux";

const CustomerList = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state);
  const customer = select.ProductReducer.customer;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = useState([]);
  const [isOrder, setIsOrder] = useState("ASC");
  const [search, setSearch] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleSort = (sortby) => {
    setIsOrder(isOrder == "ASC" ? "DES" : "ASC");
    dispatch(getCustomer(rowsPerPage, page + 1, sortby, isOrder));
  };
  const handleSearch = (sortby, isOrder) => {
    dispatch(getCustomer(rowsPerPage, page + 1, sortby, isOrder, search));
    setSearch('')
  };
  useEffect(() => {
    dispatch(getCustomer(rowsPerPage, page + 1));
  }, []);
  useEffect(() => {
    dispatch(getCustomer(rowsPerPage, page + 1));
  }, [page, rowsPerPage]);
  useEffect(() => {
    setData(customer.data);
  }, [customer]);
  return (
    <div>
      <div className="Product_Top_container5">
        <div>
          <h2 style={{ color: "gray" }}>Customer List</h2>
        </div>
        <div className="Product-Top-button5">
          <Button
            variant="contained"
            sx={{ borderRadius: "50px", backgroundColor: " #4B49AC" }}
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
                        <Checkbox />
                      </TableCell>
                      <TableCell>
                        Name
                        <SwapVertTwoToneIcon
                          sx={{ mb: -1 }}
                          onClick={() => handleSort("fname")}
                        />
                      </TableCell>
                      <TableCell>
                        Mobile Number
                        <SwapVertTwoToneIcon
                          sx={{ mb: -1 }}
                          onClick={() => handleSort("mobile")}
                        />
                      </TableCell>
                      <TableCell>
                        E-mail
                        <SwapVertTwoToneIcon
                          sx={{ mb: -1 }}
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
                    {data.map((item, index) => {
                      return (
                        <TableRow>
                          <TableCell>
                            <Checkbox />
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
                            >
                              {item.status ? "ACTIVE" : "Inactive"}
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="contained"
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
