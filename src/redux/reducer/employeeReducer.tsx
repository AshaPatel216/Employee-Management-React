import { createSlice } from "@reduxjs/toolkit";
import { employee } from "../../models/emplyee";

const initialState: employee[] = [];

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    // add employee
    addEmployee: (state, action) => {
      const lastEmployee = state[state.length - 1];
      action.payload.id = lastEmployee ? lastEmployee.id + 1 : 1;  // Assign a new ID
      state.push(action.payload);
    },
    // edit employee
    editEmployee: (state, action) => {
      const index = state.findIndex((employee) => employee.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    //delete employee
    deleteEmployee: (state, action) => {
      const index = state.findIndex((employee) => employee.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export default employeeSlice.reducer;
export const { addEmployee, editEmployee, deleteEmployee } = employeeSlice.actions;
