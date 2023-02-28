import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "./Brand.css";
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
  { id: "brand", label: "Brand", minWidth: 10 },
  { id: "brand_name", label: "Brand Name", minWidth: 10 },
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

function createData(brand, brand_name, status, action) {
  return { brand, brand_name, status, action };
}

const rows = [
  createData(
    "India",
    "IN",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "China",
    "CN",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Italy",
    "IT",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
];

const Brand = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
      <div className="Product_Top_container1e">
        <div>
          <h3>Brand List</h3>
        </div>
        <div className="Product-Top-button1e">
          <Button variant="contained" color="success">
            Add Brand
          </Button>
        </div>
      </div>
      {/* Top container closed */}
      <div className="Card-container1e">
        <Card>
          <CardContent>
            <div className="opetion-container1e">
              <TextField variant="outlined" label="search" />
              <FormControl sx={{ width: 200 }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
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
              <div className="botom_button1e">
              <Button variant="outlined" color="inherit" sx={{ml:2,mt:3}}>
                Inactive
              </Button>
              <Button variant="contained" sx={{ml:2,mt:3}}>Apply</Button>
              </div>
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

export default Brand;
