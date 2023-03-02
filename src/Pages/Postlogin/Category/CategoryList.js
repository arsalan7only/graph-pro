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
import "./CategoryList.css";

const columns = [
  { id: "category_name", label: "Category Name", minWidth: 10 },
  { id: "parent_Ctg_name", label: "Parent Category Name", minWidth: 10 },
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

function createData(category_name, parent_Ctg_name, status, action) {
  return { category_name, parent_Ctg_name, status, action };
}
const rows = [
  createData(
    "India",
    "IN",
    <Button variant="contained" color="success" sx={{ borderRadius: "50px" }}>
      Active
    </Button>,
    <i
      class="fa-solid fa-pen-to-square"
      style={{ color: "blue", fontSize: 25 }}
    ></i>
  ),
  createData(
    "Russian",
    "RU",
    <Button variant="contained" color="success" sx={{ borderRadius: "50px" }}>
      Active
    </Button>,
    <i
      class="fa-solid fa-pen-to-square"
      style={{ color: "blue", fontSize: 25 }}
    ></i>
  ),
];
const CategoryList = () => {
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
      <div className="Product_Top_container3">
        <div>
          <h2>Product Category List</h2>
        </div>
        <div className="Product-Top-button3">
          <Button
            variant="contained"
            sx={{ backgroundColor: " #4B49AC", borderRadius: "50px" }}
          >
            Add Category
          </Button>
        </div>
      </div>
      <div className="card-container3">
        <Card>
          <CardContent>
            <div className="options-container3">
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

export default CategoryList;
