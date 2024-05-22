import "./App.css";
import { Container } from "@mui/material";
import { ListEmployee } from "./components/Employee/ListEmployee";
import { Route, Routes } from "react-router-dom";
import AddEditEmployee from "./components/Employee/AddEditEmployee";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./shared/theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      {/* custom theme provider */}
      <div className="App">
      <Container className="content" sx={{p:5}}>
        {/* Routing */}
        <Routes>
          <Route path="/" element={<ListEmployee />} />
          <Route path="/add" element={<AddEditEmployee />} />
          <Route path="/edit/:id" element={<AddEditEmployee />}></Route>
        </Routes>
      </Container>
    </div>
  </ThemeProvider>

   
  );
};

export default App;
