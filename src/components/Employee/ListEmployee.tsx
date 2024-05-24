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

// list employee component
export const ListEmployee = () => {
  const [employeeData, setEmployeeData] = useState<
    {
      id: number;
      fullName: string;
      birthDate: string | Date;
      department: string;
      experience: number;
    }[]
  >([]);

  const [open, setOpen] = useState(false); // state to open or close dialog
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<number | null>(
    null
  );
  const [selectedEmployeeName, setSelectedEmployeeName] = useState<string>("");

  /**
   * Open delete dialog
   * @param id Id of the employee to delete
   */
  const handleClickOpen = (id: number) => {
    setSelectedEmployeeId(id);
    const selectedEmployeeDetails = employeeData.find((emp) => emp.id === id);
    if (selectedEmployeeDetails) {
      setSelectedEmployeeName(selectedEmployeeDetails?.fullName);
    }
    setOpen(true);
  };

  /**
   * Cloce delete dialog
   */
  const handleClose = () => {
    setOpen(false);
  };

  /**
   * Delete confimation
   */
  const handleConfirmDelete = () => {
    if (selectedEmployeeId !== null) {
      store.dispatch(deleteEmployee(selectedEmployeeId));
      setOpen(false);
    }
  };

  /**
   * Set employee data, format birthdate to set it in the form field
   */
  useEffect(() => {
    const formatBirthDate = (birthDate: string | Date) => {
      if (birthDate instanceof Date) {
        return birthDate.toISOString().split("T")[0];
      }
      return birthDate;
    };

    const employeeList = store
      .getState()
      .persistReducers.employeeSlice.map((employee: employee) => ({
        ...employee,
        birthDate: formatBirthDate(employee.birthDate),
      }));
    setEmployeeData(employeeList);

    const unsubscribe = store.subscribe(() => {
      const updatedEmployeeList = store
        .getState()
        .persistReducers.employeeSlice.map((employee: employee) => ({
          ...employee,
          birthDate: formatBirthDate(employee.birthDate),
        }));
      setEmployeeData(updatedEmployeeList);
    });
    return () => unsubscribe();
  }, []);

  // List employee
  return (
    <Box sx={{ padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Heading */}
        <Typography variant="h5" gutterBottom>
          Employee List
        </Typography>

        {/* Button */}
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

      {/* Employee list table */}
      <TableContainer component={Paper}>
        <Table>
          {/* Table header */}
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
          {/* Table body */}
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
                <TableCell>
                  {typeof employee.birthDate === "string"
                    ? employee.birthDate
                    : employee.birthDate.toISOString().split("T")[0]}
                </TableCell>
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

      {/* Delete confirmation dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* Title */}
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h5">Delete Employee</Typography>
        </DialogTitle>
        {/* Content */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant="body1">
              Are you sure you want to delete the employee{" "}
              <strong>{selectedEmployeeName}</strong>?
            </Typography>
          </DialogContentText>
        </DialogContent>
        {/* Actions */}
        <DialogActions sx={{ pr: 3, pb: 3 }}>
          <Button
            onClick={handleClose}
            color="primary"
            variant="outlined"
            sx={{ mr: 2 }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirmDelete}
            variant="contained"
            color="primary"
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
