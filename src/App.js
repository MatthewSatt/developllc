import "./App.css";
import Nav from "./components/Nav";
import TalkWithUs from "./components/TalkWithUs";
import About from "./components/About";
import Better from "./components/Better";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <TalkWithUs />
      <About />
      <Better />
      <Footer />
    </div>
  );
}

export default App;
