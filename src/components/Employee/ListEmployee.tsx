// EmployeeList.js
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { deleteEmployee } from "../../redux/reducer/employeeReducer";
import store from "../../redux/store/store";
import {
  Box,
  Button,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import { Employee } from "../../models/emplyee";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const ListEmployee = () => {
  function deleteEmployeeFun(id: number) {
    if (window.confirm("Are you sure you want to delete employee?")) {
      store.dispatch(deleteEmployee(id));
    }
  }

  const [employeeData, setEmployeeData] = useState([
    { id: 0, fullName: "", birthDate: "", department: "", experience: 0 },
  ]);

  useEffect(() => {
    setEmployeeData(store.getState().persistReducers.employeeSlice);
    store.subscribe(() => {
      setEmployeeData(store.getState().persistReducers.employeeSlice);
    });
  }, [employeeData]);

  return (
    <Box sx={{ padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Employee List
        </Typography>

        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/add"
          sx={{ marginBottom: 2 }}
        >
          Add Employee
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Birth Date</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Experience</TableCell>
              <TableCell width={100}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* If employee data not found */}
            {!employeeData.length && (
              <TableRow>
                <TableCell colSpan={6} sx={{ textAlign: "center" }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Employee data not found
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            {/* Employee list */}
            {employeeData.map((employee: Employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.fullName}</TableCell>
                <TableCell>{employee.birthDate}</TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>{employee.experience}</TableCell>
                <TableCell sx={{ textAlign: "right" }}>
                  <IconButton
                    component={RouterLink}
                    to={`edit/${employee.id}`}
                    sx={{ marginRight: 0 }}
                    color="primary"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => deleteEmployeeFun(employee.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
