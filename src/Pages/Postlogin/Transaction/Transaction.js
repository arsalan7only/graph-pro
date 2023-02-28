import { Card, CardContent, Checkbox, TextField } from "@mui/material";
import React from "react";
import "./Transaction.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const columns = [
  { id: "customer_name", label: "Customer Name", minWidth: 5 },
  { id: "transaction_amount", label: "Transaction Amount", minWidth: 100 },
  {
    id: "transaction_id",
    label: "Transaction ID",
    minWidth: 5,
    //   align: 'right',
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "transaction_date",
    label: "Transaction Date",
    minWidth: 5,
    //   align: 'right',
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "transaction_mode",
    label: "Transaction Mode",
    minWidth: 5,
    //   align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: "satus",
    label: "Status",
    minWidth: 1,
    //   align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(
  customer_name,
  transaction_amount,
  transaction_id,
  transaction_date,
  transaction_mode,
  satus
) {
  return {
    customer_name,
    transaction_amount,
    transaction_id,
    transaction_date,
    transaction_mode,
    satus,
  };
}

const rows = [];

const Transaction = () => {
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
      <div>
        <h1>Transaction</h1>
      </div>

      {/* //Top contaner Closed */}

      <div className="card-contaner1">
        <Card>
          <CardContent>
            <div className="options-contaner1">
              <TextField variant="outlined" label="search" />
            </div>

            <Paper sx={{ width: "100%" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Checkbox></Checkbox>
                      </TableCell>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ top: 57, minWidth: column.minWidth }}
                          >  
                          {column.label}
                          <SwapVertIcon  sx={{mb: -1}}/>
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
                rowsPerPageOptions={[5, 10, 25, 100]}
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
