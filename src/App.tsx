import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      {/* Main section */}
      <section className="App">
        {/* Header */}
        <Header/>

        {/* Sidebar & content */}
        <section>
          {/* Sidebar */}
          <nav></nav>

          {/* Content */}
          <section></section>
        </section>
      </section>
    </>
  );
}

export default App;
