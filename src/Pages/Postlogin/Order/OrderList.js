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
import "./OrderList.css";

const columns = [
  { id: "order_id", label: "Order Id", minWidth: 10 },
  { id: "order_date", label: "Order Date", minWidth: 10 },
  {
    id: "zip_code",
    label: "Zip Code",
    minWidth: 10,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "price",
    label: "Price",
    minWidth: 10,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "order_status",
    label: "Order Status",
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
  order_id,
  order_date,
  zip_code,
  price,
  order_status,
  action
) {
  return { order_id, order_date, zip_code, price, order_status, action };
}
const rows = [];
const OrderList = () => {
  //!{useStates Starts}//
  const [age, setAge] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  //!{Functions Starts}//
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <div className="Product_Top_container10">
        <div>
          <h2 style={{ marginBottom: 15 }}>Order List</h2>
        </div>
      </div>
      {/*Top Container closed*/}
      <div className="card-container10">
        <Card>
          <CardContent>
            <div className="options-container10">
              <TextField variant="outlined" label="Search" sx={{ mr: 2 }} />
              <TextField type="datetime-local" sx={{ mr: 2 }} />
              <TextField type="datetime-local" />
              <Button variant="contained">Search</Button>
            </div>
            <Paper sx={{ mt: 3 }}>
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
            <Button
              variant="outlined"
              sx={{ mr: 2, mt: 3, borderRadius: "50px" }}
            >
              Action
            </Button>
            <Button variant="contained" sx={{ mt: 3, borderRadius: "50px" }}>
              Apply
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderList;
