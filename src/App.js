import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Country from "./Country";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/country/:name" element={<Country />}></Route>
    </Routes>
  );
}

export default App;
