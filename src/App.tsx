import "./App.css";
import { Header } from "./components/Header";
import { Container, Typography } from "@mui/material";

const App = () => {
  return (
    <>
      <section>
        {/* Header */}
        <Header />

        {/* Content */}
        <section className="content">
         <Container>
         <Typography variant="h4" gutterBottom>
            Welcome to My App
          </Typography>
          <Typography paragraph>
            This is the content area of my application. You can put any content
            here.
          </Typography>
         </Container>
        </section>
      </section>
    </>
  );
};

export default App;
