import { createSlice } from "@reduxjs/toolkit";
import { Employee } from "../../models/emplyee";

const initialState: Employee[] = [];

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      const lastEmployee = state[state.length - 1];
      action.payload.id = lastEmployee ? lastEmployee.id + 1 : 1;  // Correct way to assign a new ID
      state.push(action.payload);
      alert("Employee added");
    },
    editEmployee: (state, action) => {
      const index = state.findIndex((employee) => employee.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
        alert("Employee updated");
      }
    },
    deleteEmployee: (state, action) => {
      const index = state.findIndex((employee) => employee.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        alert("Employee deleted");
      }
    },
  },
});

export default employeeSlice.reducer;
export const { addEmployee, editEmployee, deleteEmployee } = employeeSlice.actions;
