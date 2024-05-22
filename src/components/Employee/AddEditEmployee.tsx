import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import store from "../../redux/store/store";
import { Employee } from "../../models/emplyee";
import { addEmployee, editEmployee } from "../../redux/reducer/employeeReducer";
import { TextField, Button, Box, Typography, Container } from "@mui/material";

type FormField = {
  id: number;
  fullName: string;
  birthDate: Date;
  department: string;
  experience: number;
};

export default function EmployeeAdd() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormField>();
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState<Employee>({
    id: 0,
    fullName: "",
    birthDate: new Date(),
    department: "",
    experience: 0,
  });

  useEffect(() => {
    if (id) {
      const employeeData = store
        .getState()
        .persistReducers.employeeSlice.find(
          (employee: Employee) => employee.id === Number(id)
        );
      setEmployee(employeeData);
    }
  }, [id]);

  useEffect(() => {
    setValue("fullName", employee.fullName);
    setValue("birthDate", employee.birthDate);
    setValue("department", employee.department);
    setValue("experience", employee.experience);
  }, [employee, setValue]);

  const onSubmit = (data: FormField) => {
    data.id = employee.id;
    store.dispatch(!id ? addEmployee(data) : editEmployee(data));
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Box>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Typography variant="h4" component="h1" gutterBottom>
            {id ? "Edit" : "Add"} Employee
          </Typography>
          <Controller
            name="fullName"
            control={control}
            rules={{
              required: "Full name is required.",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Only letters (A-Z) are allowed.",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Full Name"
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="Full Name"
              />
            )}
          />
          <Controller
            name="birthDate"
            control={control}
            rules={{ required: "Birth date is required." }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Birth Date"
                type="date"
                variant="outlined"
                margin="normal"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!errors.birthDate}
                helperText={errors.birthDate?.message}
                placeholder="Birth date"
              />
            )}
          />
          <Controller
            name="department"
            control={control}
            rules={{ required: "Department is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Department"
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.department}
                helperText={errors.department?.message}
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="Department"
              />
            )}
          />
          <Controller
            name="experience"
            control={control}
            rules={{
              required: "Experience is required.",
              pattern: {
                value: /^\d+$/,
                message: "Only numbers are allowed.",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Experience"
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.experience}
                helperText={errors.experience?.message}
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="Experience"
              />
            )}
          />
          <Box sx={{ textAlign: "right" }}>
            <Button
              type="button"
              variant="outlined"
              fullWidth
              sx={{ mt: 2, mr: 2, px: 2}}
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, px:4}}
            >
              {id ? "Edit" : "Add"}
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
