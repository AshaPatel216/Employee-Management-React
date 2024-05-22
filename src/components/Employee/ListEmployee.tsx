import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { deleteEmployee } from "../../redux/reducer/employeeReducer";
import store from "../../redux/store/store";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { employee } from "../../models/emplyee";

export const ListEmployee = () => {
  const [employeeData, setEmployeeData] = useState<
    { id: number; fullName: string; birthDate: string | Date; department: string; experience: number }[]
  >([]);

  const [open, setOpen] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<number | null>(null);

  const handleClickOpen = (id: number) => {
    setSelectedEmployeeId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmDelete = () => {
    if (selectedEmployeeId !== null) {
      store.dispatch(deleteEmployee(selectedEmployeeId));
      setOpen(false);
    }
  };

  useEffect(() => {
    const formatBirthDate = (birthDate: string | Date) => {
      if (birthDate instanceof Date) {
        return birthDate.toISOString().split("T")[0];
      }
      return birthDate;
    };

    const employeeList = store.getState().persistReducers.employeeSlice.map((employee: employee) => ({
      ...employee,
      birthDate: formatBirthDate(employee.birthDate),
    }));
    setEmployeeData(employeeList);

    const unsubscribe = store.subscribe(() => {
      const updatedEmployeeList = store.getState().persistReducers.employeeSlice.map((employee: employee) => ({
        ...employee,
        birthDate: formatBirthDate(employee.birthDate),
      }));
      setEmployeeData(updatedEmployeeList);
    });
    return () => unsubscribe();
  }, []);

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
            {!employeeData.length && (
              <TableRow>
                <TableCell colSpan={6} sx={{ textAlign: "center" }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Employee data not found
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            {employeeData.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.fullName}</TableCell>
                <TableCell>{typeof employee.birthDate === 'string' ? employee.birthDate : employee.birthDate.toISOString().split("T")[0]}</TableCell>
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
                    onClick={() => handleClickOpen(employee.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Employee"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this employee?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
