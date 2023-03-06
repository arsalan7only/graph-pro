import { Button, Card, CardContent, Checkbox, TextField } from "@mui/material";
import React from "react";
import "./CategoryList.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";


const columns = [
  { id: "category_name", label: "Category Name", minWidth: 5 },
  { id: "parent_category_name", label: "Parent Category Name", minWidth: 100 },
 
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

function createData(category_name, parent_category_name, status, action) {
  return { category_name,parent_category_name, status, action };
}

const rows = [
  createData(
    "India",
    "IN",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i class="fa-solid fa-pen-to-square" id="a"></i>
  ),
  createData(
    "China",
    "CN",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i class="fa-solid fa-pen-to-square" id="a"></i>
  ),
  createData(
    "Italy",
    "IT",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i class="fa-solid fa-pen-to-square" id="a"></i>
  ),
  createData(
    "United States",
    "US",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i class="fa-solid fa-pen-to-square" id="a"></i>
  ),
  createData(
    "Canada",
    "CA",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i class="fa-solid fa-pen-to-square" id="a" ></i>
  ),
  createData(
    "Australia",
    "AU",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i class="fa-solid fa-pen-to-square" id="a"></i>
  ),
  createData(
    "Germany",
    "DE",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i class="fa-solid fa-pen-to-square" id="a"></i>
  ),
  createData(
    "Ireland",
    "IE",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i class="fa-solid fa-pen-to-square" id="a"></i>
  ),
  createData(
    "Mexico",
    "MX",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i class="fa-solid fa-pen-to-square" id="a"></i>
  ),
  createData(
    "Japan",
    "JP",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i class="fa-solid fa-pen-to-square" id="a"></i>
  ),
  createData(
    "France",
    "FR",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i class="fa-solid fa-pen-to-square" id="a"></i>
  ),
  createData(
    "United Kingdom",
    "GB",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i class="fa-solid fa-pen-to-square" id="a"></i>
  ),
  createData(
    "Russia",
    "RU",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i class="fa-solid fa-pen-to-square" id="a"></i>
  ),
  createData(
    "Nigeria",
    "NG",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i class="fa-solid fa-pen-to-square" id="a"></i>
  ),
  createData(
    "Brazil",
    "BR",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i class="fa-solid fa-pen-to-square" id="a"></i>
  ),
];

const CategoryList = () => {
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
      <div className="Product_Top_Container5">
        <div>
          <h1>Product Category List</h1>
        </div>
        <div className="Product_Top_Button5">
          <Button variant="contained" color="success">
            ADD BRAND
          </Button>
        </div>
      </div>
      {/* //Top contaner Closed */}

      <div className="card-contaner5">
        <Card>
          <CardContent>
            <div className="options-contaner5">
              <TextField variant="outlined" label="search" />

              
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

export default CategoryList;
