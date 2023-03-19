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
import ImportExportIcon from "@mui/icons-material/ImportExport";
import "./Transaction.css";

const columns = [
  { id: "customer_name", label: "Customer Name", minWidth: 10 },
  { id: "transaction_amount", label: "Transaction Amount", minWidth: 10 },
  {
    id: "transaction_id",
    label: "Transaction  ID",
    minWidth: 10,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "transaction_date",
    label: "Transaction Date",
    minWidth: 10,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "transaction_mode",
    label: "Transaction Mode",
    minWidth: 10,
    format: (value) => value.toFixed(2),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 10,
    format: (value) => value.toFixed(2),
  },
];

function createData(
  customer_name,
  transaction_amount,
  transaction_id,
  transaction_date,
  transaction_mode,
  status
) {
  return {
    customer_name,
    transaction_amount,
    transaction_id,
    transaction_date,
    transaction_mode,
    status,
  };
}
const rows = [];
const Transaction = () => {
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
      <div className="Product_Top_container12"></div>
      {/*Top Container closed*/}
      <div>
        <h2 style={{ marginBottom: 20 }}>Transaction</h2>
      </div>
      <div className="card-container12">
        <Card>
          <CardContent>
            <div className="options-container12">
              <TextField
                variant="outlined"
                placeholder="Search"
                sx={{ width: 0.4 }}
              />
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

export default Transaction;
