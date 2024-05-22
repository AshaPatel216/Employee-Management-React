import { Container } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"


export const Header = () => {
  return (
    <AppBar position="fixed">
      
      <Toolbar sx={{color:"inherit"}}>
      <Typography variant="h2">
          Employee Management
        </Typography>
      </Toolbar>
      
     
    </AppBar>
  )
}