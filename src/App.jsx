import "./App.css";
import Component from "./components/Component";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import Component5 from "./components/Component5";
import Component6 from "./components/Component6";

function App() {
  return <div className="tasks">
  <div><Component></Component></div>
  <div><Component2></Component2></div>
  <div><Component3></Component3></div>
  <div><Component4></Component4></div>
  <div><Component5></Component5></div>
  <div><Component6></Component6></div>
  </div>;
}

export default App;
