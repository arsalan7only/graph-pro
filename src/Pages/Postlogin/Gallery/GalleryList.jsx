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
import "./GalleryList.css";

const columns = [
  { id: "gallery_name", label: "Gallery Name", minWidth: 10 },
  { id: "status", label: "Status", minWidth: 10 },
  {
    id: "action",
    label: "Action",
    minWidth: 10,
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(gallery_name, status, action) {
  return {
    gallery_name,
    status,
    action,
  };
}
const rows = [
  createData(
    "India",
    <Button variant="contained" color="success">
      Active
    </Button>,
    <i class="fa-solid fa-pen-to-square" style={{color:"blue"}}></i>
  ),
  createData(
    "Russian",
    <Button variant="contained" color="success" >
      Active
    </Button>,
    <i class="fa-solid fa-pen-to-square" style={{color:"blue"}}></i>
  ),
];
const GalleryList = () => {
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
      <div className="Product_Top_container6"></div>
      {/*Top Container closed*/}
      <div>
        <h2>Gallery List</h2>
      </div>
      <div className="card-container6">
        <Card>
          <CardContent>
            <div className="options-container6">
              <TextField
                variant="outlined"
                placeholder="Search"
                sx={{ width: 0.4 }}
              />
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GalleryList;
