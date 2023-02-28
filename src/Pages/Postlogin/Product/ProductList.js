import React from "react";
import { Button, Card, CardContent, Checkbox, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import "./ProductList.css";

const columns = [
  { id: "product", label: "Product" },
  { id: "product_type", label: "Product Type" },
  {
    id: "category",
    label: "category",
    // align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "quantity",
    label: "Quantity",
    // align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    format: (value) => value.toFixed(2),
  },
];

function createData(product, product_type, category, quantity, status, action) {
  return { product, product_type, category, quantity, status, action };
}

const rows = [
  createData(
    "India",
    "IN",
    1324171354,
    3287263,
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
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
];
const ProductList = () => {
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

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <div className="Product_Top_container1b">
        <div>
          <h3>Product</h3>
        </div>
        <div className="Product-Top-button1b">
          <Button variant="contained">Export CSV</Button>
          <Button variant="contained">Import CSV</Button>
          <Button variant="contained" color="success">
            Add Product
          </Button>
        </div>
      </div>
      {/* Top container closed */}
      <div className="card-container1b">
        <Card>
          <CardContent>
            <div className="options-container1b">
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
              <Button variant="contained">Search</Button>
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
                        <TableCell key={column.id} align={column.align}>
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
              <div className="bottom_button1b">
                <Button variant="outlined" color="inherit" sx={{ml:2}}>
                  Inactive
                </Button>
                <Button variant="contained" sx={{ml:2}}>Apply</Button>
              </div>
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

export default ProductList;
