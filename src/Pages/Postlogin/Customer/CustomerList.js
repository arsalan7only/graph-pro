import React from "react";
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

const columns = [
  { id: "customer_name", label: "Customer Name", minWidth: 10 },
  { id: "mobile_no", label: "Mobile Number", minWidth: 10 },
  {
    id: "email",
    label: "E-mail",
    minWidth: 10,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "ordplaced",
    label: "Order Placed",
    minWidth: 10,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "TS",
    label: "Total Sales",
    minWidth: 10,
    format: (value) => value.toFixed(2),
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
  mobile_no,
  email,
  ordplaced,
  TS,
  status,
  action
) {
  return { customer_name, mobile_no, email, ordplaced, TS, status, action };
}
const rows = [
  createData(
    "Khuzaim Shaikh",
    9767744766,
    "khuzishaikh766@gmail.com",
    "",
    "",
    <Button variant="contained" color="success" sx={{ borderRadius: "50px" }}>
      Active
    </Button>,
    <i
      class="fa-solid fa-pen-to-square"
      style={{ color: "blue", fontSize: 25 }}
    ></i>
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
              <TextField variant="outlined" label="Search" />
              <Button variant="contained" sx={{ borderRadius: "50px" }}>
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
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ top: 57, minWidth: column.minWidth }}
                        >
                          {column.label}
                          <SwapVertTwoToneIcon sx={{ mb: -1 }} />
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
