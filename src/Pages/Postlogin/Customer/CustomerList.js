import { Button, Card, CardContent, Checkbox, TextField } from "@mui/material";
import React, { useState } from "react";
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
const columns = [
  { id: "customer_name", label: "Customer Name", minWidth: 10 },
  { id: "mobile_number", label: "Mobile Number", minWidth: 10 },
  {
    id: "email",
    label: "Eamil",
    minWidth: 10,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "orders_placed",
    label: "Order Placed",
    minWidth: 10,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "total_sales",
    label: "Total Sales",
    minWidth: 10,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 10,
    format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 10,
    format: (value) => value.toFixed(2),
  },
];

function createData(
  customer_name,
  mobile_number,
  email,
  orders_placed,
  total_sales,
  status,
  action
) {
  return {
    customer_name,
    mobile_number,
    email,
    orders_placed,
    total_sales,
    status,
    action,
  };
}

const rows = [
  createData(
    "India",
    "IN",
    1324171354,
    3287263,
    "",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "China",
    "CN",
    1403500365,
    9596961,
    "",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Italy",
    "IT",
    60483973,
    301340,
    "",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "United States",
    "US",
    327167434,
    9833520,
    "",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Canada",
    "CA",
    37602103,
    9984670,
    "",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Australia",
    "AU",
    25475400,
    7692024,
    "",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Germany",
    "DE",
    83019200,
    357578,
    "",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Ireland",
    "IE",
    4857000,
    70273,
    "",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Mexico",
    "MX",
    126577691,
    1972550,
    "",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Japan",
    "JP",
    126317000,
    377973,
    "",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "France",
    "FR",
    67022000,
    640679,
    "",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "United Kingdom",
    "GB",
    67545757,
    242495,
    "",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Russia",
    "RU",
    146793744,
    17098246,
    "",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Nigeria",
    "NG",
    200962417,
    923768,
    "",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Brazil",
    "BR",
    210147125,
    8515767,
    "",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
];

const CustomerList = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
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
              <TextField variant="outlined" label="search" />
              <Button variant="contained">Searchs</Button>
            </div>
            <Paper sx={{ width: "100%" }}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ top: 57, minWidth: column.minWidth }}
                        >
                          {column.label}
                          <ImportExportIcon sx={{ mb: -1 }} />
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            <TableCell>
                              <Checkbox />
                            </TableCell>
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <Button variant="outlined" color="inherit" sx={{ml:2,mt:3}}>
                Inactive
              </Button>
              <Button variant="contained" sx={{ml:2,mt:3}}>Apply</Button>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15, 20, 25]}
                component="div"
                count={rows.length}
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
