import "./App.css";
import Nav from "./components/Nav";
import TalkWithUs from "./components/TalkWithUs";
function App() {
  return (
    <div className="App">
      <Nav />
      <TalkWithUs />
      <div className="mission">
        <h6 className="goal">Our Mission</h6>
        <div className="thegoal">
          <p>To guide the inexperienced and to enable the experienced to shine through, fulfilling any and all of your online needs.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
