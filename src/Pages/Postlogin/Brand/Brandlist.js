import React from 'react'
import {
    Card,
    CardContent,
    Button,
    TextField,
    TableCell,
    Checkbox,
  } from "@mui/material";
  import FormControl from "@mui/material/FormControl";
  import InputLabel from "@mui/material/InputLabel";
  import TablePagination from "@mui/material/TablePagination";
  import TableRow from "@mui/material/TableRow";
  import TableHead from "@mui/material/TableHead";
  import Table from "@mui/material/Table";
  import TableBody from "@mui/material/TableBody";
  import Paper from "@mui/material/Paper";
  import TableContainer from "@mui/material/TableContainer";
  import Select from "@mui/material/Select";
  import MenuItem from "@mui/material/MenuItem";
  
  const columns = [
    { id: "Category", label: "Category_Name", minWidth: 170 },
    { id: "Category_Name", label: "Barnd_Name", minWidth: 100 },
    {
      id: "Status",
      label: "Status",
      minWidth: 170,
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "Action",
      label: "Action",
      minWidth: 170,
      format: (value) => value.toLocaleString("en-US"),
    },
  ];
  function createData(
    Category,
    Category_Name,
    Brand,
    Brand_Name,
    Status,
    Action
  ) {
    return { Category, Category_Name, Brand, Brand_Name, Status, Action };
  }
  const rows = [
    createData("India", "IN", 1324171354, 3287263),
    createData("China", "CN", 1403500365, 9596961),
  ];

const Brandlist = () => {
    const [age, setAge] = React.useState("");
  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
        <h1>Brand List</h1>
      <div className=" Card-continer">
        <Card>
          <CardContent>
            <div className="search-button">
              <TextField variant="outlined" label="Search" />
              <FormControl sx={{ width: 50 }}></FormControl>
              <FormControl sx={{ width: 200 }}>
                <InputLabel id="demo-simple-select-label">select category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Select Category"
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
              <Button variant="outlined" color="primary">
                Inactive
              </Button>
              <Button variant="outline">Apply</Button>
            </Paper>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Brandlist