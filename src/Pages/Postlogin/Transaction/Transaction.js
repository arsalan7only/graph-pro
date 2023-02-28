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
  { id: "customer_name", label: "Customer List" },
  { id: "transaction_amount", label: "Transaction Amount" },
  {
    id: "transection_id",
    label: "Transection ID",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "transection_date",
    label: "Transection Date",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "transection_mode",
    label: "Transection Mode",
    format: (value) => value.toFixed(2),
  },
  {
    id: "status",
    label: "Status",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  procustomer_nameduct,
  transaction_amount,
  transection_id,
  transection_date,
  transection_mode,
  status
) {
  return {
    procustomer_nameduct,
    transaction_amount,
    transection_id,
    transection_date,
    transection_mode,
    status,
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
      {/* Top container closed */}
      <div className="card-container1g">
        <Card>
          <CardContent>
            <div className="options-container1g">
              <TextField
                variant="outlined"
                label="search"
                style={{ width: 800 }}
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
                        <TableCell key={column.id} align={column.align}>
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
