import React from 'react'
import { Button, CardContent, TextField, Card, Checkbox , Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "customer", label: "Customer_Name", minWidth: 170 },
  { id: "customer", label: "Mobile_Number", minWidth: 100 },
  {
    id: "Email",
    label: "Email",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "orderpladce",
    label: "Order_Placed",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Total sales",
    label: "Total_Sales",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,

    format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
    format: (value) => value.toFixed(2),
  },
];
function createData(
  customer,
  Customer_Name,
  Mobile_Number,
  Email,
  Order_Placed,
  Total_Sales,
  Status,
  Action
) {
  return {
    customer,
    Customer_Name,
    Mobile_Number,
    Email,
    Order_Placed,
    Total_Sales,
    Status,
    Action,
  };
}
const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
];


const Customerlist = () => {
    const [age, setAge] = React.useState("");
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
              <h1>Customer</h1>
      <div className=" Card-continer">
        <Card>
          <CardContent>
            <div className="search-button">
              <TextField variant="outlined" label="Search" />
              <Button variant="contained">Search</Button>
            </div>
            <Grid>
                <Button>Add Customer</Button>
            </Grid>
            <Paper sx={{ width: "100%" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
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
                rowsPerPageOptions={[5, 10, 15, 20, 25, 100]}
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
  )
}

export default Customerlist