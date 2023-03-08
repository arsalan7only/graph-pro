import { Button, Card, CardContent, Checkbox, TextField } from "@mui/material";
import React from "react";
import "./Brand.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Select from "@mui/material/Select";

const columns = [
  { id: "category_name", label: "Category Name", minWidth: 5 },
  { id: "brand_name", label: "Brand Name", minWidth: 100 },
 
  {
    id: "status",
    label: "Status",
    minWidth: 5,
    //   align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 1,
    //   align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(category_name, brand_name, status, action) {
  return { category_name, brand_name, status, action };
}

const rows = [
  createData(
    "India",
    "IN",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i className="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "China",
    "CN",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i className="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Italy",
    "IT",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i className="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "United States",
    "US",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i className="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Canada",
    "CA",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i className="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Australia",
    "AU",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i className="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Germany",
    "DE",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i className="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Ireland",
    "IE",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i className="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Mexico",
    "MX",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i className="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Japan",
    "JP",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i className="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "France",
    "FR",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i className="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "United Kingdom",
    "GB",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i className="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Russia",
    "RU",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i className="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Nigeria",
    "NG",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i className="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Brazil",
    "BR",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i className="fa-solid fa-pen-to-square"></i>
  ),
];

const Brand = () => {
  const [age, setAge] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
      <div className="Product_Top_Container2">
        <div>
          <h1>Brand List</h1>
        </div>
        <div className="Product_Top_Button2">
          <Button variant="contained" color="success">
            ADD BRAND
          </Button>
        </div>
      </div>
      {/* //Top contaner Closed */}

      <div className="card-contaner2">
        <Card>
          <CardContent>
            <div className="options-contaner2">
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
              <Button variant="contained">Search</Button>
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

export default Brand;
