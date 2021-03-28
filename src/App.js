import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "star",
              stroke: {
                width: 6,
                color: "#ff577f"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <About />
      <Education />
      <Work />
    </div>
  );
}

export default App;
