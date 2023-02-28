import { Button, Card, CardContent, Checkbox, TextField } from "@mui/material";
import React from "react";
import "./OrderList.css"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const columns = [
  { id: 'order_id', label: 'Order ID', minWidth: 5 },
  { id: 'order_data', label: 'Order Data', minWidth: 100 },
  {
    id: 'zip_code',
    label: 'Zip Code',
    minWidth: 5,
    //   align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'price',
    label: 'Price',
    minWidth: 5,
    //   align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'order_status',
    label: 'Order Status',
    minWidth: 5,
    //   align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 1,
    //   align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(order_id, order_data, zip_code, price, order_status, action) {

  return { order_id, order_data, zip_code, price, order_status, action };
}

const rows = [

];

const OrderList = () => {

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
        <h1>Order List</h1>
      </div>

      {/* //Top contaner Closed */}

      <div className="card-contaner1">
        <Card>
          <CardContent>
            <div className="options-contaner1">
              <TextField variant="outlined" label="search" />
              <TextField type="datetime-local" />
              <TextField type="datetime-local" />
              <Button variant="contained" >Search</Button>
            </div>

            <Paper sx={{ width: '100%' }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table >
                  <TableHead>

                    <TableRow>
                      <TableCell>
                        <Checkbox></Checkbox>
                      </TableCell>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ top: 57, minWidth: column.minWidth }}>
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
              <Button variant="contained" sx={{ ml: 3 }}>ACTION</Button>
              <Button variant="contained" color="success" sx={{ ml: 2 }}>APPLY</Button>
            </Paper>
          </CardContent>
        </Card>
      </div>
    </div>
  )
};

export default OrderList;
