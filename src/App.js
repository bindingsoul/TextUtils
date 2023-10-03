import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="my-3"></div>
      <Textform heading="Enter the text to analyze"/>
      <About />
    </>
  );
}

export default App;
