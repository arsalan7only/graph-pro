import { Button, Card, CardContent, Checkbox, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./CustomerList.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { getCustomer } from "../../../Redux/Actions/cutomerAction";
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
      <div className="Product_Top_container1">
        <div>
          <h3>Customer List</h3>
        </div>
        <div className="Product-Top-button1">
          <Button variant="contained" color="success">
            Add Customer
          </Button>
        </div>
      </div>
      {/* Top container closed */}
      <div className="Card-container1">
        <Card>
          <CardContent>
            <div className="opetion-container1">
              <TextField
                variant="outlined"
                label="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="contained" onClick={handleSearch}>
                Searchs
              </Button>
            </div>
            <Paper sx={{ width: "100%" }}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Checkbox />
                      </TableCell>

                      <TableCell>
                        Name{" "}
                        <ImportExportIcon
                          sx={{ mb: -1 }}
                          onClick={() => handleSort("fname")}
                        />
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
                              color={item.status ? "success" : "error"}
                            >
                              {item.status ? "Active" : "Inactive"}
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
              <Button variant="outlined" color="inherit" sx={{ ml: 2, mt: 3 }}>
                Inactive
              </Button>
              <Button variant="contained" sx={{ ml: 2, mt: 3 }}>
                Apply
              </Button>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15, 20, 25]}
                component="div"
                count={customer.pages.count}
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
