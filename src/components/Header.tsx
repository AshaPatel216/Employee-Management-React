import { Container } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"


export const Header = () => {
  return (
    <AppBar position="fixed">
      
      <Toolbar>
       <Container>
       <Typography variant="h6" component="div">
          Employee Management
        </Typography>
       </Container>
       
      </Toolbar>
      
     
    </AppBar>
  )
}